import React from 'react'
import { IoBagHandle, IoCalendar, IoCart, IoPeople, IoPieChart } from 'react-icons/io5'

function AdminDashStartGrid() {
    return(
        <div className="flex w-full gap-6">
            <BoxWrapper>
                <div className='flex items-center justify-center w-12 h-12 rounded-full bg-[orange]'>
                    <IoBagHandle className='text-2xl text-white'/>
                </div>
                <div className='pl-4'>
                    <span className='text-sm font-light text-gray-500'>Total Sales</span>
                    <div className='flex items-center'>
                        <strong className='text-xl font-semibold text-gray-700'>RS: 34525.60</strong>
                        <span className='pl-2 text-sm text-green-500'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='flex items-center justify-center w-12 h-12 bg-[orange] rounded-full'>
                    <IoCalendar className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm font-light text-gray-500'>Monthly Sales</span>
                    <div className='flex items-center'>
                        <strong className='text-xl font-semibold text-gray-700'>RS: 3425</strong>
                        <span className='pl-2 text-sm text-green-500'>-343</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='flex items-center justify-center w-12 h-12 bg-[orange] rounded-full'>
                    <IoPeople className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm font-light text-gray-500'>Total Customers</span>
                    <div className='flex items-center'>
                        <strong className='text-xl font-semibold text-gray-700'>12313</strong>
                        <span className='pl-2 text-sm text-red-500'>-30</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='flex items-center justify-center w-12 h-12 bg-[orange] rounded-full'>
                    <IoCart className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm font-light text-gray-500'>Total Orders</span>
                    <div className='flex items-center'>
                        <strong className='text-xl font-semibold text-gray-700'>16432</strong>
                        <span className='pl-2 text-sm text-red-500'>-43</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

export default AdminDashStartGrid;

function BoxWrapper({ children }) {
    return <div className="flex items-center flex-1 p-4 bg-white border border-gray-200 rounded-md">{children}</div>
}
