import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import MidBanner from './MidBanner'
import Footer from './Footer'

function WebLayout() {
  return (
    <div className='flex flex-col h-screen px-0 mx-0 max-w-screen'>
      <Navbar className=''/>
      <Home/>
      <Menu/>
      <MidBanner className=''/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default WebLayout