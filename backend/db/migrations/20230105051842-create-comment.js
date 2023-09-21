'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA;
	options.tableName = "Comments";
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
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,  
        references: { 
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
      description: {
        type: Sequelize.STRING, 
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
    }, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(options);
  }
};
