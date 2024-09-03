import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'

function WebLayout() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Menu/>
      <About/>
      <Contact/>
    </div>
  )
}

export default WebLayout