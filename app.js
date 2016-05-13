var requirejs = require('requirejs'); requirejs.config({ nodeRequire: require });

requirejs(['fs','underscore', 'express', 'http', 'socket.io'],
    function(fs, _, express, http, sock){

    // Initialization
    var app = express(),
        server = http.createServer(app),
        io = sock.listen(server),
        port = process.env.PORT || 3000;
        
    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + '/'));

    server.listen(port);
    
    io.sockets.on('connection', function(socket){
        socket.on('chat message', function(msg){
            io.sockets.emit('chat message', msg);
        });
    });

    http.listen(3000, function(){
        console.log('listening on *:3000');
    });
});
    