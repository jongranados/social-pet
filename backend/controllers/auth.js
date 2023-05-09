const { User } = require('../db/models'); 
const { setTokenCookie } = require("../middleware/auth");
const bcrypt = require('bcrypt'); 

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

/* SIGN UP CONTROLLER */
const signup = async (req, res) => { 

    const { 
        firstName, 
        lastName, 
        username, 
        email, 
        password, 
        picturePath, 
        gotchaDate, 
        species,
        breed, 
        location, 
        bio,
    } = req.body; 

    const salt = await bcrypt.genSalt(); 
    const hashedPassword = await bcrypt.hash(password, salt); 
    let profileViews = Math.floor(Math.random() * (20000 - 2000 + 1)) + 2000;
    let impressions = Math.floor((Math.random() * (0.8 - 0.3) + 0.3) * profileViews);

    const newUser = await User.signup({
        firstName, 
        lastName, 
        username, 
        email, 
        password, 
        picturePath, 
        gotchaDate, 
        species,
        breed, 
        location, 
        bio, 
        profileViews, 
        impressions,
    }); 

    await setTokenCookie(res, newUser); 

    return res.json({ 
        newUser
    }); 
};

/* GET SESSION USER CONTROLLER */
const session = (req, res) => { 
    const { user } = req; // restoreUser, preceding middleware, appends session user to req.user
    
    if (user) { 
        return res.json({
            user: user.toSafeObject()
        }); 
    } else { 
        return res.json({}); 
    }
}

module.exports = { login, signup, session }
