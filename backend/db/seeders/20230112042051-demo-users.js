'use strict';
const bcrypt = require('bcrypt'); 
const { User } = require('../models');
const data = require('../../data/index');  

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let demoUsers = data.map((data, i) => { 
      let index = i + 1; 
      let user = data.user;
      let profileViews = Math.floor(Math.random() * (20000 - 2000 + 1)) + 2000;
      let impressions = Math.floor((Math.random() * (0.8 - 0.3) + 0.3) * profileViews);

      let demoUser = { 
        firstName: user.firstName, 
        lastName: user.lastName, 
        username: user.username, 
        email: `${user.firstName.toLowerCase() + user.lastName.toLowerCase()}@gmail.com`, 
        hashedPassword: bcrypt.hashSync(`password${index}`, 10), 
        picturePath: `user-${index}`, 
        gotchaDate: user.gotchaData, 
        species: user.species, 
        breed: user.breed, 
        location: user.location, 
        bio: user.bio, 
        profileViews, 
        impressions
      }; 

      return demoUser; 
    }); 

    console.log(JSON.stringify(demoUsers)); 

    await queryInterface.bulkInsert('Users', demoUsers);  
  },

  down: async (queryInterface, Sequelize) => {
    await User.destroy({ where: {} })
  }
};
