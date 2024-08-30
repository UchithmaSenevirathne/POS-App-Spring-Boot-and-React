import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/Login.css';
import { NavLink } from 'react-router-dom';

function Login({ users = [], setCurrentUser }) {  // Pass users array as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (email === 'iman@gmail.com' && password === 'abcd') {
      setError('');
      setCurrentUser({ role: 'ADMIN', profilePic: null, name: 'Admin' });
      navigate('/layout', { state: { role: 'ADMIN', profilePic: null, name: 'Admin' } }); // Admin role
    } else {
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        setError('');
        setCurrentUser(user); // Set the logged-in user
        navigate('/layout', { state: { role: user.role, profilePic: user.profilePic, name: user.fullName } });
      } else {
        setError('Invalid email or password.');
      }
    }
  };

  return (
    <div className='form mt-[250px]'>
      <form onSubmit={handleLogin}>
        <h1>Sign In</h1>
        {error && <p className='error text-[red] text-[12px]'>{error}</p>}
        <div className='input-box'>
          <input type="email" placeholder='Username' required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className='remember'>
          <label><input type="checkbox" className="checkbox-round" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type='submit'>Login</button>

        <div className='nav'>
          <p>Don't have an account? <NavLink className='nav-link' to='/register'>Sign Up</NavLink></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
