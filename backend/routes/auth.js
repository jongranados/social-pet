const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 
const { login } = require('../controllers/auth'); 

router.post('/login', login); 

module.exports = router; 
