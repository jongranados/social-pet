const express = require('express'); 
const router = express.Router(); 

// test route for checking functionality of csurf middleware  
router.get('/hello/world', function(req, res) {
    const xsrfToken = req.csrfToken()
    res.cookie('XSRF-TOKEN', xsrfToken);
    res.send('Hello World!');
});

module.exports = router; 
