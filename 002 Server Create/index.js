const http = require('http');
const data = require('./App');


http.createServer((req, res)=>{
    try{
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data));
    }
    catch(error){
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message:'internal server error'}));
    }
}).listen(5200);