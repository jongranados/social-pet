'use strict';
const { Post, User } = require('../models'); 
const data = require('../../data/index'); 

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA;
	options.tableName = "Posts";
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // generate posts; randomized effort to mimic the variable nature of content-publication across the app's userbase
    let demoPosts = []; 
    data = JSON.parse(JSON.stringify(data)); // deeply clone mock data to prevent mutating original source

    while (data.length) {

      // choose a random user that has pending posts
      let randomIndex = Math.floor(Math.random() * data.length); 
      let username = data[randomIndex].user.username; 
      let user = await User.findOne({ where: { username } }); 
      let userId = user.id; 
      let firstName = user.firstName; 

      // retrive user's oldest pending post
      let unpublishedPosts = data[randomIndex].posts; 
      let targetPost = unpublishedPosts.shift();
      let description = targetPost.description; 
      let postCount = await Post.count({ where: { userId } }); 

      // add post to running collection
      demoPosts.push({ 
        userId, 
        description, 
        picturePath: `${firstName.toLowerCase()}-post-${postCount + 1}`,
      }); 

      // remove user from list if they no longer have pending posts
      if (!unpublishedPosts.length) { 
        data.splice(randomIndex, 1);
      };
    }; 

    // finally, add the collection of posts to the database
    await queryInterface.bulkInsert(options, demoPosts);  
  },

  down: async (queryInterface, Sequelize) => {
    await Post.destroy({ where: {} })
  }
};
