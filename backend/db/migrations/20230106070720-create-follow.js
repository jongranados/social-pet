'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA;
	options.tableName = "Follows";
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
      followerId: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        refernces: { 
          model: 'Users', 
          key: 'id'
        }, 
        onDelete: 'cascade'
      },
      followeeId: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        refernces: { 
          model: 'Users', 
          key: 'id'
        }, 
        onDelete: 'cascade'
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
