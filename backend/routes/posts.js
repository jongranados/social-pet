const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 
const { requireAuthentication } = require('../middleware/auth'); 
const { createPost, createComment, createLike, deleteLike } = require('../controllers/posts'); 

/* UPDATE ROUTES */

// POST /posts/
router.post('/', requireAuthentication, asyncHandler(createPost)); 

// POST /posts/postId/comments
router.post('/:postId/comments', requireAuthentication, asyncHandler(createComment));

// POST /posts/postId/likes
router.post('/:postId/likes', requireAuthentication, asyncHandler(createLike)); 

// DELETE /posts/postId/likes/likeId
router.delete('/:postId/likes/:likeId', requireAuthentication, asyncHandler(deleteLike)); 

module.exports = router;
