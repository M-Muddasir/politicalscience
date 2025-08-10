#!/bin/bash

# EC2 Setup Script for Political Science Department Website
# This script sets up the EC2 instance with all required dependencies

set -e

echo "Starting EC2 setup for Political Science Department Website..."

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Install PM2 for process management
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Install Git
sudo apt install -y git

# Install Docker (optional, for containerized deployment)
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER

# Create application directory
sudo mkdir -p /var/www/politicalscience
sudo chown -R $USER:$USER /var/www/politicalscience

# Setup PostgreSQL
sudo -u postgres psql -c "CREATE USER politicalscience WITH PASSWORD 'secure_password_123';"
sudo -u postgres psql -c "CREATE DATABASE politicalscience_db OWNER politicalscience;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE politicalscience_db TO politicalscience;"

# Configure PostgreSQL to allow connections
sudo sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/g" /etc/postgresql/*/main/postgresql.conf
echo "host all all 0.0.0.0/0 md5" | sudo tee -a /etc/postgresql/*/main/pg_hba.conf
sudo systemctl restart postgresql

# Setup Nginx configuration
sudo tee /etc/nginx/sites-available/politicalscience > /dev/null <<EOF
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/politicalscience /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

# Create deployment script
sudo tee /var/www/politicalscience/deploy.sh > /dev/null <<'EOF'
#!/bin/bash
set -e

echo "Starting deployment..."

# Navigate to app directory
cd /var/www/politicalscience

# Pull latest changes
git pull origin main

# Install dependencies
npm ci

# Run database migrations
npx prisma migrate deploy

# Build the application
npm run build

# Restart the application with PM2
pm2 restart politicalscience || pm2 start npm --name "politicalscience" -- start

echo "Deployment completed successfully!"
EOF

sudo chmod +x /var/www/politicalscience/deploy.sh

echo "EC2 setup completed successfully!"
echo "Next steps:"
echo "1. Clone your repository to /var/www/politicalscience"
echo "2. Set up environment variables"
echo "3. Run the initial deployment"
echo "4. Configure GitHub Actions for automatic deployment"