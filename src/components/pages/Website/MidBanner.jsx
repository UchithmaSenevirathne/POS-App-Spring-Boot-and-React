import React from 'react'
import divider from '../../assets/images/web/banner/divider.webp'
import middleimg from '../../assets/images/web/banner/middle.jpg'
import '../../assets/midbanner.css'

function MidBanner() {
  return (
    <div className='flex flex-col position-sticky'>
      <img src={divider} alt=""  className='absolute top-[1700px] z-10'/>
      <img src={middleimg} alt="" className='h-[624px] object-cover middleimg'/>
      <img src={divider} alt=""  className='absolute top-[2300px]'/>
    </div>
  )
}

export default MidBanner