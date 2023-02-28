const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 
const { requireAuthentication } = require('../middleware/auth'); 
const { getUser, getUserFollows, updateUserFollowing } = require('../controllers/users'); 

/* READ ROUTES */

// GET /users/:id
router.get('/:id', requireAuthentication, asyncHandler(getUser)); 

// GET /users/:id/follows
router.get('/:id/follows', requireAuthentication, asyncHandler(getUserFollows));


/* UPDATE ROUTES */

// PATCH /:id/:followeeId
router.patch('/:id/:followeeId', requireAuthentication, asyncHandler(updateUserFollowing));

module.exports = router;
