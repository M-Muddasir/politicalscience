module.exports = {
  apps: [
    {
      name: 'politicalscience',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/politicalscience',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: '/var/log/pm2/politicalscience-error.log',
      out_file: '/var/log/pm2/politicalscience-out.log',
      log_file: '/var/log/pm2/politicalscience-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: ['your-ec2-public-ip'], // Replace with your EC2 public IP
      ref: 'origin/main',
      repo: 'https://github.com/your-username/politicalscience.git', // Replace with your repo URL
      path: '/var/www/politicalscience',
      'pre-deploy-local': '',
      'post-deploy': 'npm ci && npx prisma generate && npx prisma migrate deploy && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'sudo mkdir -p /var/www && sudo chown -R ubuntu:ubuntu /var/www'
    }
  }
};