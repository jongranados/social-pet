'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA;
	options.tableName = "Users";
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(options, {
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
      username: { 
        type: Sequelize.STRING, 
        allowNull: false, 
        unique: true
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
      gotchaDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      species: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      breed: {
        type: Sequelize.STRING, 
        allowNull: false
      }, 
      location: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      bio: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      profileViews: {
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
    }, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(options);
  }
};
