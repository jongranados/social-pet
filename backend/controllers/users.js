const { User, Follow } = require('../db/models'); 

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
        err.errors = ['The queried ']
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

module.exports = { getUser, getUserFollows }; 
