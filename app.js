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
});
    