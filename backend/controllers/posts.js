const { User, Follow, Post, Comment, Like } = require('../db/models'); 


/* READ CONTROLLERS */
const getFeedPosts = async (req, res, next) => { 
    const { id } = req.params; 
    
    const user = await User.getUserById(Number(id));

    if (!user) { 
        const err = new Error('User not found.');
        err.status = 404; 
        err.title = 'User not found.'; 
        err.errors = ['The queried user was not found.']
        return next(err); 
    };

    // retrieve list of ids for accounts that the user follows.
    let targetIds = await Follow.findAll({
        where: {
            followerId: id,
        },
        attributes: ["followeeId"],
    });

    // retain only values (user ids) of each key-value pair in the resulting object array
    targetIds = targetIds.map((targetId) => targetId.followeeId);

    // include session user to the list
    targetIds.push(id);

    let posts = await Post.findAll({
		where: {
			userId: targetIds,
		},
		include: [
			{
				model: Comment,
				include: {
					model: User,
					attributes: ["firstName", "lastName", "picturePath"],
				},
			},
			{
				model: User.scope("userProfile"),
				attributes: ["id", "username", "picturePath"],
			},
			{
				model: Like, 
				attributes: ["id", "postId"], 
				include: { 
					model: User, 
					attributes: ["id", "firstName", "lastName", "picturePath"],
				},
			}
		],
		order: [["id", "DESC"], [Comment, "id", "ASC"], [Like, "id", "ASC"]],
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

const getUserPosts = async (req, res, next) => {
	const { id } = req.params;

	const user = await User.getUserById(id);

	if (!user) {
		const err = new Error("User not found.");
		err.status = 404;
		err.title = "User not found.";
		err.errors = ["The queried user was not found."];
		return next(err);
	}

	let posts = await Post.findAll({
		where: {
			userId: id,
		},
		include: [
			{
				model: Comment,
				include: {
					model: User,
					attributes: ["firstName", "lastName", "picturePath"],
				},
			},
			{
				model: User.scope("userProfile"),
				attributes: ["id", "username", "picturePath"],
			},
			{
				model: Like,
				attributes: ["id", "postId"],
				include: {
					model: User,
					attributes: ["id", "firstName", "lastName", "picturePath"],
				},
			},
		],
		order: [["id", "DESC"], [Comment, "id", "ASC"], [Like, "id", "ASC"]],
	});

	if (!posts) {
		const err = new Error("Posts not found for specified user.");
		err.status = 404;
		err.title = "Posts not found for specified user.";
		err.errors = ["Posts not found for specified user."];
		return next(err);
	}

	return res.json({
        user,
		posts,
	});
}; 

/* UPDATE CONTROLLERS */
const createPost = async (req, res, next) => { 
    const {  
        userId, 
        picturePath, 
        description,
    } = req.body; 

    const newPost = await Post.create({
        userId, 
        picturePath, 
        description,
    }); 

    // retrive the list of ids for accounts that the user follows. 
    let targetIds = await Follow.findAll({ 
        where: { 
            followerId: userId
        }, 
        attributes: ['followeeId'], 
    }); 

    // retain only values (user ids) of each key-value pair in the resulting object array
    targetIds = targetIds.map(targetId => targetId.followeeId);

    // add the user to the list
    targetIds.push(userId); 

    let posts = await Post.findAll({ 
        where: { 
            userId: targetIds 
        }, 
        order: [
            ['createdAt', 'ASC'], 
        ]
    }); 

    return res.json({ 
        posts
    }); 
}

const deleteLike = async (req, res, next) => { 
    const { postId, likeId } = req.params;
	
	const deletedLike = await Like.destroy({
		where: { 
			id: likeId,
		}
	});

	if (!deletedLike) {
		const err = new Error("Failed to unlike post.");
		err.status = 404;
		err.title = "Failed to unlike post.";
		err.errors = ["An error occurred while attempting to unlike the post. Please try again."];
		return next(err);
	}

	let updatedPostLikes = await Like.findAll({
		where: {
			postId,
		},
		include: [
			{
				model: User,
				attributes: ["id", "firstName", "lastName", "picturePath"],
			},
		],
		order: [["id", "ASC"]],
	});

	if (!updatedPostLikes) {
		const err = new Error("Failed to get the updated likes for the post.");
		err.status = 404;
		err.title = "Failed to get the updated likes for the post.";
		err.errors = ["Failed to get the updated likes for the post. Refresh this page to manually render."];
		return next(err);
	}

	return res.json({
		updatedPostLikes,
	}); 

}; 

module.exports = { getFeedPosts, getUserPosts, createPost, deleteLike }; 
