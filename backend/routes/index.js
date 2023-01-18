const express = require('express'); 
const router = express.Router(); 
const testRouter = require('./test'); 
const authRouter = require('./auth'); 

/* TEST ROUTER MOUNTING */
router.use('/test', testRouter);

/* AUTHENTICATION ROUTER MOUNTING */
router.use('/auth', authRouter);

module.exports = router; 
