module.exports = {
  apps : [{
    name: 'weityl-nuxt',
    script: 'server/index.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      key: '/c/Users/pc/.ssh/id_rsa',
      user : 'root',
      host : ['94.191.104.238'],
      ref  : 'origin/master',
      repo : 'git@github.com:weiavia/weityl-nuxt.git',
      path : '/root/weityl-nuxt',
      'post-deploy' : 'git pull && pm2 reload ecosystem.config.js --env production'
    }
  }
};