'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    postId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // association with User model: 
    Comment.belongsTo(
      models.User,
      { 
        foreignKey: { name: 'userId', allowNull: false }, 
        onDelete: 'CASCADE',
        hooks: true
      }
    ); 

    // association with Post model: 
    Comment.belongsTo(
      models.Post,
      { 
        foreignKey: { name: 'postId', allowNull: false }, 
        onDelete: 'CASCADE',
        hooks: true
      }
    );

  };
  return Comment;
};
