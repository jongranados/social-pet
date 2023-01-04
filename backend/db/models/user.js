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
    // associations can be defined here
  };
  return User;
};
