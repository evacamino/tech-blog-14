const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    // for (const project of projectData) {
    //   await Project.create({
    //     ...project,
    //     user_id: users[Math.floor(Math.random() * users.length)].id,
    //   });
    // }
  
    process.exit(0);
  };
  
  seedDatabase();