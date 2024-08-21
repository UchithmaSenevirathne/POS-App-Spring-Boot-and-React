import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
    <Sidebar/>
    <div className='flex-1 flex flex-col'>
        <Header/>
        <div className='flex-1 p-4 min-h-0 overflow-auto'>
            {<Outlet/>}
        </div>
    </div>
</div>
  )
}
