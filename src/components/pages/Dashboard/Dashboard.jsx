import React from "react";
import DashboardStartsGrid from "./DashboardStartsGrid";
import MyOrders from "./MyOrders";
import PopularProducts from "./PopularProducts";
import products from "../../../Product.json";
import { useState } from "react";

function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("Burger");

  //cart
  const [cart, setCart] = useState([]);

  const categories = [
    {
      name: "Donuts",
      icon: "donut",
      image: require("../../assets/images/donut.png"),
    },
    {
      name: "Burger",
      icon: "burger",
      image: require("../../assets/images/burger.png"),
    },
    {
      name: "Ice Cream",
      icon: "ice",
      image: require("../../assets/images/ice-cream.png"),
    },
    {
      name: "Chicken",
      icon: "chicken",
      image: require("../../assets/images/chicken.png"),
    },
    {
      name: "Drinks",
      icon: "drink",
      image: require("../../assets/images/drink.png"),
    },
    {
      name: "Pizza",
      icon: "pizza",
      image: require("../../assets/images/pizza.png"),
    },
    {
      name: "Cakes",
      icon: "cupcake",
      image: require("../../assets/images/cupcake.png"),
    },
    {
      name: "Hot dog",
      icon: "hotdog",
      image: require("../../assets/images/hot-dog.png"),
    },
    {
      name: "Potato",
      icon: "fries",
      image: require("../../assets/images/fries.png"),
    },
    {
      name: "Veg",
      icon: "salad",
      image: require("../../assets/images/salad.png"),
    },
  ];

  const products = {
    Donuts: [
      {
        name: "Donuts",
        price: "$5.00",
        image: require("../../assets/images/donut.png"),
      },
    ],
    Burger: [
      {
        id: 1,
        name: "Bean Burger",
        price: "105",
        image: require("../../assets/images/beanburg.png"),
      },
      {
        id: 2,
        name: "Cheese Burger",
        price: "105",
        image: require("../../assets/images/cheeseburg.png"),
      },
      {
        id: 3,
        name: "Mixed Burger",
        price: "105",
        image: require("../../assets/images/mixedburg.png"),
      },
      {
        id: 4,
        name: "Vegetable Burger",
        price: "105",
        image: require("../../assets/images/vegburg.png"),
      },
      {
        id: 5,
        name: "Salmon Burger",
        price: "105",
        image: require("../../assets/images/salmburg.png"),
      },
      {
        id: 6,
        name: "Meat Burger",
        price: "105",
        image: require("../../assets/images/meatburg.png"),
      },
      {
        id: 7,
        name: "Meat Burger",
        price: "105",
        image: require("../../assets/images/meatburg.png"),
      },
      {
        id: 8,
        name: "Meat Burger",
        price: "105",
        image: require("../../assets/images/meatburg.png"),
      },
    ],
    "Ice Cream": [
      {
        name: "Ice Cream",
        price: "$15.00",
        image: require("../../assets/images/ice-cream.png"),
      },
    ],
    Chicken: [
      {
        name: "Chicken",
        price: "$20.00",
        image: require("../../assets/images/chicken.png"),
      },
    ],
    Drinks: [
      {
        name: "Drinks",
        price: "$10.00",
        image: require("../../assets/images/drink.png"),
      },
    ],
    Pizza: [
      {
        name: "Pizza",
        price: "$30.00",
        image: require("../../assets/images/pizza.png"),
      },
    ],
    Cakes: [
      {
        name: "Cakes",
        price: "$25.00",
        image: require("../../assets/images/cupcake.png"),
      },
    ],
    "Hot dog": [
      {
        name: "Hot dog",
        price: "$7.00",
        image: require("../../assets/images/hot-dog.png"),
      },
    ],
    Potato: [
      {
        name: "Potato",
        price: "$4.00",
        image: require("../../assets/images/fries.png"),
      },
    ],
    Veg: [
      {
        name: "Veg",
        price: "$8.00",
        image: require("../../assets/images/salad.png"),
      },
    ],
  };

  //add to cart
  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(cart.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <div className="flex gap-14">
      <div className="flex flex-col w-full gap-4">
        <div className="w-full">
          <DashboardStartsGrid
            categories={categories}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="pt-5">
          <PopularProducts
            products={products[selectedCategory]}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
      <div>
        <MyOrders cart={cart} 
        onIncreaseQty = {increaseQty}
        onDecreaseQty = {decreaseQty}
        />
      </div>
    </div>
  );
}

export default Dashboard;
