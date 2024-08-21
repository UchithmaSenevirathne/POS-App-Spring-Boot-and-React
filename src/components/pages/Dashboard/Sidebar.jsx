import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../../Lib/const/Navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'
import { FaCartShopping } from 'react-icons/fa6'


export default function Sidebar() {
  return (
    <div className='flex flex-col p-3 bg-white text-[#00B074] w-60'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FaCartShopping fontSize={24}/>
                <span className='text-lg font-bold text-black'>FOODIE</span>
            </div>
            <div className='flex-1 py-8 flex flex-col gap-0.5'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}/>
                ))}
            </div>
            <div className='flex flex-col gap-0.5 pt-2 '>
                <div className={classNames ('text-red-500 cursor-pointer flex items-center gap-2 font-normal px-3 py-2 hover:no-underline text-base')}>
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
        <Link to={item.path} className={classNames (pathname === item.path ? 'bg-[#D9F3EA] text-[#00B074]' : 'text-[#00B074] flex items-center gap-2 font-normal px-3 py-2 hover:bg-[#D9F3EA] hover:no-underline active:bg-[#D9F3EA] rounded-md text-base')}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}

