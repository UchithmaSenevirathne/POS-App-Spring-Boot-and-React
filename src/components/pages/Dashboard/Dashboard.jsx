import React from "react";
import DashboardStartsGrid from "./DashboardStartsGrid";
import MyOrders from "./MyOrders";
import PopularProducts from "./PopularProducts";

function Dashboard() {
  return (
    <div className="flex gap-14">
      <div className="flex flex-col w-full gap-4">
        <div className="w-full">
          <DashboardStartsGrid />
        </div>
        <div className="pt-5">
        <PopularProducts/>
        </div>
      </div>
      <div>
        <MyOrders />
      </div>
    </div>
  );
}

{
  /* <div className='flex flex-row w-full gap-4'>
        <TransactionChart />
        <BuyerProfileChart />
    </div>
    <div className='flex flex-row w-full gap-4'>
        <RecentOrders/>
        <PopularProducts/>
    </div> */
}

export default Dashboard;
