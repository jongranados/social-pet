'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    picturePath: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // association with User model: 
    Post.belongsTo(
      models.User,
      { 
        foreignKey: { name: 'userId', allowNull: false }, 
        onDelete: 'CASCADE',
        hooks: true
      }
    ); 

    // association with Comment model: 
    Post.hasMany(
      models.Comment,
      { 
        foreignKey: { name: 'postId', allowNull: false }, 
        onDelete: 'CASCADE',
        hooks: true
      }
    ); 

    // association with Like model: 
    Post.hasMany(
      models.Like,
      { 
        foreignKey: { name: 'postId', allowNull: false }, 
        onDelete: 'CASCADE',
        hooks: true
      }
    ); 

  };
  return Post;
};
