import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";

// Components
import Navbar from "./components/Navbar";
import Fotter from "./components/Fotter";
import SearchBar from "./components/SearchBar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-[Outfit] overflow-x-hidden">
      {/* ✅ Toast Notification container */}
      {/* <ToastContainer position="top-right" autoClose={300000} hideProgressBar={false} newestOnTop={true} /> */}
      <ToastContainer
        position="top-right" // 👈 aligns right side
        autoClose={2000}
        style={{ marginTop: "70px" }} // 👈 pushes it below navbar
      />

      {/* ✅ Fixed Navbar */}
      <Navbar />

      {/* Optional Search Bar */}
      <SearchBar />

      {/* ✅ Add padding top to avoid content hiding behind fixed navbar */}
      <main className="flex-1 w-full pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>

      <Fotter />
    </div>
  );
};

export default App;
