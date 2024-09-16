import React from "react";
import cheeseBurg from "../../assets/images/cheeseburg.png";
import orangeJc from "../../assets/images/drinks/orange-juice.png";
import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [recentOrderData, setRecentOrderData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userEmail = JSON.parse(localStorage.getItem("user")).email;
        const userResponse = await axios.get(`http://localhost:8080/backend/user/id/${userEmail}`);
        const userId = userResponse.data;
        
        const response = await axios.get(
          `http://localhost:8080/backend/orders/user/${userId}/details`
        );
        setRecentOrderData(response.data); // Set the data to your state
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };
  
    fetchOrders();
  }, []);

  return (
    <div className="container p-4 mx-auto">
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
            <td className="px-4 py-2 border-b">{orderDetail.orderDate}</td>
            <td className="px-4 py-2 border-b">
              <img
                src={orderDetail.productImage}
                alt={orderDetail.productName}
                className="object-cover w-12 h-12"
              />
            </td>
            <td className="px-4 py-2 border-b">{orderDetail.productName}</td>
            <td className="px-4 py-2 border-b text-[#21a821]">
              {orderDetail.productPrice}
            </td>
            <td className="px-4 py-2 border-b">{orderDetail.productQuantity}</td>
            <td className="px-4 py-2 border-b text-[red]">
              {orderDetail.orderTotalPrice}
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default Orders;
