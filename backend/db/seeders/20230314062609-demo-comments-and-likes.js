'use strict';
const { User, Post, Comment, Like, Follow } = require('../models'); 
const data = require('../../data/index'); 

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // loop through each mock user's data
    for (let i = 0; i < data.length; i++) { 
      let datum = data[i]; 
      let posts = datum.posts; 

      // loop through each mock user's posts
      for (let j = 0; j < posts.length; j++) { 
        let username = datum.user.username; 
        let user = await User.findOne({ where: { username } }); 

        let comments = posts[j].comments; 
        let description = posts[j].description; 
        let post = await Post.findOne({ where: { description } }); 

        let followeeIds = await Follow.findAll({ 
          where: { followeeId: user.id }, 
          attributes: ['followerId'], 
          raw: true 
        }); 

        // loop through each mock user's posts' comments 
        for (let k = 0; k < comments.length; k++) { 
          let comment = comments[k];

          // assign comment to a random person that follows this user
          let randomIndex = Math.floor(Math.random() * followeeIds.length); 
          let authorId = followeeIds.splice(randomIndex, 1).pop().followerId;

          // seed db's Comment table
          await Comment.create({ 
            userId: authorId, 
            postId: post.id, 
            description: comment,
          }); 

          // seed db's Like table. conditional ensures that only a subset of users that comment on a post also like the post
          if (Math.random() < 0.7) { 
            await Like.create({ 
              userId: authorId, 
              postId: post.id, 
            }); 
          };
        
          // break out of loop if we run out of followers before running out of unpublished comments
          if (!followeeIds.length) { break; } 
        };
      };
    };
  },

  down: async (queryInterface, Sequelize) => {
    await Comment.destroy({ where: {} });
    await Like.destroy({ where: {} });
  }
};
