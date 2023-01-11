'use strict';
const { Validator } = require('sequelize'); 
const bcrypt = require('bcrypt'); 

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
        exclude: ['hashedPassword', 'email', 'picturePath', 'location', 'occupation', 'viewedProfile', 'impressions', 'createdAt', 'updatedAt']
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

  // model methods - implemented to limit and segment the logic that explicitly interacts with the Users table
  User.prototype.toSafeObject = function() { 
    const { id, username, email } = this; 
    return { 
      id, 
      username, 
      email,
    }
  };

  User.prototype.validatePassword = function(password) { 
    return bcrypt.compareSync(password, this.hashedPassword.toString()); 
  };

  User.getCurrentUserById = function(id) { 
    return User.scope('currentUser').findByPk(id); 
  };

  User.login = async function({ email, password }) { 
    // note: this is the only time we request information from the db using the widest scope - 'loginUser'
    const user = await User.scope('loginUser').findOne({ 
      where: { email: email }
    }); 

    if (user && user.validatePassword(password)) {
      // note: data sent back is scoped much more tightly
      return await User.scope('currentUser').findByPk(user.id);
    }; 
  };

  User.signup = async function({ firstName, lastName, email, password, picturePath, location, occupation, viewedProfile, impressions }) { 
    const hashedPassword = bcrypt.hashSync(password); 
    const user = await User.create({ 
      firstName, 
      lastName, 
      email, 
      hashedPassword, 
      picturePath, 
      location, 
      occupation, 
      viewedProfile, 
      impressions
    });
    
    return await User.scope('currentUser').findByPk(user.id); 
  }; 

  return User;
};
