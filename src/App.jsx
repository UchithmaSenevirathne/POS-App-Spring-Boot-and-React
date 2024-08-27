import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login/Login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Layout from "./components/pages/Dashboard/Layout";
import Register from "./components/pages/Register/Register";
import Orders from "./components/pages/Order/Orders";
import Profile from "./components/pages/Profile/Profile";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/layout" element={<Layout />}>
          {/* Nested routes under the Layout */}
          <Route index element={<Dashboard />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
  );
}

export default App;
