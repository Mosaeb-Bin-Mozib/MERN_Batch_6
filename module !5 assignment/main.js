var http =require('http');

var server= http.createServer(function (req,res) {
    res.end("Welcome to MERN STACK Development")
});

server.listen(5500);
console.log('Server Run Successfully');

