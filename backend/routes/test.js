const express = require('express'); 
const router = express.Router(); 

/* TEST ROUTES */
router.get('/hello/world', function(req, res) {
    const xsrfToken = req.csrfToken()
    res.cookie('XSRF-TOKEN', xsrfToken);
    res.send('Hello World!');
});

router.post('/', function(req, res) { 
    res.json({ requestBody: req.body }); 
});

const asyncHandler = require('express-async-handler'); 
const { setTokenCookie, restoreSessionUser, requireAuthentication } = require('../middleware/auth.js'); 
const { User } = require('../db/models'); 

// GET /test/set-token-cookie
router.get(
    '/set-token-cookie', 
    asyncHandler(async (_req, res) => { 
        const user = await User.findOne({ 
            where: { 
                username: 'username5'
            }
        }); 

        setTokenCookie(res, user); 
        return res.json({ user }); 
    })
); 

// GET /test/restore-user
router.get(
    '/restore-session-user', 
    restoreSessionUser, 
    (req, res) => { 
        return res.json(req.user);    
    }
); 

// GET /test/require-auth
router.get(
    '/require-authentication', 
    requireAuthentication, 
    (req, res) => { 
        return res.json(req.user);    
    }
); 
module.exports = router; 
