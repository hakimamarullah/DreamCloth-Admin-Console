import React from 'react';
import './login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/APICalls';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
 
  const handleLogin = (event) => {
    event.preventDefault();
    login(dispatch, { username, password });

  };
  return (
    <div className='login'>
      <h1 className='loginTitle'>Admin Console Login</h1>
      <form className='loginForm'>
        <div className='loginItem'>
          <label>Username</label>
          <input
            type='text'
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='loginItem'>
          <label>Password</label>
          <input
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className='helperText'>
            <span>
              Forgot Password? <Link to={'/reset'}>Reset</Link>
            </span>
          </div>
        </div>
        <button className='loginBtn' onClick={handleLogin}>
          Sign In
        </button>
        {/* {error && <div className='helperText-error'>
          <span>{loginResponse.message}</span>
        </div>} */}
      </form>
    </div>
  );
};

export default Login;
