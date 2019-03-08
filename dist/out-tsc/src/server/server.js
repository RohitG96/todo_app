import * as express from 'express';
var hostname = 'localhost';
var port = 3000;
var server = express();
server.get('/api/', function (req, res, next) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.listen(port, hostname, function () {
    // connect to the DB
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
//# sourceMappingURL=server.js.map