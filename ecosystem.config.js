module.exports = {
  apps: [
    {
      name: "politica",
      cwd: "/var/www/politicalscience",
      script: "npm",
      args: "start -- --port 3000 --hostname 0.0.0.0",
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        DATABASE_URL: 'postgresql://politicalscience:secure_password_123@localhost:5432/politicalscience_db'
      }
    }
  ]
};
