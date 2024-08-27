import React from 'react'
import '../../assets/Login.css'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div className='form'>
        <form action="">
          <h1>Sign In</h1>
          <div className='input-box'>
            <input type="email" placeholder='Username' required/>
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' required/>
          </div>

          <div className='remember'>
            <label><input type="checkbox" class="checkbox-round"/>Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type='submit'><NavLink className='btn' to='/layout'>Login</NavLink></button>

          <div className='nav'>
            <p>Don't have an account? <NavLink className='nav-link' to='/register'>Sign Up</NavLink></p>
          </div>
        </form>
    </div>
  )
}

export default Login