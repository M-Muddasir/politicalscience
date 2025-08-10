#!/bin/bash

# Initial Deployment Script for Political Science Department Website
# Run this script on your EC2 instance after the initial setup

set -e

EC2_INSTANCE_ID="i-0f7d1ce1beaafb354"
APP_DIR="/var/www/politicalscience"
REPO_URL="https://github.com/your-username/politicalscience.git"  # Update this with your actual repo URL

echo "Starting initial deployment for EC2 instance: $EC2_INSTANCE_ID"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if required tools are installed
if ! command_exists node; then
    echo "Error: Node.js is not installed. Please run ec2-setup.sh first."
    exit 1
fi

if ! command_exists pm2; then
    echo "Error: PM2 is not installed. Please run ec2-setup.sh first."
    exit 1
fi

if ! command_exists psql; then
    echo "Error: PostgreSQL is not installed. Please run ec2-setup.sh first."
    exit 1
fi

# Create application directory if it doesn't exist
sudo mkdir -p $APP_DIR
sudo chown -R $USER:$USER $APP_DIR

# Clone the repository
echo "Cloning repository..."
if [ -d "$APP_DIR/.git" ]; then
    echo "Repository already exists, pulling latest changes..."
    cd $APP_DIR
    git pull origin main
else
    echo "Cloning repository for the first time..."
    git clone $REPO_URL $APP_DIR
    cd $APP_DIR
fi

# Copy environment file
echo "Setting up environment variables..."
if [ ! -f ".env.production" ]; then
    cp .env.production.example .env.production
    echo "⚠️  Please edit .env.production with your actual configuration values"
    echo "⚠️  Update DATABASE_URL, NEXTAUTH_SECRET, and other required variables"
fi

# Install dependencies
echo "Installing dependencies..."
npm ci

# Generate Prisma client
echo "Generating Prisma client..."
npx prisma generate

# Run database migrations
echo "Running database migrations..."
npx prisma migrate deploy

# Seed the database (optional)
echo "Seeding database..."
npm run prisma:seed || echo "Seeding failed or no seed script available"

# Build the application
echo "Building application..."
npm run build

# Start the application with PM2
echo "Starting application with PM2..."
pm2 delete politicalscience 2>/dev/null || true
pm2 start npm --name "politicalscience" -- start
pm2 save
pm2 startup

# Setup log rotation for PM2
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true

# Create a simple health check script
cat > /tmp/health-check.sh << 'EOF'
#!/bin/bash
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)
if [ $response -eq 200 ]; then
    echo "✅ Application is healthy (HTTP $response)"
    exit 0
else
    echo "❌ Application is unhealthy (HTTP $response)"
    exit 1
fi
EOF

chmod +x /tmp/health-check.sh
sudo mv /tmp/health-check.sh /usr/local/bin/health-check

# Setup cron job for health checks
(crontab -l 2>/dev/null; echo "*/5 * * * * /usr/local/bin/health-check >> /var/log/health-check.log 2>&1") | crontab -

echo "✅ Initial deployment completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Edit /var/www/politicalscience/.env.production with your actual configuration"
echo "2. Restart the application: pm2 restart politicalscience"
echo "3. Check application status: pm2 status"
echo "4. View logs: pm2 logs politicalscience"
echo "5. Setup SSL certificate for HTTPS"
echo "6. Configure your domain DNS to point to this EC2 instance"
echo "7. Add GitHub secrets for automatic deployment:"
echo "   - EC2_HOST: Your EC2 public IP or domain"
echo "   - EC2_USERNAME: ubuntu (or your EC2 username)"
echo "   - EC2_SSH_KEY: Your private SSH key for EC2 access"
echo ""
echo "🔗 Application should be accessible at: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4):3000"
echo "🔗 Or through Nginx at: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)"
echo ""
echo "📊 Monitor your application:"
echo "   - PM2 status: pm2 monit"
echo "   - System resources: htop"
echo "   - Nginx status: sudo systemctl status nginx"
echo "   - PostgreSQL status: sudo systemctl status postgresql"