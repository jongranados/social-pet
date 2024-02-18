/* Multer Middleware to handle file uploading to local file system */

const multer = require('multer'); 

const storage = multer.diskStorage({
    destination: function(req, file, callback) { 
        callback(null, './public/assets/');
    }, 
    filename: function(req, file, callback) { 
        const extension = file.mimetype.split('/')[1];
        const uniqueName = new Date().getTime() + "." + extension;
        req.body.picturePath = uniqueName; 
        callback(null, uniqueName); 
    }
});

const uploadViaMulter = multer({ storage });

module.exports = uploadViaMulter;
