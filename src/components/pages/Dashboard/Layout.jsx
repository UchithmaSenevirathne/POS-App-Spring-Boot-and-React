import React from 'react'
import Sidebar from './Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Dashboard from './Dashboard'

export default function Layout() {
  const location = useLocation();
  const role = location.state?.role || 'USER';
  
  return (
    <div className='flex flex-row bg-[#EEF2F5] h-screen w-screen overflow-hidden'>
    {role === 'ADMIN' && <Sidebar role={role} />}
    <div className='flex flex-col flex-1'>
    {role === 'ADMIN' && <Header role={role} />}
        <div className='flex-1 min-h-0 pl-10 overflow-auto py-9'>
            <Outlet/>
        </div>
    </div>
</div>
  )
}
