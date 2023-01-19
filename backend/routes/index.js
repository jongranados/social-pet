const express = require('express'); 
const router = express.Router(); 
const testRouter = require('./test'); 
const authRouter = require('./auth'); 
const usersRouter = require('./users'); 

/* TEST ROUTER MOUNTING */
router.use('/test', testRouter);

/* AUTH ROUTER MOUNTING */
router.use('/auth', authRouter);

/* USERS ROUTER MOUNTING */
router.use('/users', usersRouter);

module.exports = router; 
