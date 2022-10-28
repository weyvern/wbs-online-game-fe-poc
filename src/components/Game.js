import { Navigate, useLocation, useParams } from 'react-router-dom';
import useSocket from '../hooks/useSocket';

const Game = () => {
  const location = useLocation();
  const { id } = useParams();
  const { move, isTurn, waitingOpp, error } = useSocket(id);

  if (!location.state) return <Navigate to='/join' />;
  if (error) return <Navigate to='/join' state={error} />;

  return (
    <div>
      <h1>
        Welcome {location.state.name}.
        {waitingOpp ? 'Waiting opponent' : isTurn ? 'It is your turn' : 'Is not your turn'}
      </h1>

      <button disabled={!isTurn} onClick={() => move('hi')}>
        Move!
      </button>
    </div>
  );
};

export default Game;
