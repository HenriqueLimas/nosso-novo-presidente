var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('./app'));

io.on('connection', function(socket) {
    socket.on('votando', function(obj) {
    	//Atualizar no banco
    	
    	// efetuar o broadcast
    	io.emit('atualiza grafico', obj);
    });

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

http.listen(3000, function() {
    console.log('listening on localhost:3000');
});
