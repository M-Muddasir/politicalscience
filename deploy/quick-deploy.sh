#!/bin/bash

# Quick Deployment Script for Political Science Department Website
# This script automates the entire deployment process

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
EC2_INSTANCE_ID="i-0f7d1ce1beaafb354"
EC2_USER="ubuntu"
EC2_HOST=""  # Will be set automatically
APP_NAME="politicalscience"
REPO_URL=""  # Will be prompted
DOMAIN_NAME=""  # Will be prompted

# Functions
print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

check_requirements() {
    print_header "Checking Requirements"
    
    # Check if AWS CLI is installed
    if ! command -v aws &> /dev/null; then
        print_error "AWS CLI is not installed. Please install it first."
        exit 1
    fi
    
    # Check if jq is installed
    if ! command -v jq &> /dev/null; then
        print_warning "jq is not installed. Installing..."
        if [[ "$OSTYPE" == "darwin"* ]]; then
            brew install jq
        else
            sudo apt-get install -y jq
        fi
    fi
    
    print_success "Requirements check completed"
}

get_ec2_info() {
    print_header "Getting EC2 Instance Information"
    
    # Get EC2 public IP
    EC2_HOST=$(aws ec2 describe-instances \
        --instance-ids $EC2_INSTANCE_ID \
        --query 'Reservations[0].Instances[0].PublicIpAddress' \
        --output text)
    
    if [ "$EC2_HOST" == "None" ] || [ -z "$EC2_HOST" ]; then
        print_error "Could not get EC2 public IP. Please check instance ID and AWS credentials."
        exit 1
    fi
    
    print_success "EC2 Public IP: $EC2_HOST"
}

get_user_input() {
    print_header "Configuration Setup"
    
    # Get repository URL
    read -p "Enter your GitHub repository URL: " REPO_URL
    if [ -z "$REPO_URL" ]; then
        print_error "Repository URL is required"
        exit 1
    fi
    
    # Get domain name (optional)
    read -p "Enter your domain name (optional, press Enter to skip): " DOMAIN_NAME
    
    print_success "Configuration collected"
}

setup_ssh_key() {
    print_header "Setting up SSH Key"
    
    # Check if SSH key exists
    if [ ! -f ~/.ssh/id_rsa ]; then
        print_warning "SSH key not found. Generating new key..."
        ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""
    fi
    
    # Copy public key to EC2
    print_warning "Please ensure your SSH key is added to the EC2 instance"
    echo "Your public key:"
    cat ~/.ssh/id_rsa.pub
    echo ""
    read -p "Press Enter after adding the key to your EC2 instance..."
    
    print_success "SSH key setup completed"
}

test_connection() {
    print_header "Testing Connection"
    
    if ssh -o ConnectTimeout=10 -o StrictHostKeyChecking=no $EC2_USER@$EC2_HOST "echo 'Connection successful'"; then
        print_success "SSH connection successful"
    else
        print_error "SSH connection failed. Please check your SSH key and security groups."
        exit 1
    fi
}

run_ec2_setup() {
    print_header "Running EC2 Setup"
    
    # Copy setup scripts to EC2
    scp -o StrictHostKeyChecking=no deploy/ec2-setup.sh $EC2_USER@$EC2_HOST:/tmp/
    scp -o StrictHostKeyChecking=no deploy/security-setup.sh $EC2_USER@$EC2_HOST:/tmp/
    
    # Run setup scripts
    ssh $EC2_USER@$EC2_HOST "chmod +x /tmp/ec2-setup.sh && /tmp/ec2-setup.sh"
    
    print_success "EC2 setup completed"
}

run_security_setup() {
    print_header "Running Security Setup"
    
    ssh $EC2_USER@$EC2_HOST "chmod +x /tmp/security-setup.sh && /tmp/security-setup.sh"
    
    print_success "Security setup completed"
}

deploy_application() {
    print_header "Deploying Application"
    
    # Clone repository
    ssh $EC2_USER@$EC2_HOST "git clone $REPO_URL /var/www/politicalscience || (cd /var/www/politicalscience && git pull origin main)"
    
    # Copy deployment scripts
    scp -o StrictHostKeyChecking=no deploy/initial-deployment.sh $EC2_USER@$EC2_HOST:/var/www/politicalscience/
    scp -o StrictHostKeyChecking=no deploy/backup-monitor.sh $EC2_USER@$EC2_HOST:/var/www/politicalscience/deploy/
    
    # Update repository URL in deployment script
    ssh $EC2_USER@$EC2_HOST "sed -i 's|REPO_URL=.*|REPO_URL=\"$REPO_URL\"|' /var/www/politicalscience/initial-deployment.sh"
    
    # Run initial deployment
    ssh $EC2_USER@$EC2_HOST "cd /var/www/politicalscience && chmod +x initial-deployment.sh && ./initial-deployment.sh"
    
    print_success "Application deployment completed"
}

setup_environment() {
    print_header "Setting up Environment Variables"
    
    # Create environment file on EC2
    ssh $EC2_USER@$EC2_HOST "cd /var/www/politicalscience && cp .env.production.example .env.production"
    
    # Update environment variables
    if [ ! -z "$DOMAIN_NAME" ]; then
        ssh $EC2_USER@$EC2_HOST "sed -i 's|NEXTAUTH_URL=.*|NEXTAUTH_URL=\"https://$DOMAIN_NAME\"|' /var/www/politicalscience/.env.production"
    else
        ssh $EC2_USER@$EC2_HOST "sed -i 's|NEXTAUTH_URL=.*|NEXTAUTH_URL=\"http://$EC2_HOST\"|' /var/www/politicalscience/.env.production"
    fi
    
    # Generate random NextAuth secret
    NEXTAUTH_SECRET=$(openssl rand -base64 32)
    ssh $EC2_USER@$EC2_HOST "sed -i 's|NEXTAUTH_SECRET=.*|NEXTAUTH_SECRET=\"$NEXTAUTH_SECRET\"|' /var/www/politicalscience/.env.production"
    
    print_success "Environment variables configured"
}

setup_ssl() {
    if [ ! -z "$DOMAIN_NAME" ]; then
        print_header "Setting up SSL Certificate"
        
        ssh $EC2_USER@$EC2_HOST "sudo apt install -y certbot python3-certbot-nginx"
        ssh $EC2_USER@$EC2_HOST "sudo certbot --nginx -d $DOMAIN_NAME --non-interactive --agree-tos --email admin@$DOMAIN_NAME"
        
        print_success "SSL certificate configured"
    else
        print_warning "Skipping SSL setup (no domain provided)"
    fi
}

setup_github_actions() {
    print_header "GitHub Actions Setup Instructions"
    
    echo "To enable automatic deployment, add these secrets to your GitHub repository:"
    echo ""
    echo "Repository Settings → Secrets and variables → Actions → New repository secret"
    echo ""
    echo "EC2_HOST: $EC2_HOST"
    echo "EC2_USERNAME: $EC2_USER"
    echo "EC2_SSH_KEY: (paste your private SSH key content)"
    echo ""
    echo "Your private SSH key:"
    cat ~/.ssh/id_rsa
    echo ""
    
    print_warning "Please add these secrets to your GitHub repository for automatic deployment"
}

run_health_check() {
    print_header "Running Health Check"
    
    sleep 10  # Wait for application to start
    
    if curl -f http://$EC2_HOST > /dev/null 2>&1; then
        print_success "Application is running and accessible"
    else
        print_warning "Application might not be fully ready yet. Check logs with: ssh $EC2_USER@$EC2_HOST 'pm2 logs politicalscience'"
    fi
}

print_summary() {
    print_header "Deployment Summary"
    
    echo "🎉 Deployment completed successfully!"
    echo ""
    echo "📋 Deployment Details:"
    echo "   • EC2 Instance: $EC2_INSTANCE_ID"
    echo "   • Public IP: $EC2_HOST"
    echo "   • Repository: $REPO_URL"
    if [ ! -z "$DOMAIN_NAME" ]; then
        echo "   • Domain: $DOMAIN_NAME"
        echo "   • URL: https://$DOMAIN_NAME"
    else
        echo "   • URL: http://$EC2_HOST"
    fi
    echo ""
    echo "🔧 Management Commands:"
    echo "   • Check status: ssh $EC2_USER@$EC2_HOST 'pm2 status'"
    echo "   • View logs: ssh $EC2_USER@$EC2_HOST 'pm2 logs politicalscience'"
    echo "   • Restart app: ssh $EC2_USER@$EC2_HOST 'pm2 restart politicalscience'"
    echo "   • System status: ssh $EC2_USER@$EC2_HOST '/usr/local/bin/system-status.sh'"
    echo ""
    echo "📊 Monitoring:"
    echo "   • Application logs: /var/log/pm2/"
    echo "   • Security logs: /var/log/security/"
    echo "   • Backup logs: /var/log/backup-monitor.log"
    echo ""
    echo "🔒 Security:"
    echo "   • Firewall: Enabled (UFW)"
    echo "   • Intrusion prevention: Enabled (Fail2Ban)"
    echo "   • Automatic updates: Enabled"
    echo "   • SSL: $([ ! -z "$DOMAIN_NAME" ] && echo "Enabled" || echo "Not configured")"
    echo ""
    echo "🚀 Next Steps:"
    echo "   1. Test your application thoroughly"
    echo "   2. Set up monitoring and alerting"
    echo "   3. Configure backup strategy"
    echo "   4. Add GitHub secrets for automatic deployment"
    echo "   5. Set up custom domain (if not done already)"
}

# Main execution
main() {
    print_header "Political Science Department Website Deployment"
    
    check_requirements
    get_user_input
    get_ec2_info
    setup_ssh_key
    test_connection
    run_ec2_setup
    run_security_setup
    deploy_application
    setup_environment
    setup_ssl
    run_health_check
    setup_github_actions
    print_summary
}

# Run main function
main "$@"