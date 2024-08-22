import React from 'react'
import donut from '../../assets/images/donut.png'
import burger from '../../assets/images/burger.png'
import cupcake from '../../assets/images/cupcake.png'
import hotdog from '../../assets/images/hot-dog.png'
import pizza from '../../assets/images/pizza.png'
import ice from '../../assets/images/ice-cream.png'

function PopularProducts({products, onAddToCart}) {
    
  return (
    <>
    <h1 className='ml-1 font-bold text-[16px] pb-5'>Popular Products</h1>

    <div className="grid w-full grid-cols-4 gap-4 pb-4">
        {products.map((product, index) => (
          <BoxWrapper key={index}>
            <div className='flex items-center justify-center w-full h-32 bg-[#EEF2F5] rounded-md'>
              <img src={product.image} alt={product.name} className='w-40'/>
            </div>
            <div className='flex flex-col'>
              <span className='text-black text-[14px] font-semibold pb-1'>{product.name}</span>
              <p className='text-[#00B074] font-bold'>$ {product.price}</p>
            </div>
            <button className='bg-[#00B074] text-white text-[14px] py-2 ml-28 rounded-md' onClick={() => onAddToCart(product)}>Add to Cart</button>
          </BoxWrapper>
        ))}
      </div>
</>
  )
}

function BoxWrapper({ children }) {
    return <div className="flex flex-col flex-1 gap-3 p-5 bg-white border rounded-md hover:shadow-md">{children}</div>
}


export default PopularProducts