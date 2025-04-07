import React, { useState, useRef, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef();

  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const cartCount = getCartCount();

  return (
    <>
      {/* 🌐 Glass Navbar */}
      <div className="navbar">
        <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
          {/* 🔗 Logo */}
          <Link to="/">
            <img src={assets.logo} className="w-28 sm:w-36" alt="Logo" />
          </Link>

          {/* 🌐 Center Nav Links */}
          <ul className="hidden sm:flex gap-6 text-sm text-gray-800">
            <NavLink to="/" className="hover:text-indigo-600">Home</NavLink>
            <NavLink to="/collection" className="hover:text-indigo-600">Collections</NavLink>
            {/* <NavLink to="/men" className="hover:text-indigo-600">Men</NavLink>
            <NavLink to="/women" className="hover:text-indigo-600">Women</NavLink>
            <NavLink to="/kids" className="hover:text-indigo-600">Kids</NavLink> */}
            <NavLink to="/about" className="hover:text-indigo-600">About</NavLink>
            <NavLink to="/contact" className="hover:text-indigo-600">Contact</NavLink>
            <NavLink to="/track-order" className="hover:text-indigo-600">Track Order</NavLink>
          </ul>

          {/* 🎯 Right Side Icons */}
          <div className="flex items-center gap-4 sm:gap-5 relative">
            {/* 🔍 Search */}
            <img
              onClick={() => setShowSearch(true)}
              src={assets.search_icon}
              className="w-6 cursor-pointer hover:scale-110 transition-all"
              alt="Search"
            />

            {/* 🛒 Cart */}
            <Link to="/cart" className="relative">
              <img src={assets.cart_icon} className="w-6" alt="Cart" />
              {cartCount > 0 && (
                <p className="absolute right-[-6px] top-[-6px] w-5 h-5 text-center leading-5 bg-red-500 text-white rounded-full text-xs shadow-md">
                  {cartCount}
                </p>
              )}
            </Link>

            {/* 👤 Profile */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (profileRef.current) clearTimeout(profileRef.current);
                setIsProfileOpen(true);
              }}
              onMouseLeave={() => {
                profileRef.current = setTimeout(() => {
                  setIsProfileOpen(false);
                }, 300);
              }}
            >
              <img className="w-6 cursor-pointer hover:scale-105 transition-all" src={assets.profile_icon} alt="Profile" />
              {isProfileOpen && (
                <div className="absolute right-0 z-20 bg-white shadow-lg w-44 py-3 px-4 text-gray-700 rounded-xl mt-2 space-y-2 animate-fade-in-up">
                  {isLoggedIn ? (
                    <>
                      <NavLink to="/profile" className="block hover:text-indigo-600">👤 My Profile</NavLink>
                      <NavLink to="/orders" className="block hover:text-indigo-600">📦 Orders</NavLink>
                      <NavLink to="/admin" className="block hover:text-indigo-600">🛠️ Admin Panel</NavLink>
                      <button onClick={() => setIsLoggedIn(false)} className="text-left w-full hover:text-red-500">🚪 Logout</button>
                    </>
                  ) : (
                    <>
                      <NavLink to="/login" className="block hover:text-indigo-600">🔐 Login</NavLink>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* 🧃 Toasts */}
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              className="toast-below-navbar"
            />

            {/* 📱 Menu (Mobile) */}
            <img
              onClick={() => setMenuVisible(!menuVisible)}
              src={assets.menu_icon}
              className="w-6 cursor-pointer sm:hidden"
              alt="Menu"
            />
          </div>
        </div>
      </div>

      {/* 📱 Mobile Sidebar */}
      {menuVisible && (
        <div className="sm:hidden fixed top-16 left-0 w-full bg-white z-40 shadow-md p-4 space-y-4 animate-fade-in-up">
          <NavLink to="/" onClick={() => setMenuVisible(false)} className="block">Home</NavLink>
          <NavLink to="/collection" onClick={() => setMenuVisible(false)} className="block">Collections</NavLink>
          <NavLink to="/men" onClick={() => setMenuVisible(false)} className="block">Men</NavLink>
          <NavLink to="/women" onClick={() => setMenuVisible(false)} className="block">Women</NavLink>
          <NavLink to="/kids" onClick={() => setMenuVisible(false)} className="block">Kids</NavLink>
          <NavLink to="/about" onClick={() => setMenuVisible(false)} className="block">About</NavLink>
          <NavLink to="/contact" onClick={() => setMenuVisible(false)} className="block">Contact</NavLink>
          <NavLink to="/track-order" onClick={() => setMenuVisible(false)} className="block">Track Order</NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
