const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 
const { requireAuthentication } = require('../middleware/auth'); 
const { createPost } = require('../controllers/posts'); 

/* UPDATE ROUTES */

// POST /posts/
router.post('/', requireAuthentication, asyncHandler(createPost)); 

module.exports = router;
