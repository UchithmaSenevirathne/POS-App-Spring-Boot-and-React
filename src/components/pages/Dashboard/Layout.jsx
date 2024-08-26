import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <div className='flex flex-row bg-[#EEF2F5] h-screen w-screen overflow-hidden'>
    <Sidebar/>
    <div className='flex flex-col flex-1'>
        <Header/>
        <div className='flex-1 min-h-0 pl-10 overflow-auto py-9'>
            {<Outlet/>}
        </div>
    </div>
</div>
  )
}
