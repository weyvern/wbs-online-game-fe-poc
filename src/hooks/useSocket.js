import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import io from 'socket.io-client';

const useSocket = roomId => {
  const socketRef = useRef();
  const [isTurn, setIsTurn] = useState(false);
  const [waitingOpp, setWaitingOpp] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    socketRef.current = io(process.env.REACT_APP_WS_SERVER, { query: { roomId } });

    socketRef.current.on('notify-move', arg => {
      setIsTurn(!(arg === socketRef.current.id));
    });

    socketRef.current.on('set-turn', arg => {
      setIsTurn(!(arg === socketRef.current.id));
      setWaitingOpp(false);
    });

    socketRef.current.on('waiting-opponent', arg => setWaitingOpp(arg));

    socketRef.current.on('error', arg => {
      toast.error(arg);
      setError(true);
    });

    return () => socketRef.current.disconnect();
  }, [roomId]);

  const move = payload => {
    socketRef.current.emit('move', { payload });
  };

  return { move, isTurn, waitingOpp, error };
};

export default useSocket;
