const Login = ({ username, setUsername, password, setPassword, submit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit({ username, password });
      }}
    >
      <div>
        username
        <input
          id='username'
          type='text'
          value={username}
          name='Username'
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          id='password'
          type='password'
          value={password}
          name='Password'
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button id='submit-credentials' type='submit'>
        login
      </button>
    </form>
  );
};

export default Login;
