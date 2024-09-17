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
// import { BiCake } from "react-icons/bi";
import "./PopularProducts";
import { useState } from "react";

function DashboardStartsGrid({ categories, setSelectedCategory }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setSelectedCategory(categoryId);
  };

  const categoryImages = {
    Donuts: donut,
    Burger: burger,
    IceCream: ice,
    Chicken: chicken,
    Drinks: drink,
    Pizza: pizza,
    Cakes: cupcake,
    HotDog: hotdog,
    Potato: fries,
    Veg: salad
  };

  return (
    <>
      <h1 className="ml-1 font-bold text-[18px] pb-5">Explore Categories</h1>

      <div className="grid w-full grid-cols-5 gap-4 pb-3">
        {categories.map((category, index) => (
          <BoxWrapper
            key={index}
            onClick={() => handleCategorySelect(category.cat_id)}
            isSelected={selectedCategoryId === category.cat_id}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md p-1">
              <img src={categoryImages[category.cat_name] || ""} alt={category.cat_name} />
            </div>
            <div className="pl-4">
              <span className="font-medium text-black text-[14px] group-hover:text-[orange] transition-all duration-500">
                {category.cat_name}
              </span>
            </div>
          </BoxWrapper>
        ))}
      </div>
    </>
  );
}

export default DashboardStartsGrid;

function BoxWrapper({ children, onClick, isSelected }) {
  return (
    <div
      className={`flex items-center flex-1 p-3 border rounded-xl cursor-pointer group ${
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
