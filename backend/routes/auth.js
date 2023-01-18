const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 
const { login, signup } = require('../controllers/auth'); 

// POST /auth/login
router.post('/login', asyncHandler(login)); 

// POST /auth/signup
router.post('/signup', asyncHandler(signup))



// fetch('/auth/signup', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `ngA4vkt7-AcmSOUgcKHqG_PSQmWviNlffKfI`
//   },
//   body: JSON.stringify({ firstName: 'fname31', lastName: 'lname31', username: 'username31', email: 'email31@gmail.com', password: 'password31', picturePath: 'p31', gotchaDate: '2022-12-12', breed: 'breed31', location: 'location31', bio: 'This is meant to serve as the bio for user31.' })
// }).then(res => res.json()).then(data => console.log(data));



module.exports = router; 
