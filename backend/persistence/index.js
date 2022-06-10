const { Sequelize } = require('sequelize');
const config = require('../config');

const connection = new Sequelize(config.db.name, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: config.db.dialect,
});

try {
  await connection.authenticate();
  console.log('Database connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

