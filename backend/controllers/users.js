const { User, Follow } = require('../db/models'); 
const { Op } = require('sequelize'); 
const e = require('express');

/* READ CONTROLLERS */
const getUser = async (req, res, next) => { 
    const { id } = req.params;
    const user = await User.getUserById(id);
   
    if (!user) { 
        const err = new Error('User not found.');
        err.status = 404; 
        err.title = 'User not found.'; 
        err.errors = ['The queried user was not found.']
        return next(err); 
    };

    return res.json({ 
        user
    });
}; 

const getUserFollows = async (req, res, next) => { 
    const { id } = req.params; 
    const user = await User.getUserById(id); 

    if (!user) { 
        const err = new Error('User not found.'); 
        err.status = 404; 
        err.title = 'User not found.'; 
        err.errors = ['The queried user was not found.']
        return next(err); 
    };

    let followsIds = await Follow.findAll({ 
        where: { 
            followerId: id
        }, 
        attributes: ['followeeId'], 
        raw: true
    }); 

    followsIds = followsIds.map(followee => followee.followeeId)
    
    // We call Promise.all on the array returned by map to transform it to a single Promise we can then await
    const follows = await Promise.all(followsIds.map(async followsId => await User.getUserById(followsId)));
    
    return res.json({
        follows
    }); 
}; 

/* UPDATE CONTROLLERS */
const updateUserFollowing = async (req, res, next) => { 
    const { id, followeeId } = req.params; 
    const user = await User.getUserById(id); 
    const followee = await User.getUserById(followeeId); 

    if (!user) { 
        const err = new Error('User not found.'); 
        err.status = 404; 
        err.title = 'User not found.'; 
        err.errors = ['The queried user was not found.']
        return next(err); 

    }; 

    if (!followee) { 
        const err = new Error('Followee not found.'); 
        err.status = 404; 
        err.title = 'Followee not found.'; 
        err.errors = ['The queried user was not found.']
        return next(err); 

    }; 
    
    // query db for relationship status. 
    const relationship = await Follow.findOne({ 
        where: { 
            [Op.and]: [{ followerId: id }, { followeeId }] 
        } 
    }); 
    
    // if relationship exists, unfollow. else, follow.
    if (relationship) await relationship.destroy(); 
    else await Follow.create({ followerId: id, followeeId }); 

    // retrive the updated list of ids for accounts that the user follows. 
    let followingIds = await Follow.findAll({ 
        where: { 
            followerId: id
        }, 
        attributes: ['followeeId'], 
    }); 

    // retrieve the profiles of corresponding ids. 
    const following = await Promise.all(followingIds.map(async followsId => { 
        const id = followsId.followeeId; 
        const user = User.getUserById(id); 
        return user; 
    }));
    
    // return profiles
    return res.json({
        following
    }); 
}; 

module.exports = { getUser, getUserFollows, updateUserFollowing }; 
