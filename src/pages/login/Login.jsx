import React from 'react';
import './login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event)=>{
    event.preventDefault();

    console.warn(username);
    console.warn(password);
    window.location.href = '/'
  }
  return (
    <div className='login'>
      <h1 className='loginTitle'>Login</h1>
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
        <button className='loginBtn' onClick={handleLogin}>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
