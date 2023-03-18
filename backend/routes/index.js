const express = require('express'); 
const router = express.Router(); 
const testRouter = require('./test'); 
const authRouter = require('./auth'); 
const usersRouter = require('./users'); 
const postsRouter = require('./posts'); 

/* TEST ROUTER MOUNTING */
router.use('/test', testRouter);

/* AUTH ROUTER MOUNTING */
router.use('/auth', authRouter);

/* USERS ROUTER MOUNTING */
router.use('/users', usersRouter);

/* POSTS ROUTER MOUNTING */
router.use('/posts', postsRouter); 

/* XSRF-TOKEN COOKIE RETRIEVAL ROUTE (for when in dev env and backend and frontend is served from two servers) */
if (process.env.NODE_ENV !== 'production') { 
    router.get('/csrf/restore', (req, res) => { 
        res.cookie('XSRF-TOKEN', req.csrfToken()); 
        return res.json({}); 
    }); 
}

module.exports = router; 
