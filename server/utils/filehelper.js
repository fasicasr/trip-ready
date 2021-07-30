'use strict';
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        callback(null, new Date().toISOString().replace(/:/g, '-') + ' ' + file.originalname); 
    }
});

const fileFilter = (req, file, callback) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        callback(null, true);
    }else{
        callback(null, false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = { upload };