const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 
const { requireAuthentication } = require('../middleware/auth'); 
const { getPosts, createPost } = require('../controllers/posts'); 

/* READ ROUTES */

// GET /posts/
router.get('/', requireAuthentication, asyncHandler(getPosts)); 


/* UPDATE ROUTES */

// POST /posts/
router.post('/', requireAuthentication, asyncHandler(createPost)); 

module.exports = router;
