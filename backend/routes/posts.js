const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 
const { requireAuthentication } = require('../middleware/auth'); 
const { getPosts } = require('../controllers/posts'); 

/* READ ROUTES */

// GET /posts/
router.get('/', requireAuthentication, asyncHandler(getPosts)); 


module.exports = router;
