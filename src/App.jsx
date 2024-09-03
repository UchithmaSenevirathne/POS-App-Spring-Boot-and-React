import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login/Login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Layout from "./components/pages/Dashboard/Layout";
import Register from "./components/pages/Register/Register";
import Orders from "./components/pages/Order/Orders";
import Profile from "./components/pages/Profile/Profile";
import Items from "./components/pages/Items/Items";
import { UserProvider } from "./Lib/const/UserContext";
import WebLayout from "./components/pages/Website/WebLayout";

function App() {
  const [users, setUsers] = useState([]); // Initialize users state here
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<WebLayout/>}/>
        <Route
          path="/login"
          element={<Login users={users} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/register"
          element={<Register users={users} setUsers={setUsers} />}
        />

        {/* Protected Routes - Layout wraps around these routes */}
        <Route path="/layout/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="profile" element={<Profile />} />
          <Route path="items" element={<Items />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
