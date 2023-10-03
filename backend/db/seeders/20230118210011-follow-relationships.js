'use strict';
const { Follow } = require('../models'); 

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA;
	options.tableName = "Follows";
}

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // hard-coded guaranteed relationships (for app demonstration purposes): 
    let relationships = [ 
      { followerId: 1, followeeId: 2 }, // Havana follows Peony
      { followerId: 1, followeeId: 3 }, // Havana follows Milo
      { followerId: 1, followeeId: 4 }, // Havana follows Archie

      { followerId: 2, followeeId: 1 }, // Peony follows Havana
      { followerId: 2, followeeId: 3 }, // Peony follows Milo 
      { followerId: 2, followeeId: 4 }, // Peony follows Archie 

      { followerId: 3, followeeId: 1 }, // Milo follows Havana
      { followerId: 3, followeeId: 2 }, // Milo follows Peony
      { followerId: 3, followeeId: 4 }, // Milo follows Archie

      { followerId: 4, followeeId: 1 }, // Archie follows Havana
      { followerId: 4, followeeId: 2 }, // Archie follows Peony
      { followerId: 4, followeeId: 3 }, // Archie follows Milo
    ]; 

    // other randomized relationships: 
    for (let followerId = 1; followerId <= 30; followerId++) { 
      const count = Math.floor(Math.random() * (15 - 5 + 1)) + 5; // each user to follow 5 to 15 users

      for (let i = 0; i <= count; i++) { 
        const followeeId = Math.floor(Math.random() * (30 - 1 + 1)) + 1; 
        const isFollowing = relationships.find(relationship => (relationship.followerId === followerId) && (relationship.followeeId === followeeId)); // check if relationship already exists
        
        if ((followeeId !== followerId) && !isFollowing) { 
          relationships.push({ followerId, followeeId }); 
        };        
      }; 
    };

    await queryInterface.bulkInsert(options, relationships);  
  },

  down: async (queryInterface, Sequelize) => {
    await Follow.destroy({ where: {}, truncate: true })
  }
};
