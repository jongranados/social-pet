const { User, Follow, Post } = require('../db/models'); 


/* READ CONTROLLERS */
const getPosts = async (req, res, next) => { 
    const { id, postsRequested } = req.query; 

    const user = await User.getUserById(Number(id));

    if (!user) { 
        const err = new Error('User not found.');
        err.status = 404; 
        err.title = 'User not found.'; 
        err.errors = ['The queried user was not found.']
        return next(err); 
    };

    let targetIds; 

    // posts requested: feedPosts - include ids of user and everyone they follow in query
    if (postsRequested === 'feedPosts') { 

        // retrive the updated list of ids for accounts that the user follows. 
        targetIds = await Follow.findAll({ 
            where: { 
                followerId: id
            }, 
            attributes: ['followeeId'], 
        }); 

        // retain only values (user ids) of each key-value pair in the resulting object array
        targetIds = targetIds.map(targetId => targetId.followeeId);
        console.log(`followingIds = ${targetIds}`) 

        // add the user to the list
        targetIds.push(id); 
    } 
    // posts requested: userPosts - only include id of user in query
    else { 
        targetIds = id; 
    }


    let posts = await Post.findAll({ 
        where: { 
            userId: targetIds 
        }, 
        order: [
            ['createdAt', 'ASC'], 
        ]
    }); 

    if (!posts) { 
        const err = new Error('Posts not found for specified user.');
        err.status = 404; 
        err.title = 'Posts not found for specified user.'; 
        err.errors = ['Posts not found for specified user.']
        return next(err); 
    };

    return res.json({ 
        posts
    });
}; 

module.exports = { getPosts }; 
