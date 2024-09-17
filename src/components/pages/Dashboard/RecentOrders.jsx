import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../assets/Downarrow.css'

function RecentOrders() {
  const [recentOrderData, setRecentOrderData] = useState([]);
  const containerRef = useRef(null);
    const [showArrow, setShowArrow] = useState(false);
    const [arrowVisible, setArrowVisible] = useState(true);

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

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        setShowArrow(containerRef.current.scrollHeight > containerRef.current.clientHeight);
      }
    };

    const handleScroll = () => {
      if (containerRef.current) {
        setArrowVisible(containerRef.current.scrollTop === 0);
      }
    };

    checkOverflow(); // Check overflow initially
    window.addEventListener("resize", checkOverflow); // Check overflow on window resize
    containerRef.current.addEventListener("scroll", handleScroll); // Handle scroll

    return () => {
      window.removeEventListener("resize", checkOverflow);
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [recentOrderData]);

  return (
    <div className="flex-1 px-4 pt-3 pb-4 bg-white border border-gray-200 rounded-xl">
      <strong className="font-medium text-gray-700">Recent Orders</strong>
      <div ref={containerRef} className="mt-3 max-h-[280px] overflow-y-auto">
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
                  <td className="text-[#249cff]">#{order.userId}</td>
                  <td className="text-[orange]">
                    RS: {order.orderTotal.toFixed(2)}
                  </td>
                  <td>{order.userAddress}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {showArrow && arrowVisible && (
          <DownArrow />
        )}
      </div>
    </div>
  );
}

function DownArrow() {
  return (
    <div className="arrow-container right-[50%] bottom-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

export default RecentOrders;
