const http = require('http').createServer().listen(4000, '0.0.0.0');
const { Server } = require('socket.io');

const io = new Server({
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  socket.on('join', () => {
    socket.join(`room-a`);
  });

  socket.on('admin-start', () => {
    console.log('admin start');
    io.emit('start');
  });

  socket.on('send-answer', (data) => {
    console.log('send answer');
    console.log(data);
  });
});

io.listen(http);
