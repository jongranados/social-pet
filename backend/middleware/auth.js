const jwt = require('jsonwebtoken'); 
const { jwtConfig } = require('../config'); 
const { secret, expiresIn } = jwtConfig; 
const { User } = require('../db/models'); 

// creates a JWT cookie and sets it on the res obj. called upon successful login or signup. 
const setTokenCookie = (res, user) => { 
    console.log(user); 
    const token = jwt.sign(
        { data: user.toSafeObject() }, 
        secret, 
        { expiresIn: parseInt(expiresIn) } 
    ); 

    const isProduction = process.env.NODE_ENV === 'production'; 

    res.cookie('token', token, { 
        maxAge: expiresIn * 1000, 
        httpOnly: true, 
        secure: isProduction, 
        sameSite: isProduction && 'Lax'
    });

    return token;
}; 

// restores session user to req.user based upon the payload of the session JWT cookie
const restoreSessionUser = (req, res, next) => { 
    const { token } = req.cookies; 

    return jwt.verify(
        token, 
        secret, 
        null, 
        async (err, jwtPayload) => { 
            if (err) return next(); 

            try { 
                const { id } = jwtPayload.data; 
                req.user = await User.scope('currentUser').findByPk(id); 
            } catch (e) { 
                res.clearCookie('token'); 
                return next(); 
            }

            if (!req.user) res.clearCookie('token'); 

            return next(); 
        }
    ); 
}; 

// two part middleware defined as an array. the first middleware attempts to restore the session user by leveraging restoreSessionUser. the second verifies that a session user was restored.
const requireAuthentication = [ 
    restoreSessionUser, 
    function (req, _res, next) { 
        if (req.user) return next(); 

        const err = new Error('Unauthorized'); 
        err.title = 'Unauthroized'; 
        err.errors = ['Unauthorized']; 
        err.status = 401; 
        return next(err); 
    }
]; 


module.exports = { setTokenCookie, restoreSessionUser, requireAuthentication };
