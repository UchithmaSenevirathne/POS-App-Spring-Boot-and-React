import React from 'react'
import DashboardStartsGrid from './DashboardStartsGrid'

function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
    <DashboardStartsGrid />
    {/* <div className='flex flex-row w-full gap-4'>
        <TransactionChart />
        <BuyerProfileChart />
    </div>
    <div className='flex flex-row w-full gap-4'>
        <RecentOrders/>
        <PopularProducts/>
    </div> */}
</div>
  )
}

export default Dashboard