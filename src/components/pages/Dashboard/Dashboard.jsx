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
        id: 1,
        name: "Almond Donuts",
        price: "5.00",
        image: require("../../assets/images/donut/almonddont.png"),
      },
      {
        id: 2,
        name: "Apple Cider Donuts",
        price: "5.00",
        image: require("../../assets/images/donut/appleciderdont.png"),
      },
      {
        id: 3,
        name: "Snow Donuts",
        price: "5.00",
        image: require("../../assets/images/donut/snowdont.png"),
      },
      {
        id: 4,
        name: "Glazed Donuts",
        price: "5.00",
        image: require("../../assets/images/donut/glazeddont.png"),
      }
    ],
    Burger: [
      {
        id: 5,
        name: "Bean Burger",
        price: "105",
        image: require("../../assets/images/beanburg.png"),
      },
      {
        id: 6,
        name: "Cheese Burger",
        price: "105",
        image: require("../../assets/images/cheeseburg.png"),
      },
      {
        id: 7,
        name: "Mixed Burger",
        price: "105",
        image: require("../../assets/images/mixedburg.png"),
      },
      {
        id: 8,
        name: "Vegetable Burger",
        price: "105",
        image: require("../../assets/images/vegburg.png"),
      },
      {
        id: 9,
        name: "Salmon Burger",
        price: "105",
        image: require("../../assets/images/salmburg.png"),
      },
      {
        id: 10,
        name: "Meat Burger",
        price: "105",
        image: require("../../assets/images/meatburg.png"),
      },
      {
        id: 11,
        name: "Lamb Burger",
        price: "105",
        image: require("../../assets/images/lambBurg.png"),
      },
      {
        id: 12,
        name: "Mushroom-Beef Burger",
        price: "105",
        image: require("../../assets/images/beefBurg.png"),
      },
    ],
    "Ice Cream": [
      {
        id: 13,
        name: "Chocolate Ice Cream",
        price: "15.00",
        image: require("../../assets/images/ice/chocolate.png"),
      },
      {
        id: 14,
        name: "Black Berry Ice Cream",
        price: "15.00",
        image: require("../../assets/images/ice/blckberry.png"),
      },
      {
        id: 15,
        name: "Vanilla Cream",
        price: "15.00",
        image: require("../../assets/images/ice/vanilla.png"),
      },
      {
        id: 16,
        name: "Mixed Ice Cream",
        price: "15.00",
        image: require("../../assets/images/ice/mixed.png"),
      },
    ],
    Chicken: [
      {
        id: 17,
        name: "Baked Chicken",
        price: "20.00",
        image: require("../../assets/images/chicken/backedchick.png"),
      },
      {
        id: 18,
        name: "Chicken BBQ",
        price: "20.00",
        image: require("../../assets/images/chicken/bbqchick.png"),
      },
      {
        id: 19,
        name: "Chop Salad with Grilled Chicken",
        price: "20.00",
        image: require("../../assets/images/chicken/chopsaladwithgrilledchick.png"),
      },
      {
        id: 20,
        name: "Crispy Chicken",
        price: "20.00",
        image: require("../../assets/images/chicken/crispychick.png"),
      },
    ],
    Drinks: [
      {
        name: "Drinks",
        price: "10.00",
        image: require("../../assets/images/drink.png"),
      },
    ],
    Pizza: [
      {
        name: "Pizza",
        price: "30.00",
        image: require("../../assets/images/pizza.png"),
      },
    ],
    Cakes: [
      {
        name: "Cakes",
        price: "25.00",
        image: require("../../assets/images/cupcake.png"),
      },
    ],
    "Hot dog": [
      {
        name: "Hot dog",
        price: "7.00",
        image: require("../../assets/images/hot-dog.png"),
      },
    ],
    Potato: [
      {
        name: "Potato",
        price: "4.00",
        image: require("../../assets/images/fries.png"),
      },
    ],
    Veg: [
      {
        name: "Veg",
        price: "8.00",
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

  // Remove from cart
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="flex h-full gap-10">
      <div className="flex flex-col w-full gap-4">
        <div className="w-full">
          <DashboardStartsGrid
            categories={categories}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="pt-1">
          <PopularProducts
            products={products[selectedCategory]}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
      <div className="pr-10">
        <MyOrders cart={cart} 
        onIncreaseQty = {increaseQty}
        onDecreaseQty = {decreaseQty}
        onRemoveFromCart = {handleRemoveFromCart}
        />
      </div>
    </div>
  );
}

export default Dashboard;
