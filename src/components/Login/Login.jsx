import React from 'react'

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
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
        </form>
    </div>
  )
}

export default Login