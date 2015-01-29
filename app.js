var express = require('express'),
    app = express(), //create server Express
    server = require('http').createServer(app), 
    io = require('socket.io').listen(server);

app.set('views/', __dirname); //for jade rendering
app.use(express.static(__dirname + '/web')); //for css and js files

app.get('/', function(req, res) {
  res.render('index.jade');
  console.log('Main page open');
})

io.on('connection', function(socket) 
{
  console.log('Client connected!');
  socket.emit('conectSuccses', 'Socket is connected!');

  socket.on('btnClick', function(data) {
    socket.emit('updateInfo', data);
  });

});

server.listen(process.env.VCAP_APP_PORT || 3000);
console.log('NodeJS is runing');