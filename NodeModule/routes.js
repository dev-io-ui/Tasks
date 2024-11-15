const fs = require('fs');
const { on } = require('events');

const handler = (req,res)=>{

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.readFile('Message.txt', { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                console.log(err)
            }
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write(`<head><title></title></head>`)
            res.write(`<body>${data}</body>`);
            res.write(`<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Click</button></form></body>`)
            res.write('</html>');


            return res.end();

        })
    }

    else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {

            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('Message.txt', message, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        })

    }

}

// module.exports = handler;
// exports.handle = handler;

module.exports ={
    handle:handler,
    sometext:"this is some text"
}
