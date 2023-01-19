const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 
const { login, signup } = require('../controllers/auth'); 

// POST /auth/login
router.post('/login', asyncHandler(login)); 

// POST /auth/signup
router.post('/signup', asyncHandler(signup))


module.exports = router; 
