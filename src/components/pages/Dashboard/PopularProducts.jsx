// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { HiOutlineStar } from "react-icons/hi";
// import { FaStar } from "react-icons/fa6";

// function PopularProducts({ onAddToCart, products }) {
//   // const [products, setProducts] = useState([]);

//   return (
//     <>
//       <h1 className="ml-1 font-bold text-[18px] pb-5">Popular Products</h1>

//       <div className="grid w-full grid-cols-4 gap-4 pb-4 overflow-y-auto max-h-[480px] order">
//         {products.map((product) => (
//           <BoxWrapper key={product.itemId}>
//             <div className="flex items-center justify-center w-full h-40 bg-[#EEF2F5] rounded-xl">
//               <img
//                 src={product.itemImage}
//                 alt={product.itemName}
//                 className="w-36"
//               />
//             </div>
//             <div className="flex flex-col">
//               <span className="text-black text-[16px] font-bold pb-1">
//                 {product.itemName}
//               </span>
//               <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <p className="text-[orange] font-bold text-[16px]">
//                   RS: {product.itemPrice}
//                 </p>
//                 <p className="text-[12px] text-[#000000] line-through">
//                   RS {product.itemPrice + 10}
//                 </p>
//               </div>
//               <div className="flex items-center gap-1">
//                   <FaStar className="text-[orange]"/>
//                   <p className="text-[12px] text-[#000000]">2.5K+</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center justify-between gap-5 mt-2">
//             <button
//               className="bg-[#EEF2F5] text-black text-[14px] py-2 rounded-lg w-full font-semibold">
//               WishList
//             </button>
//             <button
//               className="bg-[orange] text-white text-[14px] py-2 rounded-lg w-full"
//               onClick={() => onAddToCart(product.itemId)}
//             >
//               Add to Cart
//             </button>
//             </div>
            
//           </BoxWrapper>
//         ))}
//       </div>
//     </>
//   );
// }

// function BoxWrapper({ children }) {
//   return (
//     <div className="flex flex-col flex-1 gap-3 p-4 transition-all duration-500 bg-white rounded-xl hover:shadow-md hover:border-[orange] border ">
//       {children}
//     </div>
//   );
// }

// export default PopularProducts;

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { HiOutlineStar } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";
// import DownArrow from "../../../Lib/const/DownArrow";
import '../../assets/Downarrow.css'

function PopularProducts({ onAddToCart, products }) {
  const containerRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(true);

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
  }, [products]);

  return (
    <>
      <h1 className="ml-1 font-bold text-[18px] pb-5">Popular Products</h1>

      <div
        ref={containerRef}
        className="relative grid w-full grid-cols-4 gap-4 pb-4 overflow-y-auto max-h-[480px] order"
      >
        {products.map((product) => (
          <BoxWrapper key={product.itemId}>
            <div className="flex items-center justify-center w-full h-40 bg-[#EEF2F5] rounded-xl">
              <img
                src={product.itemImage}
                alt={product.itemName}
                className="w-36"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-black text-[16px] font-bold pb-1">
                {product.itemName}
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[orange] font-bold text-[16px]">
                    RS: {product.itemPrice}
                  </p>
                  <p className="text-[12px] text-[#000000] line-through">
                    RS {product.itemPrice + 10}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[orange]"/>
                  <p className="text-[12px] text-[#000000]">2.5K+</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5 mt-2">
              <button
                className="bg-[#EEF2F5] text-black text-[14px] py-2 rounded-lg w-full font-semibold">
                WishList
              </button>
              <button
                className="bg-[orange] text-white text-[14px] py-2 rounded-lg w-full"
                onClick={() => onAddToCart(product.itemId)}
              >
                Add to Cart
              </button>
            </div>
          </BoxWrapper>
        ))}

        {showArrow && arrowVisible && (
          <DownArrow />
        )}
      </div>
    </>
  );
}

function DownArrow() {
  return (
    <div className="arrow-container right-[48%] bottom-0">
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

function BoxWrapper({ children }) {
  return (
    <div className="flex flex-col flex-1 gap-3 p-4 transition-all duration-500 bg-white rounded-xl hover:shadow-md hover:border-[orange] border ">
      {children}
    </div>
  );
}

export default PopularProducts;
