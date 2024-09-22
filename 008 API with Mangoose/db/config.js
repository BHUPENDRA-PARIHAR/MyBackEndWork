const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/user_104')
.then(()=>{
    console.log('connect to mongoose')
})
.catch((error)=>{
    console.log('errore connecting to Mongoose', error)
})