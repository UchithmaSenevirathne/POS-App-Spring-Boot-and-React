import React from 'react'
import homeImg from  '../../assets/images/web/home/home-img.png'
import ring from  '../../assets/images/web/home/Ellipse.png'
import '../../assets/home.css'

function Home() {
  return (
    <div className='bg-[orange] h-[824px] flex items-center justify-between w-full' id="homePage">
        <div>
          <img src={ring} alt="" className='absolute w-5 left-20'/>
          <img src={ring} alt="" className='absolute left-[1200px] top-36'/>
          <img src={ring} alt="" className='absolute top-40 left-[400px]'/>
          <img src={ring} alt="" className='absolute left-[800px] top-96 w-5'/>
          <img src={ring} alt="" className='absolute left-[700px] top-[700px]'/>
          <img src={ring} alt="" className='absolute left-[1100px] top-[800px]'/>
        </div>
        <div className='flex flex-col w-1/3 ml-60'>
          <h1 className='text-[80px] font-raleway font-semibold mb-5'><span className='text-white'>Welcome</span> to <br/> The World of <br/> Tasty & Fresh Food</h1>
          <p className='text-[30px] font-poppins text-white'>Enjoy a variety of options with quick <br/> delivery and great service!</p>
        </div>
        <img src={homeImg} alt=""  className='object-cover h-auto w-[1000px]'/>
    </div>
  )
}

export default Home