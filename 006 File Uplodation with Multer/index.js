const express = require('express');
const multer = require('multer');
const path = require("path")

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb)=>{
        const extanme = path.extname(file.originalname)
        console.log(extanme)
        cb(null,Date.now() + Math.floor(Math.random()+100)+extanme);
    }
})

const fileUpload = multer({storage:storage}).single('images');

app.use(express.json());

app.post('/insert-data',fileUpload,(req, res)=>{
    console.log(req.file);
    res.send('hello')
});

app.listen(5200, ()=>{
    console.log('server is running on port 5200')
});