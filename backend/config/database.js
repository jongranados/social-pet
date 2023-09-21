const config = require('./index'); 

const db = config.db; 
const { username, password, database, hose } = db; 

module.exports = { 
  development: { 
    username, 
    password, 
    database, 
    hose, 
    dialect: 'postgres', 
    seederStorage: 'sequelize'
  }, 

  production: { 
    use_env_variables: 'DATABASE_URL', 
    dialect: 'postgres', 
    seederStorage: 'sequelize', 
    dialectOptions: { 
      ssl: { 
        require: true, 
        rejectUnauthorized: false
      }
    }, 
    define: { 
      schema: process.env.SCHEMA
    }
  }
};
