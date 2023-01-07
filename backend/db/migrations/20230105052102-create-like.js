'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postId: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        refernces: { 
          model: 'Posts', 
          key: 'id'
        }, 
        onDelete: 'cascade'
      },
      userId: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: { 
          model: 'Users', 
          key: 'id'
        }, 
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Likes');
  }
};
