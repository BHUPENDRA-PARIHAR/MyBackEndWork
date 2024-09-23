const express = require('express');
const allRoutes = require('./src/app');
require('dotenv').config();


const app = express();

app.use(allRoutes);


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});