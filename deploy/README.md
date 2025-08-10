# Deployment Scripts for Political Science Department Website

This directory contains all the necessary scripts and configurations to deploy the Political Science Department website to your EC2 instance with automatic deployment capabilities.

## 📁 Files Overview

### Core Deployment Scripts
- **`quick-deploy.sh`** - One-click deployment script that automates the entire process
- **`ec2-setup.sh`** - Initial EC2 instance setup (Node.js, PostgreSQL, Nginx, PM2)
- **`initial-deployment.sh`** - First-time application deployment
- **`security-setup.sh`** - Security hardening for the EC2 instance
- **`backup-monitor.sh`** - Backup and monitoring automation

### Configuration Files
- **`../ecosystem.config.js`** - PM2 process management configuration
- **`../.github/workflows/deploy.yml`** - GitHub Actions for CI/CD
- **`../docker-compose.yml`** - Docker containerization setup
- **`../Dockerfile`** - Docker image configuration
- **`../nginx.conf`** - Nginx reverse proxy configuration
- **`../.env.production.example`** - Environment variables template

## 🚀 Quick Start (Recommended)

For a complete automated deployment, use the quick deployment script:

```bash
# Make the script executable
chmod +x deploy/quick-deploy.sh

# Run the automated deployment
./deploy/quick-deploy.sh
```

This script will:
1. ✅ Check requirements (AWS CLI, SSH keys)
2. 🔍 Get EC2 instance information
3. ⚙️ Set up the EC2 instance
4. 🔒 Configure security settings
5. 🚀 Deploy the application
6. 🌐 Set up SSL (if domain provided)
7. 📊 Configure monitoring
8. 🔄 Set up GitHub Actions

## 📋 Manual Deployment Steps

If you prefer manual deployment or need to troubleshoot:

### Step 1: EC2 Initial Setup
```bash
# Connect to your EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Copy and run the setup script
scp deploy/ec2-setup.sh ubuntu@your-ec2-ip:/tmp/
ssh ubuntu@your-ec2-ip "chmod +x /tmp/ec2-setup.sh && /tmp/ec2-setup.sh"
```

### Step 2: Security Configuration
```bash
# Copy and run security setup
scp deploy/security-setup.sh ubuntu@your-ec2-ip:/tmp/
ssh ubuntu@your-ec2-ip "chmod +x /tmp/security-setup.sh && /tmp/security-setup.sh"
```

### Step 3: Application Deployment
```bash
# Clone your repository
ssh ubuntu@your-ec2-ip "git clone YOUR_REPO_URL /var/www/politicalscience"

# Copy deployment scripts
scp deploy/initial-deployment.sh ubuntu@your-ec2-ip:/var/www/politicalscience/
scp deploy/backup-monitor.sh ubuntu@your-ec2-ip:/var/www/politicalscience/deploy/

# Run initial deployment
ssh ubuntu@your-ec2-ip "cd /var/www/politicalscience && chmod +x initial-deployment.sh && ./initial-deployment.sh"
```

### Step 4: Environment Configuration
```bash
# Configure environment variables
ssh ubuntu@your-ec2-ip "cd /var/www/politicalscience && cp .env.production.example .env.production"

# Edit the environment file with your actual values
ssh ubuntu@your-ec2-ip "nano /var/www/politicalscience/.env.production"

# Restart the application
ssh ubuntu@your-ec2-ip "pm2 restart politicalscience"
```

## 🔄 GitHub Actions Setup

For automatic deployment on every push to main branch:

1. **Add GitHub Secrets:**
   - Go to your repository → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `EC2_HOST`: Your EC2 public IP
     - `EC2_USERNAME`: `ubuntu`
     - `EC2_SSH_KEY`: Your private SSH key content

2. **Workflow File:**
   - The workflow is already configured in `.github/workflows/deploy.yml`
   - It will automatically deploy when you push to the `main` branch

## 🐳 Docker Deployment (Alternative)

For containerized deployment:

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build manually
docker build -t politicalscience .
docker run -d -p 3000:3000 --name politicalscience politicalscience
```

## 📊 Monitoring and Maintenance

### Health Checks
```bash
# Application status
ssh ubuntu@your-ec2-ip "pm2 status"

# System status
ssh ubuntu@your-ec2-ip "/usr/local/bin/system-status.sh"

# Security status
ssh ubuntu@your-ec2-ip "sudo fail2ban-client status"
```

### Logs
```bash
# Application logs
ssh ubuntu@your-ec2-ip "pm2 logs politicalscience"

# Nginx logs
ssh ubuntu@your-ec2-ip "sudo tail -f /var/log/nginx/access.log"

# Security logs
ssh ubuntu@your-ec2-ip "tail -f /var/log/security/security-monitor.log"
```

### Backups
```bash
# Manual backup
ssh ubuntu@your-ec2-ip "/var/www/politicalscience/deploy/backup-monitor.sh backup"

# Automated backups are configured via cron jobs
```

## 🔧 Configuration Details

### Environment Variables
Required environment variables in `.env.production`:

```env
DATABASE_URL="postgresql://politicalscience:secure_password_123@localhost:5432/politicalscience_db"
NEXTAUTH_SECRET="your-super-secret-nextauth-key-here"
NEXTAUTH_URL="https://your-domain.com"
AWS_ACCESS_KEY_ID="your_aws_access_key_id"
AWS_SECRET_ACCESS_KEY="your_aws_secret_access_key"
```

### Database Configuration
- **Database:** PostgreSQL 15
- **User:** politicalscience
- **Database:** politicalscience_db
- **Port:** 5432 (localhost only)

### Web Server Configuration
- **Application Port:** 3000
- **Nginx Port:** 80/443
- **Process Manager:** PM2
- **SSL:** Let's Encrypt (if domain configured)

## 🔒 Security Features

- **Firewall:** UFW configured with minimal open ports
- **Intrusion Prevention:** Fail2Ban with custom rules
- **SSH Hardening:** Key-only authentication, limited users
- **Database Security:** Local access only, strong passwords
- **Automatic Updates:** Security patches applied automatically
- **Log Monitoring:** Automated security monitoring
- **SSL/TLS:** HTTPS with Let's Encrypt certificates

## 🚨 Troubleshooting

### Common Issues

1. **Application won't start:**
   ```bash
   ssh ubuntu@your-ec2-ip "cd /var/www/politicalscience && npm run build"
   ssh ubuntu@your-ec2-ip "pm2 restart politicalscience"
   ```

2. **Database connection failed:**
   ```bash
   ssh ubuntu@your-ec2-ip "sudo systemctl status postgresql"
   ssh ubuntu@your-ec2-ip "sudo -u postgres psql -c '\l'"
   ```

3. **Nginx not working:**
   ```bash
   ssh ubuntu@your-ec2-ip "sudo nginx -t"
   ssh ubuntu@your-ec2-ip "sudo systemctl restart nginx"
   ```

4. **GitHub Actions failing:**
   - Check if SSH key is correctly added to GitHub secrets
   - Verify EC2 security groups allow SSH access
   - Check if the repository URL is accessible

### Performance Issues

1. **High memory usage:**
   ```bash
   ssh ubuntu@your-ec2-ip "pm2 restart politicalscience"
   ```

2. **Slow response times:**
   ```bash
   # Check system resources
   ssh ubuntu@your-ec2-ip "htop"
   
   # Optimize database
   ssh ubuntu@your-ec2-ip "sudo -u postgres psql politicalscience_db -c 'VACUUM ANALYZE;'"
   ```

## 📞 Support

For deployment issues:
1. Check the logs first
2. Review this documentation
3. Verify all configuration files
4. Test individual components

## 📝 Notes

- Replace `your-ec2-ip` with your actual EC2 public IP
- Replace `YOUR_REPO_URL` with your GitHub repository URL
- Update email addresses in monitoring scripts
- Customize domain names and SSL certificates as needed
- Regular security updates are automated but should be monitored

---

**EC2 Instance ID:** `i-0f7d1ce1beaafb354`

**Last Updated:** $(date '+%Y-%m-%d')

**Deployment Version:** 1.0.0