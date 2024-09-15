import React from "react";
import DashboardStartsGrid from "./DashboardStartsGrid";
import MyOrders from "./MyOrders";
import PopularProducts from "./PopularProducts";
import products from "../../../Product.json";
import { useState, useEffect } from "react";
import AdminDashStartGrid from "./AdminDashStartGrid";
import SalesChart from "./SalesChart";
import AdminPopularProducts from "./AdminPopularProducts";
import RecentOrders from "./RecentOrders";
import Calender from "./Calender";
import { useOutletContext } from "react-router-dom";
import axios from 'axios';

function Dashboard() {
  const { role } = useOutletContext();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  //cart
  const [cart, setCart] = useState([]);

   // Fetch categories from backend
   useEffect(() => {
    axios.get('http://localhost:8080/backend/category')
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  // Fetch products when a category is selected
  useEffect(() => {
    console.log("select cat id ", selectedCategory)
    if (selectedCategory) {
      axios.get(`http://localhost:8080/backend/category/items/${selectedCategory}`)
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error("Error fetching products for category:", error);
        });
    }
  }, [selectedCategory]);

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

  if (loading) {
    return <div>Loading categories...</div>;
  }

  // Increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove from cart
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="flex h-full gap-10">
      <div className="flex flex-col w-full gap-4">
      {role === 'ADM' ?  (
          <>
            <div className="w-full pr-10">
              <AdminDashStartGrid
                categories={categories}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
            <div className="flex gap-[30px]">
              <div className="flex-1">
                <SalesChart />
              </div>
              <div className="pr-10">
                <Calender />
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="flex-1">
                <RecentOrders />
              </div>
              <div className="pr-10">
                <AdminPopularProducts
                  products={products}
                  onAddToCart={handleAddToCart}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <DashboardStartsGrid
                categories={categories}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
            <div className="pt-1">
              <PopularProducts
                products={products}
                onAddToCart={handleAddToCart}
              />
            </div>
          </>
        )}
      </div>
      {role !== 'ADM' &&  (
        <div className="pr-10">
          <MyOrders
            cart={cart}
            onIncreaseQty={increaseQty}
            onDecreaseQty={decreaseQty}
            onRemoveFromCart={handleRemoveFromCart}
            onClearCart={clearCart}
          />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
