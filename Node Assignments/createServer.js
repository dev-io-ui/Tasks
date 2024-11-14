const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('dev');
});

server.listen(4000);
