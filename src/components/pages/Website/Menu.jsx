import React from 'react'
import bg from '../../assets/images/web/menu/menubg.webp'
import bigimg from '../../assets/images/web/menu/menuimg.webp'
import icon1 from '../../assets/images/web/menu/carrot.png'
import icon2 from '../../assets/images/web/menu/spoke.png'
import icon3 from '../../assets/images/web/menu/icon-9.png'
import icon4 from '../../assets/images/web/menu/icon-10.png'
import '../../assets/menu.css'

function Menu() {
  return (
    <div className='bg-white h-[850px] bg-img '>
      <div className='flex items-center gap-20 py-28 px-60'>
        <div>
        <img src={bigimg} alt=""  className='flex-1 w-100 h-100'/>
        </div>
        <div className='flex flex-col gap-10 w-[50%]'>
          <h1 className='font-raleway font-bold text-[28px]'>What makes our menu special ?</h1>
          <div className='flex items-center gap-5'>
            <img src={icon1} alt="" />
            <div className='flex flex-col gap-3'>
              <p className='font-raleway font-semibold text-[20px] text-[#EE8600]'>Pure Ingredients</p>
              <p className='font-poppins font-medium text-[14px] text-[#00000073]'>Our menu stands out due to our commitment to using only the finest, pure ingredients. Each dish is crafted with fresh, natural components that ensure the highest quality and taste.</p>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <img src={icon2} alt="" />
            <div className='flex flex-col gap-3'>
              <p className='font-raleway font-semibold text-[20px] text-[#EE8600]'>Sustainability</p>
              <p className='font-poppins font-medium text-[14px] text-[#00000073]'>We prioritize sustainability by sourcing ingredients from eco-friendly and responsible suppliers. Our practices help minimize waste and support a healthier planet.</p>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <img src={icon3} alt="" />
            <div className='flex flex-col gap-3'>
              <p className='font-raleway font-semibold text-[20px] text-[#EE8600]'>Environmentalism</p>
              <p className='font-poppins font-medium text-[14px] text-[#00000073]'>Dedicated to environmental stewardship, we incorporate green practices in every step of our process, from energy-efficient cooking methods to reducing plastic use.</p>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <img src={icon4} alt="" />
            <div className='flex flex-col gap-3'>
              <p className='font-raleway font-semibold text-[20px] text-[#EE8600]'>Formula Transparency</p>
              <p className='font-poppins font-medium text-[14px] text-[#00000073]'>We believe in full transparency with our formulas, providing clear and accessible information about our ingredients and preparation methods, so you know exactly what’s in your meal.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu