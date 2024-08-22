import React from 'react'
import { Link } from 'react-router-dom'

const popularProductsData = [
    {
        id: '3432',
        product_name: 'Macbook M1 Pro 14"',
        product_thumbnail: 'https://cdn.pixabay.com/photo/2017/08/03/11/22/laptop-2575689_960_720.jpg',
        product_price: '$1499.00',
        product_stock: 341
    },
    {
        id: '7633',
        product_name: 'Samsung Galaxy Buds 2',
        product_thumbnail: 'https://cdn.pixabay.com/photo/2020/09/24/14/51/earphones-5598952_1280.jpg',
        product_price: '$399.00',
        product_stock: 24
    },
    {
        id: '6534',
        product_name: 'Asus Zenbook Pro',
        product_thumbnail: 'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg',
        product_price: '$899.00',
        product_stock: 56
    },
    {
        id: '9234',
        product_name: 'LG Flex Canvas',
        product_thumbnail: 'https://cdn.pixabay.com/photo/2016/11/17/01/02/phone-1830479_960_720.jpg',
        product_price: '$499.00',
        product_stock: 98
    },
    {
        id: '4314',
        product_name: 'Apple Magic Touchpad',
        product_thumbnail: 'https://cdn.pixabay.com/photo/2016/10/21/16/01/ipad-1758353_1280.jpg',
        product_price: '$699.00',
        product_stock: 0
    },
    {
        id: '4342',
        product_name: 'Nothing Earbuds One',
        product_thumbnail: 'https://cdn.pixabay.com/photo/2018/09/07/23/58/headphone-3661771_960_720.jpg',
        product_price: '$399.00',
        product_stock: 453
    }
]

function MyOrders() {
    return(
        <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[30rem]'>
            <strong className='font-medium text-gray-700'>Popular Products</strong>
            <div className='flex flex-col gap-3 mt-4'>
                {popularProductsData.map(product => (
                    <Link key={product.id} to={`/product/${product.id}`} className='flex hover:no-underline'>
                        <div className='w-10 h-10 overflow-hidden bg-gray-200 rounded-sm min-w-10'>
                            <img className='object-cover w-full h-full' src={product.product_thumbnail} alt={product.product_name}/>
                        </div>
                        <div className='flex-1 ml-4'>
                            <p className='text-sm text-gray-800'>{product.product_name}</p>
                            <span className={`text-sm font-medium ${product.product_stock === 0 ? 'text-orange-500' : 'text-green-500'}`}>
                                {product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in Stock'}
                            </span>
                        </div>
                        <div className='pl-2 text-xs text-gray-400'>{product.product_price}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MyOrders;