const fs = require('fs');
const path = require('path');


const filepath = path.join(__dirname,'Files');


console.log(filepath);

//create file

// fs.writeFileSync(`${filepath}/test.txt`,'Hello Its My first Page');
// fs.writeFileSync(`${filepath}/test.pdf`,'Hello Its My first Page');

//read files

fs.readFile(`${filepath}/test.txt`,'utf-8',(err, data)=>{
    console.log(data);
})