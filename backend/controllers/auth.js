const { User } = require('../db/models'); 
const { setTokenCookie } = require("../middleware/auth");

/* LOGIN CONTROLLER */
const login = async (req, res, next) => { 
    const { credential, password } = req.body;
    
    const user = await User.login({ credential, password }); 

    if (!user) { 
        const err = new Error('Login failed.'); 
        err.status = 401; 
        err.title = 'Login failed.'; 
        err.errors = ['The provided credentials were invalid.']; 
        return next(err); 
    }

    await setTokenCookie(res, user); 

    return res.json({ 
        user
    }); 
}; 

module.exports = { login }
