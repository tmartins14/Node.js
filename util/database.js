const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Laurier14!', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
