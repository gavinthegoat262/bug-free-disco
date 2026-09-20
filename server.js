const { PeerServer } = require('peerjs-server');
const PORT = process.env.PORT || 9000;
const server = PeerServer({ port: PORT, path: '/' });
console.log(`PeerServer running on port ${PORT}`);
