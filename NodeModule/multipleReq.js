const http = require('http');

const server = http.createServer((req,res)=>{
   const url = req.url;
   if(url === '/home')
   {
    res.write('<html>');
    res.write('<head><title>My app</title></head>')
    res.write('<body><h1></h1>Welcome home</body>')
    res.write('</html>');
    return res.end();
   }
   if(url === '/about')
    {
     res.write('<html>');
     res.write('<head><title>My app</title></head>')
     res.write('<body><h1></h1>Welcome to About us page</body>')
     res.write('</html>');
     return res.end();

    }
    if(url === '/node')
        {
            res.write('<html>');
            res.write('<head><title>My app</title></head>')
            res.write('<body><h1></h1>Welcome to my Node Js project</body>')
            res.write('</html>');
            return res.end();

        }
    res.setHeader('Content-Type','text/html');
    
});

server.listen(4000);
