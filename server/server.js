var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Server listening at http://localhost:8000');
});

app.get('/', function (req, res) {
  res.send('SERVER');
});

app.get('/hello', function (req, res) {
  res.send('HELLO');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
