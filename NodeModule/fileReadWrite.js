const http = require('http');
const route = require('./routes.js');

console.log(route.sometext);
const server = http.createServer(route.handle);

server.listen(4000);
