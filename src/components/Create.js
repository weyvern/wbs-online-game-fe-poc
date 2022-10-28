const Create = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='container mt-5'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label for='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label for='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input type='password' className='form-control' id='exampleInputPassword1' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Create game
        </button>
      </form>
    </div>
  );
};

export default Create;
