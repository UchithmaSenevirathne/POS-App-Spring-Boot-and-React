import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login/Login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Layout from "./components/pages/Dashboard/Layout";
import Register from "./components/pages/Register/Register";
import Orders from "./components/pages/Order/Orders";
import Profile from "./components/pages/Profile/Profile";
import Items from "./components/pages/Items/Items";

function App() {
  const [users, setUsers] = useState([]); // Initialize users state here
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Login users={users} setCurrentUser={setCurrentUser}/>} />
      <Route path="/register" element={<Register users={users} setUsers={setUsers}/>} />
      <Route path="/layout" element={<Layout />}>
        {/* Nested routes under the Layout */}
        <Route index element={<Dashboard />} />
        <Route path="home" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="profile" element={<Profile />} />
        {/* Only accessible by Admin */}
        <Route path="items" element={<Items />} />
      </Route>
    </Routes>
  );
}

export default App;
