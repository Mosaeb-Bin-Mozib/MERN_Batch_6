var http =require('http');

var server= http.createServer(function (req,res) {

    if (req.url=="/"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>This is the Home Page</h1>')
        res.end();
    }
    else if (req.url=="/about"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>This is the About Page</h1>')
        res.end();
    }
    else if (req.url=="/contact"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>This is the Contact Page</h1>')
        res.end();
    }
});

server.listen(5500);
console.log('Server Run Successfully');

