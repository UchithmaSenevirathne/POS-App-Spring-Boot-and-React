import React, { useState, useEffect, useRef } from "react";
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
import { FaStar } from "react-icons/fa6";
import axios from "axios";
import '../../assets/Downarrow.css'
import { useUserContext } from "../../../Lib/const/UserContext";


function MenuItems() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(true);
  const { setUser } = useUserContext(); 

  useEffect(() => {
    axios
      .get("http://localhost:8080/backend/category")
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Fetch items for the selected category
      axios
        .get(`http://localhost:8080/backend/category/items/${selectedCategory}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products for category:", error);
        });
    } else {
      // Fetch first 8 items if no category is selected
      axios
        .get("http://localhost:8080/backend/item?limit=8")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching items:", error);
        });
    }
  }, [selectedCategory]);

  // useEffect(() => {
  //   const checkOverflow = () => {
  //     if (containerRef.current) {
  //       setShowArrow(
  //         containerRef.current.scrollHeight > containerRef.current.clientHeight
  //       );
  //     }
  //   };

  //   const handleScroll = () => {
  //     if (containerRef.current) {
  //       setArrowVisible(containerRef.current.scrollTop === 0);
  //     }
  //   };

  //   checkOverflow(); // Check overflow initially
  //   window.addEventListener("resize", checkOverflow); // Check overflow on window resize
  //   containerRef.current.addEventListener("scroll", handleScroll); // Handle scroll

  //   return () => {
  //     window.removeEventListener("resize", checkOverflow);
  //     if (containerRef.current) {
  //       containerRef.current.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, [products]);

  if (loading) {
    return <div>Loading categories...</div>;
  }

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
    Veg: salad,
  };

  return (
    <div className="mx-[250px] pt-28">
      <div className="grid w-full grid-cols-5 gap-4 pb-20">
        {categories.map((category, index) => (
          <CategoryBoxWrapper
            key={index}
            onClick={() => handleCategorySelect(category.cat_id)}
            isSelected={selectedCategoryId === category.cat_id}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#EEF2F5] rounded-md p-1">
              <img
                src={categoryImages[category.cat_name] || ""}
                alt={category.cat_name}
              />
            </div>
            <div className="pl-4">
              <span className="font-medium text-black text-[14px] group-hover:text-[orange] transition-all duration-500">
                {category.cat_name}
              </span>
            </div>
          </CategoryBoxWrapper>
        ))}
      </div>

      <div
        // ref={containerRef}
        className="relative grid w-full grid-cols-4 gap-4 pb-4 order overflow-y-auto max-h-[1000px]"
      >
        {products.map((product) => (
          <ProductBoxWrapper key={product.itemId}>
            <div className="flex items-center justify-center w-full h-40 bg-[#EEF2F5] rounded-xl">
              <img
                src={product.itemImage}
                alt={product.itemName}
                className="w-36"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-black text-[16px] font-bold pb-1">
                {product.itemName}
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[orange] font-bold text-[16px]">
                    RS: {product.itemPrice}
                  </p>
                  <p className="text-[12px] text-[#000000] line-through">
                    RS {product.itemPrice + 10}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[orange]" />
                  <p className="text-[12px] text-[#000000]">2.5K+</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5 mt-2">
              <button className="bg-[#EEF2F5] text-black text-[14px] py-2 rounded-lg w-full font-semibold">
                WishList
              </button>
              <button className="bg-[orange] text-white text-[14px] py-2 rounded-lg w-full">
                Add to Cart
              </button>
            </div>
          </ProductBoxWrapper>
        ))}
        {/* {showArrow && arrowVisible && <DownArrow />} */}
      </div>
    </div>
  );
}

export default MenuItems;

function CategoryBoxWrapper({ children, onClick, isSelected }) {
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

function ProductBoxWrapper({ children }) {
  return (
    <div className="flex flex-col flex-1 gap-3 p-4 transition-all duration-500 bg-white rounded-xl hover:shadow-md hover:border-[orange] border">
      {children}
    </div>
  );
}

function DownArrow() {
    return (
      <div className="arrow-container right-[48%] bottom-0">
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
