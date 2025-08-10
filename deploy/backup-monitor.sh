#!/bin/bash

# Backup and Monitoring Script for Political Science Department Website
# This script handles database backups and system monitoring

set -e

# Configuration
BACKUP_DIR="/var/backups/politicalscience"
DB_NAME="politicalscience_db"
DB_USER="politicalscience"
APP_DIR="/var/www/politicalscience"
LOG_FILE="/var/log/backup-monitor.log"
RETENTION_DAYS=30
ALERT_EMAIL="admin@yourdomain.com"  # Update with your email

# Create backup directory
sudo mkdir -p $BACKUP_DIR
sudo chown -R $USER:$USER $BACKUP_DIR

# Logging function
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a $LOG_FILE
}

# Database backup function
backup_database() {
    log "Starting database backup..."
    
    BACKUP_FILE="$BACKUP_DIR/db_backup_$(date +%Y%m%d_%H%M%S).sql"
    
    if pg_dump -U $DB_USER -h localhost $DB_NAME > $BACKUP_FILE; then
        log "Database backup completed: $BACKUP_FILE"
        
        # Compress the backup
        gzip $BACKUP_FILE
        log "Backup compressed: $BACKUP_FILE.gz"
        
        # Upload to S3 (optional)
        if command -v aws >/dev/null 2>&1; then
            aws s3 cp "$BACKUP_FILE.gz" "s3://your-backup-bucket/database/" || log "S3 upload failed"
        fi
    else
        log "ERROR: Database backup failed"
        send_alert "Database backup failed"
        return 1
    fi
}

# Application files backup function
backup_files() {
    log "Starting files backup..."
    
    BACKUP_FILE="$BACKUP_DIR/files_backup_$(date +%Y%m%d_%H%M%S).tar.gz"
    
    if tar -czf $BACKUP_FILE -C $APP_DIR public uploads .env.production; then
        log "Files backup completed: $BACKUP_FILE"
        
        # Upload to S3 (optional)
        if command -v aws >/dev/null 2>&1; then
            aws s3 cp "$BACKUP_FILE" "s3://your-backup-bucket/files/" || log "S3 upload failed"
        fi
    else
        log "ERROR: Files backup failed"
        send_alert "Files backup failed"
        return 1
    fi
}

# Cleanup old backups
cleanup_backups() {
    log "Cleaning up old backups..."
    find $BACKUP_DIR -name "*.sql.gz" -mtime +$RETENTION_DAYS -delete
    find $BACKUP_DIR -name "*.tar.gz" -mtime +$RETENTION_DAYS -delete
    log "Old backups cleaned up"
}

# System monitoring function
monitor_system() {
    log "Starting system monitoring..."
    
    # Check disk space
    DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
    if [ $DISK_USAGE -gt 80 ]; then
        log "WARNING: Disk usage is ${DISK_USAGE}%"
        send_alert "High disk usage: ${DISK_USAGE}%"
    fi
    
    # Check memory usage
    MEMORY_USAGE=$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')
    if [ $MEMORY_USAGE -gt 80 ]; then
        log "WARNING: Memory usage is ${MEMORY_USAGE}%"
        send_alert "High memory usage: ${MEMORY_USAGE}%"
    fi
    
    # Check application status
    if ! pm2 describe politicalscience > /dev/null 2>&1; then
        log "ERROR: Application is not running"
        send_alert "Application is down"
        
        # Try to restart
        log "Attempting to restart application..."
        cd $APP_DIR
        pm2 restart politicalscience || pm2 start ecosystem.config.js
    fi
    
    # Check database connectivity
    if ! pg_isready -U $DB_USER -h localhost -d $DB_NAME > /dev/null 2>&1; then
        log "ERROR: Database is not accessible"
        send_alert "Database connectivity issue"
    fi
    
    # Check Nginx status
    if ! systemctl is-active --quiet nginx; then
        log "ERROR: Nginx is not running"
        send_alert "Nginx is down"
        sudo systemctl start nginx
    fi
    
    # Check SSL certificate expiry (if using Let's Encrypt)
    if command -v certbot >/dev/null 2>&1; then
        CERT_EXPIRY=$(certbot certificates 2>/dev/null | grep "Expiry Date" | head -1 | awk '{print $3}')
        if [ ! -z "$CERT_EXPIRY" ]; then
            DAYS_TO_EXPIRY=$(( ($(date -d "$CERT_EXPIRY" +%s) - $(date +%s)) / 86400 ))
            if [ $DAYS_TO_EXPIRY -lt 30 ]; then
                log "WARNING: SSL certificate expires in $DAYS_TO_EXPIRY days"
                send_alert "SSL certificate expires in $DAYS_TO_EXPIRY days"
            fi
        fi
    fi
    
    log "System monitoring completed"
}

# Send alert function
send_alert() {
    local message="$1"
    log "ALERT: $message"
    
    # Send email alert (requires mailutils)
    if command -v mail >/dev/null 2>&1; then
        echo "Alert from Political Science Website Server: $message" | mail -s "Server Alert" $ALERT_EMAIL
    fi
    
    # Send to Slack (optional)
    if [ ! -z "$SLACK_WEBHOOK_URL" ]; then
        curl -X POST -H 'Content-type: application/json' \
            --data "{\"text\":\"🚨 Server Alert: $message\"}" \
            $SLACK_WEBHOOK_URL
    fi
}

# Performance monitoring
monitor_performance() {
    log "Monitoring application performance..."
    
    # Check response time
    RESPONSE_TIME=$(curl -o /dev/null -s -w '%{time_total}' http://localhost:3000 || echo "999")
    if (( $(echo "$RESPONSE_TIME > 5.0" | bc -l) )); then
        log "WARNING: Slow response time: ${RESPONSE_TIME}s"
        send_alert "Slow response time: ${RESPONSE_TIME}s"
    fi
    
    # Check PM2 process health
    PM2_STATUS=$(pm2 jlist | jq -r '.[] | select(.name=="politicalscience") | .pm2_env.status')
    if [ "$PM2_STATUS" != "online" ]; then
        log "WARNING: PM2 process status: $PM2_STATUS"
        send_alert "PM2 process not online: $PM2_STATUS"
    fi
    
    # Log current stats
    log "Current stats - Response time: ${RESPONSE_TIME}s, PM2 status: $PM2_STATUS"
}

# Main execution
case "$1" in
    backup)
        backup_database
        backup_files
        cleanup_backups
        ;;
    monitor)
        monitor_system
        monitor_performance
        ;;
    full)
        backup_database
        backup_files
        cleanup_backups
        monitor_system
        monitor_performance
        ;;
    *)
        echo "Usage: $0 {backup|monitor|full}"
        echo "  backup  - Run database and files backup"
        echo "  monitor - Run system monitoring"
        echo "  full    - Run both backup and monitoring"
        exit 1
        ;;
esac

log "Script execution completed"