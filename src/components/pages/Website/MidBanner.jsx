import React from 'react'
import divider from '../../assets/images/web/banner/divider.webp'
import middleimg from '../../assets/images/web/banner/middle.jpg'
import '../../assets/midbanner.css'

function MidBanner() {
  return (
    <div className='flex flex-col'>
      <img src={divider} alt=""  className='absolute top-[3000px] z-10'/>
      <img src={middleimg} alt="" className='h-[624px] object-cover middleimg'/>
      <img src={divider} alt=""  className='absolute top-[3600px]'/>
    </div>
  )
}

export default MidBanner