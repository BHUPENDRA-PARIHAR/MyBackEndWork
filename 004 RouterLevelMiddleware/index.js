const express = require('express');

const app = express();


const m1  = (req, res, next)=>{
    console.log("Middle Ware First");
    next();
}

const m2  = (req, res, next)=>{
    console.log("Middle Ware Second");
    next();
}
const m3  = (req, res, next)=>{
    console.log("Middle Ware Third");
    next();
}

app.get('/',m1, m2, m3, (req, res)=>{
    res.send("Hello World");
    console.log('function called');
    
})
app.listen(5400, ()=>{
    console.log('server started at port 5400');
})