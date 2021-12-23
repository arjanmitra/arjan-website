const db = require('./db');
const Section = require('./models/Section');

const User = require('./models/User');

const syncAndSeed = async () => {
  try {
    const arjan = await User.create({
      firstName: 'Arjan',
      lastName: 'Mitra',
    });
    const cv = await Section.create({
      name: 'cv',
      link: 'public/assets/Arjan Mitra - SE Resume (Dec2021).pdf',
    });
  } catch (error) {
    console.error('could not seed data!');
  }
};

module.exports = syncAndSeed;
