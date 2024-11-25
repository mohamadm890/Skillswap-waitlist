import { Server } from 'socket.io';

export default function handler(req, res) {
    if (!res.socket.server.io) {
        const io = new Server(res.socket.server, {
                path: "/api/socket"
            
        });
        res.socket.server.io = io;
        let count = 0;

        io.on('connection', (socket) => {
            console.log('Client connected');
            socket.emit('countUpdate', count)

            socket.on('increment', () => {
                count += 1;
                io.emit('countUpdate', count); // Broadcast updated count to all clients
            });
          
        });
    }
    res.end();
}
