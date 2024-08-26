import React from "react";
import { IoBagHandle, IoCart, IoPeople, IoPieChart } from "react-icons/io5";
import donut from "../../assets/images/donut.png";
import burger from "../../assets/images/burger.png";
import chicken from "../../assets/images/chicken.png";
import cupcake from "../../assets/images/cupcake.png";
import drink from "../../assets/images/drink.png";
import fries from "../../assets/images/fries.png";
import salad from "../../assets/images/salad.png";
import hotdog from "../../assets/images/hot-dog.png";
import pizza from "../../assets/images/pizza.png";
import ice from "../../assets/images/ice-cream.png";
import { BiCake } from "react-icons/bi";
import "./PopularProducts";
import { useState } from "react";

function DashboardStartsGrid({ categories, setSelectedCategory }) {
  const [selectedCategory, setSelectedCategoryLocal] = useState(null);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategoryLocal(categoryName);
    setSelectedCategory(categoryName);
  };

  return (
    <>
      <h1 className="ml-1 font-bold text-[18px] pb-5">Explore Categories</h1>

      <div className="grid w-full grid-cols-5 gap-4 pb-4">
        {categories.map((category, index) => (
          <BoxWrapper
            key={index}
            onClick={() => handleCategorySelect(category.name)}
            isSelected={selectedCategory === category.name}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md">
              <img src={category.image} alt={category.name} />
            </div>
            <div className="pl-4">
              <span className="font-medium text-black text-[14px] group-hover:text-[orange] transition-all duration-500">
                {category.name}
              </span>
            </div>
          </BoxWrapper>
        ))}
      </div>

      {/* <div className="flex w-full gap-4 pb-4">
    <BoxWrapper>
        <div className='flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md'>
            <img src={donut} alt="" />
        </div>
        <div className='pl-4'>
            <span className='font-medium text-black text-[14px]'>Donuts</span>
        </div>
    </BoxWrapper>
    <BoxWrapper>
    <div className='flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md'>
            <img src={burger} alt=""/>
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
    <BoxWrapper>
    <div className='flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md'>
            <img src={chicken} alt="" />
        </div>
        <div className='pl-4'>
        <span className='font-medium text-black text-[14px]'>Chicken</span>
           
        </div>
    </BoxWrapper>
    <BoxWrapper>
    <div className='flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md'>
            <img src={drink} alt="" />
        </div>
        <div className='pl-4'>
        <span className='font-medium text-black text-[14px]'>Drinks</span>
            
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
    <BoxWrapper>
    <div className='flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md'>
            <img src={fries} alt="" />
        </div>
        <div className='pl-4'>
        <span className='font-medium text-black text-[14px]'>Potato</span>
            
        </div>
    </BoxWrapper>
    <BoxWrapper>
    <div className='flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md'>
            <img src={salad} alt="" />
        </div>
        <div className='pl-4'>
        <span className='font-medium text-black text-[14px]'>Veg</span>
            
        </div>
    </BoxWrapper>
</div> */}
    </>
  );
}

export default DashboardStartsGrid;

function BoxWrapper({ children, onClick, isSelected }) {
  return (
    <div
      className={`flex items-center flex-1 p-4 border rounded-md cursor-pointer group ${
        isSelected
          ? "bg-[#fff3dd] border-[orange]"
          : "bg-white hover:bg-[#fff3dd] hover:border-[orange] transition-all duration-500"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
