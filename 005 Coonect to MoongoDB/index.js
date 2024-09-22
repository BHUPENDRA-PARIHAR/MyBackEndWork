const express = require('express');
const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbname = "muna";
const client = new mongodb.MongoClient(url);

const connection = async()=>{
   await client.connect();
   const db = client.db(dbname);

   return db;
}

const app = express();


const insertData =async ()=>{
     const db = await connection();
     const users = db.collection('users');
     const response = await users.insertOne({
        name: 'Bhupendra',
        Lastname:'Parihar',
        age: '25'
     });
     console.log(response);
}
insertData();


const readData = async ()=>{
   const db = await connection();
   const users = db.collection('users');

   const response = await users.find().toArray();
   console.log(response);
}
readData();

app.listen(5200,()=>{
    console.log("server is running on port 5200");
})