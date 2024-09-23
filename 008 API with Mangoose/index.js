const express = require('express');
const insertData = require('./controller/InserData');
const fileupload = require('./middleware/multer');
const readProducts = require('./controller/ReadProduct');
const DeleteProduct = require('./controller/DeleteProducts');
const Updateproduct = require('./controller/UpdateProduct');
require('./db/config')



const app = express();
app.use('/uploads' ,express.static('uploads'))

app.post('/insert', fileupload, insertData);
app.get('/read-product', readProducts);
app.delete('/delete-product/:_id', DeleteProduct);
app.put('/update-product/:_id', fileupload ,Updateproduct);

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
}) 