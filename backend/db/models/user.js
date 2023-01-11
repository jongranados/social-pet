'use strict';
const { Validator } = require('sequelize'); 

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: { 
      type: DataTypes.STRING, 
      allowNull: false,  
      validate: { 
        isAlpha(value) { 
          if (!Validator.isAlpha(value)) { 
            throw new Error('Must be a valid name.')
          }
        }
      },
    },
    lastName: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      validate: { 
        isAlpha(value) { 
          if (!Validator.isAlpha(value)) { 
            throw new Error('Must be a valid last name.')
          }
        }
      },
    },
    email: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      validate: { 
        len: [3, 256], 
        isEmail(value) { 
          if (!Validator.isEmail(value)) { 
            throw new Error('Must be a valid email.')
          }
        }
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
    picturePath: { 
      type: DataTypes.STRING, 
      allowNull: false,
    },
    location: { 
      type: DataTypes.STRING, 
      allowNull: false,  
    },
    occupation: { 
      type: DataTypes.STRING, 
      allowNull: false,  
    },
    viewedProfile: { 
      type: DataTypes.INTEGER, 
      allowNull: false,  
    },
    impressions: { 
      type: DataTypes.INTEGER, 
      allowNull: false,  
    }
  }, 
  {
    defaultScope: { 
      attributes: { 
        exclude: ['hashedPassword', 'email', 'createdAd', 'updatedAt']
      }
    }, 
    scopes: { 
      currentUser: { 
        attributes: { 
          exclude: ['hashedPassword'] 
        }
      }, 
      loginUser: {
        attributes: {}
      }
    }
  });

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
