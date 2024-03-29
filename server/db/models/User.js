const db = require('../db');
const Sequelize = require('sequelize');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
