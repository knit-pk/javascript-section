var WebSocketServer = require('websocket').server;
var http = require('http');

var WebSocketPort = 1337;
var clients = [];
var server = http.createServer(function (req, res) {
}) 

server.listen(WebSocketPort, function () {
    console.log('Start server on ' + WebSocketPort);
})

wsServer = new WebSocketServer({
    httpServer: server
})

wsServer.on('request', function (req) {
    var connection = req.accept(null, req.origin);

    var index = clients.push(connection) - 1;

    connection.on('message', function (message) {
        var msg = message.utf8Data;
        for (let i = 0; i < clients.length; i++) {
            clients[i].sendUTF(msg);
        }
    })
 
    connection.on('close', function (con) {
        console.log('Connection closed');
    })
})
