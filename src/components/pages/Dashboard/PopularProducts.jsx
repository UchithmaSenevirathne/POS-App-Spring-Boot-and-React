import React from 'react'
import donut from '../../assets/images/donut.png'
import burger from '../../assets/images/burger.png'
import cupcake from '../../assets/images/cupcake.png'
import hotdog from '../../assets/images/hot-dog.png'
import pizza from '../../assets/images/pizza.png'
import ice from '../../assets/images/ice-cream.png'

function PopularProducts() {
  return (
    <>
    <h1 className='ml-1 font-bold text-[16px] pb-5'>Popular</h1>
    <div className="flex w-full gap-4 pb-4">
    <BoxWrapper className='flex flex-col'>
        <div className='flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md'>
            <img src={donut} alt="" />
        </div>
        <div className='pl-4'>
            <span className='font-medium text-black text-[14px]'>Donuts</span>
        </div>
    </BoxWrapper>
    <BoxWrapper>
    <div className='flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md'>
            <img src={burger} alt="" />
        </div>
        <div className='pl-4'>
        <span className='font-medium text-black text-[14px]'>Burger</span>
            
        </div>
    </BoxWrapper>
    <BoxWrapper>
    <div className='flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md'>
            <img src={ice} alt="" />
        </div>
        <div className='pl-4'>
        <span className='font-medium text-black text-[14px]'>Ice Cream</span>
            
        </div>
    </BoxWrapper>
</div>
<div className="flex w-full gap-4">
    <BoxWrapper>
    <div className='flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md'>
            <img src={pizza} alt="" />
        </div>
        <div className='pl-4'>
        <span className='font-medium text-black text-[14px]'>Pizza</span>
           
        </div>
    </BoxWrapper>
    <BoxWrapper>
    <div className='flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md'>
            <img src={cupcake} alt="" />
        </div>
        <div className='pl-4'>
        <span className='font-medium text-black text-[14px]'>Cakes</span>
            
        </div>
    </BoxWrapper>
    <BoxWrapper>
    <div className='flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md'>
            <img src={hotdog} alt="" />
        </div>
        <div className='pl-4'>
        <span className='font-medium text-black text-[14px]'>Hot dog</span>
            
        </div>
    </BoxWrapper>
</div>
</>
  )
}

function BoxWrapper({ children }) {
    return <div className="flex items-center flex-1 p-4 bg-white hover:bg-[#D9F3EA] active:bg-[#D9F3EA] border rounded-md hover:border-[#00B074]">{children}</div>
}

export default PopularProducts