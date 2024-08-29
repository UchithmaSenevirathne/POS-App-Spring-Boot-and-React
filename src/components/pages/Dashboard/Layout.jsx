import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
    const location = useLocation();
    const role = location.state?.role; // Default to 'USER' if role is not provided

    return (
        <div className='flex flex-row bg-[#EEF2F5] h-screen w-screen overflow-hidden'>
            {/* Sidebar is always shown */}
            <Sidebar role={role} />
            <div className='flex flex-col flex-1'>
                {/* Header is always shown */}
                <Header role={role} />
                <div className='flex-1 min-h-0 pl-10 overflow-auto py-9'>
                <Outlet context={{ role }} />
                </div>
            </div>
        </div>
    );
}
