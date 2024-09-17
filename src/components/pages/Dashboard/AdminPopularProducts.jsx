// import React from 'react'
// import { Link } from 'react-router-dom'
// import burger from '../../assets/images/cheeseburg.png'
// import pizza from '../../assets/images/pizza/cheeselovers-pz.png'
// import shake from '../../assets/images/drinks/chocolate-shake.png'
// import ice from '../../assets/images/ice/mixed.png'
// import bbq from '../../assets/images/chicken/bbqchick.png'

// const popularProductsData = [
//     {
//         id: '3432',
//         product_name: 'Cheese Burger"',
//         product_thumbnail: burger,
//         product_price: '$14.00',
//         product_stock: 341
//     },
//     {
//         id: '7633',
//         product_name: 'Cheese Lovers Pizza',
//         product_thumbnail: pizza,
//         product_price: '$39.00',
//         product_stock: 24
//     },
//     {
//         id: '6534',
//         product_name: 'Chocolate Shake',
//         product_thumbnail: shake,
//         product_price: '$8.00',
//         product_stock: 56
//     },
//     {
//         id: '9234',
//         product_name: 'Mixed Ice cream',
//         product_thumbnail: ice,
//         product_price: '$4.00',
//         product_stock: 98
//     },
//     {
//         id: '4314',
//         product_name: 'Chicken BBQ',
//         product_thumbnail: bbq,
//         product_price: '$6.00',
//         product_stock: 0
//     }
// ]

// function AdminPopularProducts() {
//     return(
//         <div className='bg-white px-4 pt-3 pb-4 rounded-md border border-gray-200 w-[23rem] max-h-[310px] overflow-y-auto'>
//             <strong className='font-medium text-gray-700'>Popular Products</strong>
//             <div className='flex flex-col gap-3 mt-4'>
//                 {popularProductsData.map(product => (
//                     <Link key={product.id} to={`/product/${product.id}`} className='flex hover:no-underline'>
//                         <div className='w-10 h-10 overflow-hidden bg-gray-200 rounded-sm min-w-10'>
//                             <img className='object-cover w-full h-full' src={product.product_thumbnail} alt={product.product_name}/>
//                         </div>
//                         <div className='flex-1 ml-4'>
//                             <p className='text-sm text-gray-800'>{product.product_name}</p>
//                             <span className={`text-sm font-medium ${product.product_stock === 0 ? 'text-orange-500' : 'text-green-500'}`}>
//                                 {product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in Stock'}
//                             </span>
//                         </div>
//                         <div className='pl-2 text-xs text-gray-400'>{product.product_price}</div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default AdminPopularProducts;

import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../assets/Downarrow.css'

function AdminPopularProducts() {
    const [popularProducts, setPopularProducts] = useState([]);
    const containerRef = useRef(null);
    const [showArrow, setShowArrow] = useState(false);
    const [arrowVisible, setArrowVisible] = useState(true);

    useEffect(() => {
        // Fetch popular items from the backend
        const fetchPopularProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/backend/orders/popular');
                setPopularProducts(response.data); // Assuming response contains the array of OrderItemDTO
            } catch (error) {
                console.error('Error fetching popular products:', error);
            }
        };
        fetchPopularProducts();
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
      }, [popularProducts]);

    return (
        <div ref={containerRef} className='bg-white px-4 pt-3 pb-4 rounded-xl border border-gray-200 w-[23rem] max-h-[350px] overflow-y-auto'>
            <strong className='font-medium text-gray-700'>Popular Products</strong>
            <div className='flex flex-col gap-4 mt-4'>
                {popularProducts.map(product => (
                    <Link key={product.itemId} to={`/product/${product.itemId}`} className='flex hover:no-underline'>
                        <div className='w-10 h-10 overflow-hidden bg-gray-200 rounded-sm min-w-10'>
                            <img className='object-cover w-full h-full' src={product.itemImage} alt={product.itemName} />
                        </div>
                        <div className='flex-1 ml-4'>
                            <p className='text-sm text-gray-800'>{product.itemName}</p>
                            <span className={`text-sm font-medium ${product.quantity === 0 ? 'text-orange-500' : 'text-green-500'}`}>
                                {product.quantity === 0 ? 'Out of Stock' : product.quantity + ' in Stock'}
                            </span>
                        </div>
                        <div className='pl-2 text-xs text-gray-400'>RS: {product.itemPrice.toFixed(2)}</div>
                    </Link>
                ))}
            </div>
            {showArrow && arrowVisible && (
          <DownArrow />
        )}
        </div>
    );
}

function DownArrow() {
    return (
      <div className="arrow-container right-[10%] bottom-10">
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

export default AdminPopularProducts;
