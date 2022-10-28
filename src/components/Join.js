import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const [{ name, room }, setFormState] = useState({ name: '', room: '' });

  const navigate = useNavigate();

  const handleChange = e => setFormState(prev => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !room) return alert('Please fill out your name and game id');
    navigate(`/game/${room}`, { state: { name, room }, replace: true });
  };

  return (
    <div className='container mt-5'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input className='form-control' id='name' value={name} onChange={handleChange} />
        </div>
        <div className='mb-3'>
          <label htmlFor='room' className='form-label'>
            Game ID:
          </label>
          <input className='form-control' id='room' value={room} onChange={handleChange} />
        </div>
        <button type='submit' className='btn btn-primary'>
          Create game
        </button>
      </form>
    </div>
  );
};

export default Join;
