const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.send('Hello', 9999, '127.0.0.1', (err, bytes) => {
  console.log(err, bytes)
});