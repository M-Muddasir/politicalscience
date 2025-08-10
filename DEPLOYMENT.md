# Deployment Guide for Political Science Department Website

This guide will help you deploy the Political Science Department website to your EC2 instance with automatic deployment on GitHub pushes.

## Prerequisites

- EC2 Instance: `i-0f7d1ce1beaafb354` (Ubuntu/Linux)
- GitHub repository with your code
- SSH access to your EC2 instance
- Domain name (optional, for production)

## Step 1: Initial EC2 Setup

1. **Connect to your EC2 instance:**
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-public-ip
   ```

2. **Run the setup script:**
   ```bash
   # Make the script executable
   chmod +x deploy/ec2-setup.sh
   
   # Run the setup
   ./deploy/ec2-setup.sh
   ```

   This script will install:
   - Node.js 18.x
   - PostgreSQL
   - PM2 (Process Manager)
   - Nginx (Reverse Proxy)
   - Docker (optional)
   - Git

## Step 2: Initial Deployment

1. **Update the repository URL in the deployment script:**
   ```bash
   # Edit the script and update REPO_URL with your GitHub repository
   nano deploy/initial-deployment.sh
   ```

2. **Run the initial deployment:**
   ```bash
   chmod +x deploy/initial-deployment.sh
   ./deploy/initial-deployment.sh
   ```

3. **Configure environment variables:**
   ```bash
   cd /var/www/politicalscience
   cp .env.production.example .env.production
   nano .env.production
   ```

   Update the following variables:
   ```env
   DATABASE_URL="postgresql://politicalscience:secure_password_123@localhost:5432/politicalscience_db"
   NEXTAUTH_SECRET="your-super-secret-nextauth-key-here"
   NEXTAUTH_URL="https://your-domain.com"
   AWS_ACCESS_KEY_ID="your_aws_access_key_id"
AWS_SECRET_ACCESS_KEY="your_aws_secret_access_key"
   ```

4. **Restart the application:**
   ```bash
   pm2 restart politicalscience
   ```

## Step 3: Setup Automatic Deployment with GitHub Actions

1. **Add GitHub Secrets:**
   Go to your GitHub repository → Settings → Secrets and variables → Actions
   
   Add these secrets:
   - `EC2_HOST`: Your EC2 public IP address
   - `EC2_USERNAME`: `ubuntu` (or your EC2 username)
   - `EC2_SSH_KEY`: Your private SSH key content (the .pem file content)

2. **Update the GitHub Actions workflow:**
   The workflow file is already created at `.github/workflows/deploy.yml`
   
   Make sure your repository has the `main` branch as the default branch.

3. **Test the deployment:**
   Push any change to the `main` branch and check the Actions tab in your GitHub repository.

## Step 4: Configure Domain and SSL (Optional)

1. **Point your domain to EC2:**
   - Create an A record pointing to your EC2 public IP
   - Or use Route 53 if using AWS domains

2. **Setup SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

3. **Update Nginx configuration:**
   The SSL configuration will be automatically added by certbot.

## Step 5: Monitoring and Maintenance

### Check Application Status
```bash
# PM2 status
pm2 status
pm2 logs politicalscience
pm2 monit

# System status
sudo systemctl status nginx
sudo systemctl status postgresql

# Health check
/usr/local/bin/health-check
```

### Database Management
```bash
# Connect to database
sudo -u postgres psql politicalscience_db

# Backup database
pg_dump -U politicalscience -h localhost politicalscience_db > backup.sql

# Restore database
psql -U politicalscience -h localhost politicalscience_db < backup.sql
```

### Log Management
```bash
# View application logs
pm2 logs politicalscience

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# View system logs
sudo journalctl -u nginx
sudo journalctl -u postgresql
```

## Alternative: Docker Deployment

If you prefer containerized deployment:

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up -d
   ```

2. **Update environment variables:**
   ```bash
   # Edit docker-compose.yml with your actual values
   nano docker-compose.yml
   ```

3. **Restart containers:**
   ```bash
   docker-compose restart
   ```

## Troubleshooting

### Common Issues

1. **Application not starting:**
   ```bash
   pm2 logs politicalscience
   npm run build
   ```

2. **Database connection issues:**
   ```bash
   sudo systemctl status postgresql
   sudo -u postgres psql -c "\l"
   ```

3. **Nginx issues:**
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

4. **Port already in use:**
   ```bash
   sudo lsof -i :3000
   pm2 delete all
   pm2 start ecosystem.config.js
   ```

### Performance Optimization

1. **Enable Nginx caching:**
   ```nginx
   location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
   }
   ```

2. **Database optimization:**
   ```sql
   -- Add indexes for better performance
   CREATE INDEX idx_department_name ON "Department"(name);
   CREATE INDEX idx_faculty_department ON "Faculty"("departmentId");
   ```

3. **PM2 cluster mode:**
   ```bash
   pm2 start ecosystem.config.js --env production
   ```

## Security Checklist

- [ ] Change default PostgreSQL password
- [ ] Setup firewall rules (UFW)
- [ ] Enable fail2ban for SSH protection
- [ ] Regular security updates
- [ ] Backup strategy implementation
- [ ] SSL certificate setup
- [ ] Environment variables security

## Support

For issues or questions:
1. Check the logs first
2. Review this deployment guide
3. Check GitHub Actions for deployment errors
4. Monitor system resources with `htop`

---

**Note:** Remember to replace placeholder values (domain names, IPs, repository URLs) with your actual values before deployment.