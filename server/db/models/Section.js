const db = require('../db');
const Sequelize = require('sequelize');

const Section = db.define('section', {
  name: {
    type: Sequelize.STRING,
  },
  link: {
    type: Sequelize.STRING,
  },
});

module.exports = Section;
