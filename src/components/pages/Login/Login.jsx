import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/Login.css'
import { NavLink } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setEmail('');
    setPassword('');
    setError('');
  }, []); 

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (email === 'iman@gmail.com' && password === 'abcd') {
      setError('');
      navigate('/layout', { state: { role: 'ADMIN' } }); // Pass the role as state
    } else if (email === 'uchithma@gmail.com' && password === '1234') {
      setError('');
      navigate('/layout', { state: { role: 'USER' } }); // Pass the role as state
    } else {
      setError('Invalid email or password.');
    }
  }
  
  return (
    <div className='form'>
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          {error && <p className='error text-[red] text-[12px]'>{error}</p>} {/* Display error messages */}
          <div className='input-box'>
            <input type="email" placeholder='Username' required  value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' required value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className='remember'>
            <label><input type="checkbox" class="checkbox-round"/>Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type='submit'>Login</button>

          <div className='nav'>
            <p>Don't have an account? <NavLink className='nav-link' to='/register'>Sign Up</NavLink></p>
          </div>
        </form>
    </div>
  )
}

export default Login