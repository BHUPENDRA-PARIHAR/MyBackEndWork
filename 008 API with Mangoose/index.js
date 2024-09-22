const express = require('express');
const insertData = require('./controller/InserData');
const fileupload = require('./middleware/multer');
const readProducts = require('./controller/ReadProduct');
require('./db/config')



const app = express();
app.use('/uploads' ,express.static('uploads'))

app.post('/insert', fileupload, insertData);
app.get('/read-product', readProducts);

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
})