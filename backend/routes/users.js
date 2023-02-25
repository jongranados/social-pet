const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 
const { requireAuthentication } = require('../middleware/auth'); 
const { getUser, getUserFollows } = require('../controllers/users'); 

/* READ ROUTES */

// GET /users/:id
router.get('/:id', requireAuthentication, asyncHandler(getUser)); 

// GET /users/:id/follows
router.get('/:id/follows', requireAuthentication, asyncHandler(getUserFollows));

module.exports = router;
