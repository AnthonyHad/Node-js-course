const Sequelize = require('sequelize'); //importing sequelize

const sequelize = new Sequelize('node-complete', 'root', 'chopin123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
