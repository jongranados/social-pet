'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    picturePath: DataTypes.STRING,
    location: DataTypes.STRING,
    occupation: DataTypes.STRING,
    viewedProfile: DataTypes.INTEGER,
    impressions: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // association with Post model: 
    User.hasMany(
      models.Post,
      { 
        foreignKey: { name: 'userId', allowNull: false }, 
        onDelete: 'CASCADE',
        hooks: true
      }
    ); 

    // association with Comment model
    User.hasMany(
      models.Comment,
      { 
        foreignKey: { name: 'userId', allowNull: false }, 
        onDelete: 'CASCADE',
        hooks: true
      }
    ); 

    // association with Like model
    User.hasMany(
      models.Like,
      { 
        foreignKey: { name: 'userId', allowNull: false }, 
        onDelete: 'CASCADE',
        hooks: true
      }
    ); 

    // association with self (for user-to-user relationship modeling):
    User.belongsToMany(
      models.User, 
      { 
        through: models.Follow,
        as: 'followers', // sequelize alias required b/c of defacto ambiguity by this kinds of association - see: https://sequelize.org/docs/v6/core-concepts/assocs/#defining-an-alias
        foreignKey: { name: 'followerId', allowNull: false }, 
        otherKey: { name: 'followeeId', allowNull: false },
        onDelete: 'CASCADE',
        hooks: true
      }
    ) 

    User.belongsToMany(
      models.User, 
      { 
        through: models.Follow,
        as: 'followees', // sequelize alias required b/c of defacto ambiguity by this kinds of association - see: https://sequelize.org/docs/v6/core-concepts/assocs/#defining-an-alias
        foreignKey: { name: 'followeeId', allowNull: false }, 
        otherKey: { name: 'followerId', allowNull: false },
        onDelete: 'CASCADE',
        hooks: true
      }
    ) 
  };
  return User;
};
