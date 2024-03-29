const { User, Follow } = require('../db/models'); 
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

/* LOGOUT CONTROLLER */
const logout = async (req, res) => {
	res.clearCookie("token");
	return res.json({ message: "success" });
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

    const user = await User.signup({
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

    if (!user) {
		const err = new Error("Signup failed.");
		err.status = 401;
		err.title = "Signup failed.";
		err.errors = ["Please try signing up again."];
		return next(err);
	}

    await setTokenCookie(res, user); 

    // add a few existing accounts to new user's profile so that their feed isn't empty at signup
    // this will be replaced by some sort of "accounts we recommend that you follow" algorithm 
    let demoRelationships = [ 
        { followerId: user.id, followeeId: 1 }, 
        { followerId: user.id, followeeId: 2 }, 
        { followerId: user.id, followeeId: 3 }, 
        { followerId: user.id, followeeId: 4 }, 
        { followerId: user.id, followeeId: 5 }, 
        { followerId: user.id, followeeId: 6 }, 
        { followerId: user.id, followeeId: 7 }, 
        { followerId: user.id, followeeId: 8 }, 
        { followerId: user.id, followeeId: 9 }, 
        { followerId: user.id, followeeId: 10 }, 
    ]; 

    Follow.bulkCreate(demoRelationships); 

    return res.json({ 
        user
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

module.exports = { login, logout, signup, session }
