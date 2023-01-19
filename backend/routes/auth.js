const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 
const { login, signup, session } = require('../controllers/auth'); 
const { requireAuthentication } = require('../middleware/auth.js')

// POST /auth/login
router.post('/login', asyncHandler(login)); 

// POST /auth/signup
router.post('/signup', asyncHandler(signup))

// GET /auth/
router.get('/session', requireAuthentication, asyncHandler(session))


module.exports = router; 
