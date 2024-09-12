import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi';
import { FaCartShopping } from 'react-icons/fa6';
import { ADMIN_SIDEBAR_LINKS, USER_SIDEBAR_LINKS } from '../../../Lib/const/Navigation';

export default function Sidebar({ role }) {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const linksToRender = role === 'ADM' ? ADMIN_SIDEBAR_LINKS : USER_SIDEBAR_LINKS;

    return (
        <div className='flex flex-col p-3 bg-white text-[orange] w-60'>
            <div className='flex items-center gap-2 px-6 pt-6 pb-4'>
                <FaCartShopping fontSize={26} />
                <span className='text-lg font-extrabold text-black'>FOODIE</span>
            </div>
            <div className='flex flex-col flex-1 gap-4 py-8'>
                {linksToRender.map((item) => (
                    <SidebarLink key={item.key} item={item} currentPath={pathname} />
                ))}
            </div>
            <div className='flex flex-col gap-0.5 pt-2 '>
                <div
                    className={classNames(
                        'text-red-500 cursor-pointer flex items-center gap-2 font-normal px-6 py-2 hover:no-underline text-base'
                    )}
                    onClick={() => navigate('/login')}
                >
                    <span className='text-xl'><HiOutlineLogout /></span>
                    Logout
                </div>
            </div>
        </div>
    );
}

function SidebarLink({ item, currentPath }) {
    const isActive = currentPath === `/layout${item.path}`;

    return (
        <Link
            to={`/layout${item.path}`}
            className={classNames(
                'flex items-center gap-2 font-normal px-6 py-2 rounded-md text-base mx-3 transition-all duration-500 no-underline hover:no-underline',
                isActive ? 'bg-[#fff3dd] text-[orange]' : 'text-[#b6b6b6] hover:bg-[#fff3dd] hover:text-[orange]'
            )}
        >
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    );
}
