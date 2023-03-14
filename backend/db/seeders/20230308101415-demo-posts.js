'use strict';
const { Post, User } = require('../models'); 
const data = require('../../data/index'); 

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // recursively seed Post table; randomized to mimic the variable nature of content-publication across an app's userbase
    while (data.length) {

      // choose a random user that has unpublished posts
      let randomIndex = Math.floor(Math.random() * data.length); 
      let username = data[randomIndex].user.username; 
      let user = await User.findOne({ where: { username } }); 
      let userId = user.id; 
      let firstName = user.firstName; 

      // retrive user's oldest unpublished post
      let unpublishedPosts = data[randomIndex].posts; 
      let targetPost = unpublishedPosts.shift();
      let description = targetPost.description; 
      let postCount = await Post.count({ where: { userId } }); 

      // seed db with content of their oldest post
      await Post.create({ 
        userId, 
        description, 
        picturePath: `${firstName.toLowerCase()}-post-${postCount + 1}`,
      }); 

      // remove user from list if they no longer have unpublished posts
      if (!unpublishedPosts.length) { 
        data.splice(randomIndex, 1);
      };

    }; 
  },

  down: async (queryInterface, Sequelize) => {
    await Post.destroy({ where: {} })
  }
};
