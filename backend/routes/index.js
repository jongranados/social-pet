const express = require('express'); 
const router = express.Router(); 
const testRouter = require('./test'); 

/* TEST ROUTER MOUNTING */
router.use('/test', testRouter);

module.exports = router; 
