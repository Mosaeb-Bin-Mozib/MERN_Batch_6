const http = require('http');
const fs = require('fs');

// Create the server
const server = http.createServer((req, res) => {
    if (req.url === '/file-write' && req.method === 'GET') {
        // Write "hello world" to demo.txt
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                // Send error response
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Error writing file');
            } else {
                // Send success response
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('File created successfully');
            }
            // End the response
            res.end();
        });
    } else {
        // Handle other routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not Found');
        res.end();
    }
});

// Start the server on port 3000
server.listen(5500);
console.log('Server Run Successfully');
