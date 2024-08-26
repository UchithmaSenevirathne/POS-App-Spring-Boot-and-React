import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../../Lib/const/Navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'
import { FaCartShopping } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
    const navigate = useNavigate()
    
  return (
    <div className='flex flex-col p-3 bg-white text-[orange] w-60'>
            <div className='flex items-center gap-2 px-6 pt-6 pb-4'>
                <FaCartShopping fontSize={26}/>
                <span className='text-lg font-extrabold text-black'>FOODIE</span>
            </div>
            <div className='flex flex-col flex-1 gap-4 py-8'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}/>
                ))}
            </div>
            <div className='flex flex-col gap-0.5 pt-2 '>
                <div className={classNames ('text-red-500 cursor-pointer flex items-center gap-2 font-normal px-6 py-2 hover:no-underline text-base')} onClick={() => navigate('/')}>
                    <span className='text-xl'><HiOutlineLogout/></span>
                    Logout
                </div>
            </div>
        </div>
  )
}

function SidebarLink({ item }) {
    const {pathname} = useLocation()

    return(
        <Link to={item.path} className={classNames (pathname === item.path ? 'bg-[#fff3dd] text-[orange]' : 'text-[#b6b6b6] flex items-center gap-2 font-normal px-6 py-2 hover:bg-[#fff3dd] hover:no-underline active:bg-[#fff3dd] rounded-md text-base  mx-3 transition-all duration-500 hover:text-[orange]')}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}

