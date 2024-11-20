import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Socket = () => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socketInstance = io(import.meta.env.VITE_BACKEND_PORT);

    // Handle socket connection
    socketInstance.on('connect', () => {
      console.log('Connected to the server');
      setIsConnected(true);
    });

    socketInstance.on('disconnect', () => {
      console.log('Disconnected from the server');
      setIsConnected(false);
    });

    setSocket(socketInstance); // Store the socket instance

    // Cleanup the socket connection when the component is unmounted
    return () => {
      socketInstance.disconnect();
      console.log('Disconnected from the server');
    };
  }, []);

  const handleDisconnect = () => {
    if (socket) {
      socket.disconnect(); // Manually disconnect the socket
      console.log('Disconnected from the server');
      setIsConnected(false);
    }
  };

  return (
    <div>
      <h2>Socket.IO Connection</h2>
      <p>Socket is {isConnected ? 'connected' : 'disconnected'}</p>
      <button onClick={handleDisconnect} disabled={!isConnected}>
        Disconnect
      </button>
    </div>
  );
};

export default Socket;
