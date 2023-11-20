const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 
const { requireAuthentication } = require('../middleware/auth'); 
const { createPost, createComment } = require('../controllers/posts'); 

/* UPDATE ROUTES */

// POST /posts/
router.post('/', requireAuthentication, asyncHandler(createPost)); 

// POST /posts/postId/comments
router.post('/:postId/comments', requireAuthentication, asyncHandler(createComment));

module.exports = router;
