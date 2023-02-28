const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 
const { requireAuthentication } = require('../middleware/auth'); 
const { getUser, getUserFollowing, updateUserFollowing } = require('../controllers/users'); 

/* READ ROUTES */

// GET /users/:id
router.get('/:id', requireAuthentication, asyncHandler(getUser)); 

// GET /users/:id/following
router.get('/:id/following', requireAuthentication, asyncHandler(getUserFollowing));


/* UPDATE ROUTES */

// PATCH /:id/:followeeId
router.patch('/:id/:followeeId', requireAuthentication, asyncHandler(updateUserFollowing));

module.exports = router;
