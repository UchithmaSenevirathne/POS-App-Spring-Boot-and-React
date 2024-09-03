import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <h1>Navbar</h1>
        <NavLink className='' to='/login'>Sign In</NavLink>
    </div>
  )
}

export default Navbar