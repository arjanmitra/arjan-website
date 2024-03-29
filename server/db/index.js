const db = require('./db');

const User = require('./models/User');
const Project = require('./models/Project');
const Section = require('./models/Section');
const syncAndSeed = require('./seed');

const init = async () => {
  try {
    await db.sync({ force: true });
    await syncAndSeed();
    console.log('connected');
  } catch (error) {
    console.log(error);
  }
};

User.hasMany(Project);
Project.belongsTo(User);

User.hasMany(Section);
Section.belongsTo(User);

module.exports = init;
