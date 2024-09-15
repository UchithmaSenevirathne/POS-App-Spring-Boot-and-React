import React, {useState, useEffect} from "react";
import '../../assets/Dashboard.css'
import {
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineX,
} from "react-icons/hi";
import { HiOutlineCursorArrowRays } from "react-icons/hi2";
import { Link } from "react-router-dom";

function MyOrders({ cart, onIncreaseQty, onDecreaseQty, onRemoveFromCart, onClearCart }) {
  const [order, setOrder] = useState([]);
  
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const checkout = () => {
    setOrder([...order, ...cart]);
    onClearCart();
  }

  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const period = hours >= 12 ? "PM" : "AM";

      // Convert hours from 24-hour to 12-hour format
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      setTime(`${formattedHours}.${formattedMinutes} ${period}`);
    };

    // Update time immediately and then every minute
    updateTime();
    const timerId = setInterval(updateTime, 60000); // Update every 60 seconds

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, []);
  
  return (
    <div className="my-orders w-[25rem] bg-white mt-10 py-9 px-10 rounded-md">
      <div className="flex justify-between pb-9">
        <h2 className="font-bold text-[18px]">My Order</h2>
      </div>
      <div className="flex flex-col gap-5 pb-9">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-[#fff3dd] rounded-md">
            <HiOutlineClock className="text-[orange] text-[20px]" />
          </div>
          <div>
            <p className="text-[14px] font-semibold">{time}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="overflow-y-auto py-9 cart max-h-52" >
        <div>
        {cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-md bg-[#EEF2F5]"
            />
            <div className="flex flex-col flex-1 gap-3 mx-5">
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <div className="flex items-center border-[orange] rounded-full w-14">
                <button className="px-2 hover:text-[orange]" onClick={() => onDecreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button className="px-2 hover:text-[orange]" onClick={() => onIncreaseQty(item.id)}>+</button>
              </div>
            </div>
            <p className="font-bold text-red-500">
              $ {(item.price * item.quantity).toFixed(2)}
            </p>
            <div className="ml-3">
              <HiOutlineX className="text-gray-400 cursor-pointer" onClick={() => onRemoveFromCart(item.id)} />
            </div>
          </div>
        ))}
        </div>
      </div>
      <hr />
      <div className="pt-9">
        <h2 className="pb-5 font-bold text-[18px]">Payment Method</h2>
        <div className="flex gap-3">
            <div className="w-full bg-[#fff3dd] h-[100px] rounded-md"></div>
            <div className="w-full bg-[#fff3dd] h-[100px] rounded-md"></div>
        </div>
      </div>
      <div className="flex justify-between pt-9">
        <span className="font-bold">Total</span>
        <span className="font-bold">$ {totalPrice.toFixed(2)}</span>
      </div>
      <button className="w-full py-2 mt-4 text-white bg-[orange] rounded-md" onClick={checkout}>
        Checkout
      </button>
    </div>
  );
}

export default MyOrders;
