const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 
const { requireAuthentication } = require('../middleware/auth'); 
const { getUser, getUserFollowing, updateUserFollowing } = require('../controllers/users'); 
const { getFeedPosts, getUserPosts } = require('../controllers/posts');

/* READ ROUTES */

// GET /users/:id
router.get('/:id', requireAuthentication, asyncHandler(getUser)); 

// GET /users/:id/following
router.get('/:id/following', requireAuthentication, asyncHandler(getUserFollowing));

// GET /users/:id/feed
router.get('/:id/feed', requireAuthentication, asyncHandler(getFeedPosts)); 

// GET /users/:id/posts
router.get('/:id/posts', requireAuthentication, asyncHandler(getUserPosts)); 


/* UPDATE ROUTES */

// PATCH /:id/:followeeId
router.patch('/:id/:followeeId', requireAuthentication, asyncHandler(updateUserFollowing));

module.exports = router;
