const express = require('express'); 
const router = express.Router(); 
const apiRouter = require('./api'); 

/* TEST ROUTES */
// to test functionality of csurf middleware  
router.get('/hello/world', function(req, res) {
    const xsrfToken = req.csrfToken()
    res.cookie('XSRF-TOKEN', xsrfToken);
    res.send('Hello World!');
});

/* API ROUTER MOUNTING */
router.use('/api', apiRouter);


module.exports = router; 
