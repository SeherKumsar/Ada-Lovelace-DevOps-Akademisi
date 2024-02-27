// http pakeage is used to make http requests
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});  // The server object listens on port 3000

