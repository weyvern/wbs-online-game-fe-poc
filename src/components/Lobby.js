import { Link } from 'react-router-dom';

const Lobby = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
          <button className='btn btn-primary'>
            <Link to='/create'>Create game</Link>
          </button>
        </div>
        <div className='col'>
          <button className='btn btn-primary'>
            <Link to='/join'>Join game</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
