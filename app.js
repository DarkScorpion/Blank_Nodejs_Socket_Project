var express = require('express'),
    app = express(), //create server Express
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    server = require('http').createServer(app), 
    io = require('socket.io').listen(server);

//var sp = require('./suplib'); //connect support library

app.set('views/', __dirname); //for jade rendering
//app.use(favicon('web/other/console.ico')); //icon of site
app.use(bodyParser.urlencoded({ extended: false })); //for ajax json
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