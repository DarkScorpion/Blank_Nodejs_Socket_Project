
var socket = io.connect('http://localhost:3000/');

$(document).ready(function() {
  $('#sendData').click(function() {
    socket.emit('btnClick', $('#textBox').val());
  })
})

socket.on('conectSuccses', function (data) 
{
  console.log(data);
});

socket.on('updateInfo', function (data) 
{
  console.log(data);
  $('#info').html(data);
});