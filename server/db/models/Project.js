const Sequelize = require('sequelize');
const db = require('../db');

const Project = db.define('project', {
  name: {
    type: Sequelize.STRING,
  },
  link: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Project;
