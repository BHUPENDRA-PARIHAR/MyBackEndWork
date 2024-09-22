const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})


const fileupload = multer({storage:storage}).fields([
    {name: 'thumbnail', maxCount: 1},
    {name:'images', maxCount:5}
]);

module.exports = fileupload;