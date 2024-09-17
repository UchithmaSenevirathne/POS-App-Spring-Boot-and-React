import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RecentOrders() {
  const [recentOrderData, setRecentOrderData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/backend/orders/recent`
        );
        setRecentOrderData(response.data); // Set the data to your state
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex-1 px-4 pt-3 pb-4 bg-white border border-gray-200 rounded-md">
      <strong className="font-medium text-gray-700">Recent Orders</strong>
      <div className="mt-3 max-h-[250px] overflow-y-auto">
        <table className="w-full text-gray-700 border-gray-200 rounded-sm border-x">
          <thead>
            <tr className="bg-[orange] text-white">
              <td>ID</td>
              <td>Order Date</td>
              <td>Customer ID</td>
              <td>Order Total</td>
              <td>Deliver Address</td>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order, index) => (
              <React.Fragment key={index}>
                <tr className="hover:bg-[#fff3dd]">
                  <td>
                    <Link
                      to={`order/${order.orderId}`}
                      className="text-[orange]"
                    >
                      #{order.orderId}
                    </Link>
                  </td>
                  <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                  <td className="text-[#249cff]">{order.userId}</td>
                  <td className="text-[orange]">
                    ${order.orderTotal.toFixed(2)}
                  </td>
                  <td>{order.userAddress}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
