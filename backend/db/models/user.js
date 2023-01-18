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
    username: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      validate: {
        len: [3, 20], 
        isNotEmail(value) { 
          if (Validator.isEmail(value)) { 
            throw new Error('Cannot be an email.'); 
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
        len: [8, 100]
      },
    },
    picturePath: { 
      type: DataTypes.STRING, 
      allowNull: false,
    },
    gotchaDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING, 
      allowNull: false
    }, 
    location: { 
      type: DataTypes.STRING, 
      allowNull: false,  
    },
    bio: { 
      type: DataTypes.STRING, 
      allowNull: false,  
      validate: {
        len: [20, 256]
      },
    },
    profileViews: { 
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
        exclude: ['hashedPassword', 'email', 'username', 'picturePath', 'gotchaDate', 'breed', 'location', 'bio', 'profileViews', 'impressions', 'createdAt', 'updatedAt']
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

  User.login = async function({ credential, password }) { 
    // note: this is the only time we request information from the db using the widest scope - 'loginUser'
    const { Op } = require('sequelize'); 
    const user = await User.scope('loginUser').findOne({ 
      where: { 
        [Op.or]: { 
          username: credential, 
          email: credential
        }  
      }
    }); 

    if (user && user.validatePassword(password)) {
      // note: data actually sent back is scoped much more tightly
      return await User.scope('currentUser').findByPk(user.id);
    }; 
  };

  User.signup = async function({ firstName, lastName, username, email, password, picturePath, gotchaDate, breed, location, bio, profileViews, impressions }) { 
    const hashedPassword = bcrypt.hashSync(password, 10); 
    const user = await User.create({ 
      firstName, 
      lastName, 
      username, 
      email, 
      hashedPassword, 
      picturePath, 
      gotchaDate, 
      breed, 
      location, 
      bio,  
      profileViews, 
      impressions
    });
    
    return await User.scope('currentUser').findByPk(user.id); 
  }; 

  return User;
};
