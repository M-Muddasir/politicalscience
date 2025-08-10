module.exports = {
  apps: [
    {
      name: "politica",
      cwd: "/var/www/politicalscience",
      script: "npm",
      args: "start -- --port 3000 --hostname 0.0.0.0",
      env: {
        DATABASE_URL: "postgresql://politicalscience:secure_password_123@ec2-54-227-218-115.compute-1.amazonaws.com:5432/politicalscience_db"
      }
    }
  ]
};
