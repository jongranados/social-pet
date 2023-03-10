'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    postId: { 
      type: DataTypes.INTEGER, 
      allowNull: false,  
    },
    userId: { 
      type: DataTypes.INTEGER, 
      allowNull: false,  
    },
  }, {});
  Like.associate = function(models) {
    // association with User model: 
    Like.belongsTo(
      models.User,
      { 
        foreignKey: { name: 'userId', allowNull: false }, 
        onDelete: 'CASCADE',
        hooks: true
      }
    ); 

    // association with Post model: 
    Like.belongsTo(
      models.Post,
      { 
        foreignKey: { name: 'postId', allowNull: false }, 
        onDelete: 'CASCADE',
        hooks: true
      }
    );

  };
  return Like;
};
