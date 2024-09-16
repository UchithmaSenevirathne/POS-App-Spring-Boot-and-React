import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RecentOrders() {
  const [recentOrderData, setRecentOrderData] = useState([]);
  const role = JSON.parse(localStorage.getItem("user")).role; // Fetch the user role

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (role === 'ADM') {
          // For admin, fetch all orders
          const response = await axios.get(`http://localhost:8080/backend/orders`);
          setRecentOrderData(response.data);
        } else if (role === 'USER') {
          // For user, fetch orders related to the specific user
          const userEmail = JSON.parse(localStorage.getItem("user")).email;
          const userResponse = await axios.get(`http://localhost:8080/backend/user/id/${userEmail}`);
          const userId = userResponse.data;

          const response = await axios.get(
            `http://localhost:8080/backend/orders/user/${userId}/details`
          );
          setRecentOrderData(response.data);
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrders();
  }, [role]);

  return (
    <div className="flex-1 px-4 pt-3 pb-4 bg-white border border-gray-200 rounded-md">
      <strong className="font-medium text-gray-700">Recent Orders</strong>
      <div className="mt-3">
        {role === 'ADM' ? (
          // Admin Table
          <table className="w-full text-gray-700 border-gray-200 rounded-sm border-x">
            <thead>
              <tr className="bg-[orange] text-white">
                <td>ID</td>
                <td>Product Name</td>
                <td>Product Quantity</td>
                <td>Product Price</td>
                <td>Order Total</td>
                <td>Customer ID</td>
                <td>Order Date</td>
                <td>Deliver Address</td>
              </tr>
            </thead>
            <tbody>
              {recentOrderData.map((order, index) => (
                <React.Fragment key={index}>
                  <tr className="hover:bg-[#fff3dd]">
                    <td>
                      <Link to={`order/${order.orderId}`} className="text-[orange]">
                        #{order.orderId}
                      </Link>
                    </td>
                    <td>{order.productName}</td>
                    <td>{order.productQuantity}</td>
                    <td className="text-[#21a821]">${order.productPrice.toFixed(2)}</td>
                    <td className="text-[orange]">${order.orderTotalPrice.toFixed(2)}</td>
                    <td className="text-[#249cff]">{order.userId}</td>
                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td>{order.orderAddress}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        ) : (
          // User Table
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-[orange] text-white">
                <th className="px-4 py-2 border-b">Order Date</th>
                <th className="px-4 py-2 border-b"></th>
                <th className="px-4 py-2 border-b">Item Name</th>
                <th className="px-4 py-2 border-b">Unit Price</th>
                <th className="px-4 py-2 border-b">Quantity</th>
                <th className="px-4 py-2 border-b">Order Total</th>
              </tr>
            </thead>
            <tbody>
              {recentOrderData.map((orderDetail, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b">{new Date(orderDetail.orderDate).toLocaleDateString()}</td>
                  <td className="px-4 py-2 border-b">
                    <img
                      src={orderDetail.productImage}
                      alt={orderDetail.productName}
                      className="object-cover w-12 h-12"
                    />
                  </td>
                  <td className="px-4 py-2 border-b">{orderDetail.productName}</td>
                  <td className="px-4 py-2 border-b text-[#21a821]">{orderDetail.productPrice}</td>
                  <td className="px-4 py-2 border-b">{orderDetail.productQuantity}</td>
                  <td className="px-4 py-2 border-b text-[red]">{orderDetail.orderTotalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default RecentOrders;
