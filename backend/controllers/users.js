const { User } = require('../db/models'); 

/* READ CONTROLLERS */
const getUser = async (req, res, next) => { 
    const { id } = req.params;
    const user = await User.getUserById(id);
   
    if (!user) { 
        const err = new Error('User not found.');
        err.status = 404; 
        err.title = 'User not found.'; 
        err.errors = ['The queried user was not found.']
        return next(err); 
    };

    return res.json({ 
        user
    });
}; 

module.exports = { getUser }; 
