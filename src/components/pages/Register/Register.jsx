import React from "react";
import { NavLink } from 'react-router-dom'
import '../../assets/Login.css'


function Register() {
  return (
    <div className="form">
      <form action="">
        <h1>Sign Up</h1>
        <div className="input-box">
          <input type="text" placeholder="Full Name" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Address" required />
        </div>
        <div className="input-box">
          <input type="email" placeholder="Username" required />
        </div>
        <div className="d-flex">
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm Password" required />
          </div>
        </div>

        <button type="button">
          <NavLink className="btn" to="/">
            Register
          </NavLink>
        </button>

        <div className="nav">
          <p>
           Already have an account? <NavLink className='nav-link' to='/'>Sign In</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
