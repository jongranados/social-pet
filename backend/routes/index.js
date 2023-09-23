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

/* STATIC ROUTES FOR PRODUCTION */
if (process.env.NODE_ENV === 'production') { 
    const path = require('path'); 

    // serve the index.html file at the root route
    router.get('/', (req, res) => { 
        res.cookie('XSRF-TOKEN', req.csrfToken()); 
        return res.sendFile(path.resolve(__dirname, '../../frontend', 'build', 'index.html')); 
    }); 

    // serve the static assets in the frontend's build folder
    router.use(express.static(path.resolve('../frontend/build'))); 

    // serve the frontend's index.html file at all other routes NOT starting with /api
    router.get(/^(?!\/?(auth|users|posts)).*/, (req, res) => { 
        res.cookie('XSRF-TOKEN', req.csrfToken()); 
        return res.sendFile(path.resolve(__dirname, '../../frontend', 'build', 'index.html')); 
    }); 
}

module.exports = router; 
