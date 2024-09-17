// import React from 'react'
// import donut from '../../assets/images/donut.png'
// import burger from '../../assets/images/burger.png'
// import cupcake from '../../assets/images/cupcake.png'
// import hotdog from '../../assets/images/hot-dog.png'
// import pizza from '../../assets/images/pizza.png'
// import ice from '../../assets/images/ice-cream.png'

// function PopularProducts({products, onAddToCart}) {

//   return (
//     <>
//     <h1 className='ml-1 font-bold text-[18px] pb-5'>Popular Products</h1>

//     <div className="grid w-full grid-cols-4 gap-4 pb-4 overflow-y-auto max-h-[445px] order">
//         {products.map((product) => (
//           <BoxWrapper key={product.itemId}>
//             <div className='flex items-center justify-center w-full h-32 bg-[#EEF2F5] rounded-md'>
//               <img src={product.itemImage} alt={product.itemName} className='w-36'/>
//             </div>
//             <div className='flex flex-col'>
//               <span className='text-black text-[14px] font-semibold pb-1'>{product.itemName}</span>
//               <p className='text-[orange] font-bold'>RS: {product.itemPrice}</p>
//             </div>
//             <button className='bg-[orange] text-white text-[14px] py-2 ml-28 rounded-md' onClick={() => onAddToCart(product.itemId)}>Add to Cart</button>
//           </BoxWrapper>
//         ))}
//       </div>
// </>
//   )
// }

// function BoxWrapper({ children }) {
//     return <div className="flex flex-col flex-1 gap-3 p-5 transition-all duration-500 bg-white rounded-md hover:shadow-md">{children}</div>
// }

// export default PopularProducts

import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiOutlineStar } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";

function PopularProducts({ onAddToCart, products }) {
  // const [products, setProducts] = useState([]);

  return (
    <>
      <h1 className="ml-1 font-bold text-[18px] pb-5">Popular Products</h1>

      <div className="grid w-full grid-cols-4 gap-4 pb-4 overflow-y-auto max-h-[480px] order">
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
      </div>
    </>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="flex flex-col flex-1 gap-3 p-4 transition-all duration-500 bg-white rounded-xl hover:shadow-md">
      {children}
    </div>
  );
}

export default PopularProducts;
