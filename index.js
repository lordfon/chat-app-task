//required modules
var express = require('express');
var socket = require('socket.io');

//server setup
var app = express();

var server = app.listen(5000, function(){
  console.log('listening to requests on port 5000');
});


//setup middleware
app.use(express.static('public'));

//setup sockets
var io = socket(server);

io.on('connection', function(socket){

  console.log('made connection to sockets', socket.id);

  socket.on('chat', function(data){
      io.sockets.emit('chat', data);
  });

  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
  });
  
});
