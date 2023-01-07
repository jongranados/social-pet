'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: { 
      type: DataTypes.INTEGER, 
      allowNull: false,  
    },
    description: { 
      type: DataTypes.STRING, 
      allowNull: false,  
    }, 
    picturePath: { 
      type: DataTypes.STRING, 
      allowNull: false,  
    },
    likes: { 
      type: DataTypes.INTEGER, 
      allowNull: false,  
    }
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
