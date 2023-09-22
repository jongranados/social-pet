'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA;
	options.tableName = "Posts";
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
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,   
        references: {
          model: 'Users',
          key: 'id'
        }, 
        onDelete: 'cascade'
      },
      picturePath: {
        type: Sequelize.STRING
      },
      likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0, 
      },
      description: { 
        type: Sequelize.TEXT,
        allowNull: false,   
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {hasTrigger: true});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(options);
  }
};
