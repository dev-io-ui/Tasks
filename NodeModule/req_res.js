const http = require('http');

const server = http.createServer((req,res)=>{
   
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My app</title></head>')
    res.write('<body><h1></h1>Welcome to my Node Js project</body>')
    res.write('</html>');
});

server.listen(4000);
