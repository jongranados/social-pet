'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      email: {
        type: Sequelize.STRING, 
        allowNull: false, 
        unique: true
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY, 
        allowNull: false
      },
      picturePath: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      location: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      occupation: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      viewedProfile: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      impressions: {
        type: Sequelize.INTEGER, 
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE, 
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE, 
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
