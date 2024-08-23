import React from "react";
import {
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineX,
} from "react-icons/hi";
import { HiOutlineCursorArrowRays } from "react-icons/hi2";
import { Link } from "react-router-dom";

function MyOrders({ cart, onIncreaseQty, onDecreaseQty, onRemoveFromCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="my-orders w-[25rem] bg-white mt-10 py-9 px-10 rounded-l-md">
      <div className="flex justify-between pb-9">
        <h2 className="font-bold">My Order</h2>
        <p className="text-[#00B074] text-[14px]">Edit</p>
      </div>
      <div className="flex flex-col gap-5 pb-9">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-[#D9F3EA] rounded-md">
            <HiOutlineClock className="text-[#00B074] text-[20px]" />
          </div>
          <div>
            <p className="text-[14px] font-semibold">09.00 AM</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-[#D9F3EA] rounded-md">
            <HiOutlineLocationMarker className="text-[#00B074] text-[20px]" />
          </div>
          <div>
            <p className="text-[14px] font-semibold">
              1234 Colombo Road, Galle
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-9">
        {cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-md bg-[#EEF2F5]"
            />
            <div className="flex flex-col flex-1 gap-3 mx-5">
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <div className="flex items-center border-[#00B074] border rounded-full w-14">
                <button className="px-2" onClick={() => onDecreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button className="px-2" onClick={() => onIncreaseQty(item.id)}>+</button>
              </div>
            </div>
            <p className="font-bold text-red-500">
              $ {(item.price * item.quantity).toFixed(2)}
            </p>
            <div className="ml-3">
              <HiOutlineX className="text-gray-400" onClick={() => onRemoveFromCart(item.id)} />
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="pt-9">
        <h2 className="pb-5 font-bold">Payment Method</h2>
        <div className="flex gap-3">
            <div className="w-full bg-[#D9F3EA] h-32 rounded-md"></div>
            <div className="w-full bg-[#D9F3EA] h-32 rounded-md"></div>
        </div>
      </div>
      <div className="flex justify-between pt-9">
        <span className="font-bold">Total</span>
        <span className="font-bold">$ {totalPrice.toFixed(2)}</span>
      </div>
      <button className="w-full py-2 mt-4 text-white bg-[#00B074] rounded-md">
        Checkout
      </button>
    </div>
  );
}

export default MyOrders;
