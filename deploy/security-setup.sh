#!/bin/bash

# Security Setup Script for EC2 Instance
# This script implements security best practices for the production server

set -e

echo "Starting security setup for EC2 instance..."

# Update system packages
sudo apt update && sudo apt upgrade -y

# Install security tools
sudo apt install -y ufw fail2ban unattended-upgrades apt-listchanges

# Configure UFW (Uncomplicated Firewall)
echo "Configuring firewall..."
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 5432/tcp  # PostgreSQL (restrict this if not needed externally)
sudo ufw --force enable

# Configure Fail2Ban
echo "Configuring Fail2Ban..."
sudo tee /etc/fail2ban/jail.local > /dev/null <<EOF
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3
ignoreip = 127.0.0.1/8 ::1

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
bantime = 3600

[nginx-http-auth]
enabled = true
filter = nginx-http-auth
logpath = /var/log/nginx/error.log
maxretry = 3
bantime = 3600

[nginx-noscript]
enabled = true
port = http,https
filter = nginx-noscript
logpath = /var/log/nginx/access.log
maxretry = 6
bantime = 86400

[nginx-badbots]
enabled = true
port = http,https
filter = nginx-badbots
logpath = /var/log/nginx/access.log
maxretry = 2
bantime = 86400

[nginx-noproxy]
enabled = true
port = http,https
filter = nginx-noproxy
logpath = /var/log/nginx/access.log
maxretry = 2
bantime = 86400
EOF

# Create custom Fail2Ban filters
sudo tee /etc/fail2ban/filter.d/nginx-noscript.conf > /dev/null <<EOF
[Definition]
failregex = ^<HOST> -.*GET.*(\\.|%2e)(\\.|%2e)(/|%2f)
ignoreregex =
EOF

sudo tee /etc/fail2ban/filter.d/nginx-badbots.conf > /dev/null <<EOF
[Definition]
failregex = ^<HOST> -.*\"(GET|POST).*HTTP.*\"(?:(?![1-4]\\d\\d|50[0-4]).)*$
ignoreregex =
EOF

sudo tee /etc/fail2ban/filter.d/nginx-noproxy.conf > /dev/null <<EOF
[Definition]
failregex = ^<HOST> -.*GET http.*
ignoreregex =
EOF

# Start and enable Fail2Ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

# Configure automatic security updates
echo "Configuring automatic security updates..."
sudo tee /etc/apt/apt.conf.d/50unattended-upgrades > /dev/null <<EOF
Unattended-Upgrade::Allowed-Origins {
    "\${distro_id}:\${distro_codename}";
    "\${distro_id}:\${distro_codename}-security";
    "\${distro_id}ESMApps:\${distro_codename}-apps-security";
    "\${distro_id}ESM:\${distro_codename}-infra-security";
};

Unattended-Upgrade::Package-Blacklist {
};

Unattended-Upgrade::DevRelease "false";
Unattended-Upgrade::Remove-Unused-Dependencies "true";
Unattended-Upgrade::Automatic-Reboot "false";
Unattended-Upgrade::Automatic-Reboot-Time "02:00";
EOF

sudo tee /etc/apt/apt.conf.d/20auto-upgrades > /dev/null <<EOF
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
APT::Periodic::Download-Upgradeable-Packages "1";
APT::Periodic::AutocleanInterval "7";
EOF

# Secure SSH configuration
echo "Securing SSH configuration..."
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup

sudo tee -a /etc/ssh/sshd_config > /dev/null <<EOF

# Security hardening
Protocol 2
PermitRootLogin no
PasswordAuthentication no
PermitEmptyPasswords no
ChallengeResponseAuthentication no
UsePAM yes
X11Forwarding no
PrintMotd no
ClientAliveInterval 300
ClientAliveCountMax 2
MaxAuthTries 3
MaxSessions 2
LoginGraceTime 60
AllowUsers ubuntu
EOF

# Restart SSH service
sudo systemctl restart sshd

# Secure PostgreSQL
echo "Securing PostgreSQL..."
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'secure_postgres_password_123';"

# Update PostgreSQL configuration for security
sudo sed -i "s/#listen_addresses = 'localhost'/listen_addresses = 'localhost'/g" /etc/postgresql/*/main/postgresql.conf
sudo sed -i "s/#port = 5432/port = 5432/g" /etc/postgresql/*/main/postgresql.conf

# Restrict PostgreSQL access
sudo tee /etc/postgresql/*/main/pg_hba.conf > /dev/null <<EOF
# PostgreSQL Client Authentication Configuration File
local   all             postgres                                peer
local   all             all                                     peer
host    all             all             127.0.0.1/32            md5
host    all             all             ::1/128                 md5
host    politicalscience_db    politicalscience    127.0.0.1/32    md5
EOF

sudo systemctl restart postgresql

# Set up log monitoring
echo "Setting up log monitoring..."
sudo mkdir -p /var/log/security

# Create security monitoring script
sudo tee /usr/local/bin/security-monitor.sh > /dev/null <<'EOF'
#!/bin/bash

LOG_FILE="/var/log/security/security-monitor.log"
ALERT_EMAIL="admin@yourdomain.com"

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> $LOG_FILE
}

# Check for failed login attempts
FAILED_LOGINS=$(grep "Failed password" /var/log/auth.log | grep "$(date '+%b %d')" | wc -l)
if [ $FAILED_LOGINS -gt 10 ]; then
    log "WARNING: $FAILED_LOGINS failed login attempts today"
    echo "Security Alert: $FAILED_LOGINS failed login attempts detected" | mail -s "Security Alert" $ALERT_EMAIL 2>/dev/null || true
fi

# Check for new users
NEW_USERS=$(grep "new user" /var/log/auth.log | grep "$(date '+%b %d')" | wc -l)
if [ $NEW_USERS -gt 0 ]; then
    log "WARNING: $NEW_USERS new users created today"
    echo "Security Alert: $NEW_USERS new users created" | mail -s "Security Alert" $ALERT_EMAIL 2>/dev/null || true
fi

# Check for privilege escalation
SUDO_USAGE=$(grep "sudo" /var/log/auth.log | grep "$(date '+%b %d')" | wc -l)
if [ $SUDO_USAGE -gt 50 ]; then
    log "INFO: $SUDO_USAGE sudo commands executed today"
fi

# Check disk space
DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ $DISK_USAGE -gt 90 ]; then
    log "CRITICAL: Disk usage is ${DISK_USAGE}%"
    echo "Critical Alert: Disk usage is ${DISK_USAGE}%" | mail -s "Critical Alert" $ALERT_EMAIL 2>/dev/null || true
fi

log "Security monitoring completed"
EOF

sudo chmod +x /usr/local/bin/security-monitor.sh

# Set up cron jobs for security monitoring
(crontab -l 2>/dev/null; echo "0 */6 * * * /usr/local/bin/security-monitor.sh") | crontab -
(crontab -l 2>/dev/null; echo "0 2 * * * /var/www/politicalscience/deploy/backup-monitor.sh backup") | crontab -
(crontab -l 2>/dev/null; echo "*/15 * * * * /var/www/politicalscience/deploy/backup-monitor.sh monitor") | crontab -

# Install and configure logrotate for application logs
sudo tee /etc/logrotate.d/politicalscience > /dev/null <<EOF
/var/log/pm2/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    copytruncate
}

/var/log/security/*.log {
    daily
    missingok
    rotate 90
    compress
    delaycompress
    notifempty
    copytruncate
}
EOF

# Set proper file permissions
echo "Setting file permissions..."
sudo chown -R ubuntu:ubuntu /var/www/politicalscience
sudo chmod -R 755 /var/www/politicalscience
sudo chmod 600 /var/www/politicalscience/.env.production

# Create system monitoring dashboard script
sudo tee /usr/local/bin/system-status.sh > /dev/null <<'EOF'
#!/bin/bash

echo "=== System Status Dashboard ==="
echo "Date: $(date)"
echo ""

echo "=== System Resources ==="
echo "CPU Usage: $(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)%"
echo "Memory Usage: $(free | awk 'NR==2{printf "%.1f%%", $3*100/$2}')" 
echo "Disk Usage: $(df -h / | awk 'NR==2{print $5}')"
echo ""

echo "=== Application Status ==="npm2 list | grep politicalscience || echo "Application not running"
echo ""

echo "=== Database Status ==="
pg_isready -U politicalscience -h localhost -d politicalscience_db && echo "Database: Online" || echo "Database: Offline"
echo ""

echo "=== Web Server Status ==="
systemctl is-active nginx && echo "Nginx: Active" || echo "Nginx: Inactive"
echo ""

echo "=== Security Status ==="
sudo fail2ban-client status | grep "Number of jail" || echo "Fail2Ban: Not configured"
sudo ufw status | grep "Status:" || echo "UFW: Not configured"
echo ""

echo "=== Recent Failed Logins ==="
grep "Failed password" /var/log/auth.log | tail -5 || echo "No recent failed logins"
EOF

sudo chmod +x /usr/local/bin/system-status.sh

# Install additional security tools
sudo apt install -y rkhunter chkrootkit

# Configure rkhunter
sudo rkhunter --update
sudo rkhunter --propupd

echo "✅ Security setup completed successfully!"
echo ""
echo "📋 Security measures implemented:"
echo "✓ UFW firewall configured"
echo "✓ Fail2Ban intrusion prevention"
echo "✓ Automatic security updates"
echo "✓ SSH hardening"
echo "✓ PostgreSQL security"
echo "✓ Log monitoring"
echo "✓ File permissions"
echo "✓ Rootkit detection tools"
echo ""
echo "📊 Monitor your system:"
echo "   - Security status: /usr/local/bin/system-status.sh"
echo "   - Fail2Ban status: sudo fail2ban-client status"
echo "   - Firewall status: sudo ufw status"
echo "   - Security logs: tail -f /var/log/security/security-monitor.log"
echo ""
echo "⚠️  Important:"
echo "   - Update the alert email in security scripts"
echo "   - Regularly review security logs"
echo "   - Keep system packages updated"
echo "   - Monitor for security advisories"