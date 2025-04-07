import React, { useState, useRef, useContext, useEffect } from "react";
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
  const [darkMode, setDarkMode] = useState(false);

  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const cartCount = getCartCount();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <nav className="backdrop-blur-lg bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 shadow-md fixed top-0 w-full z-50 transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src={assets.logo} className="w-28 sm:w-36" alt="Logo" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden sm:flex gap-8 text-sm font-medium items-center text-gray-800 dark:text-gray-100">
            {["Home", "Collections", "About", "Contact", "Track Order"].map((item, idx) => (
              <NavLink
                key={idx}
                to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) =>
                  `transition-all hover:text-blue-600 dark:hover:text-blue-400 ${isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : ""}`
                }
              >
                {item}
              </NavLink>
            ))}
          </ul>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4 sm:gap-5 relative">
            {/* Search Icon */}
            <img
              onClick={() => setShowSearch(true)}
              src={assets.search_icon}
              className="w-6 cursor-pointer hover:scale-110 transition-all"
              alt="Search"
            />

            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <img src={assets.cart_icon} className="w-6" alt="Cart" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
              title="Toggle Theme"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15a5 5 0 010-10 5 5 0 010 10z" />
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 01.894.553l.382.764a1 1 0 01-.106.96l-.678.849a1 1 0 00.15 1.337l.633.633a1 1 0 01.15 1.337l-.678.849a1 1 0 00.106.96l.382.764A1 1 0 0110 18a1 1 0 01-.894-.553l-.382-.764a1 1 0 01.106-.96l.678-.849a1 1 0 00-.15-1.337l-.633-.633a1 1 0 01-.15-1.337l.678-.849a1 1 0 00-.106-.96l-.382-.764A1 1 0 0110 2z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293a8 8 0 01-11.586 0 1 1 0 111.414-1.414 6 6 0 008.758 0 1 1 0 111.414 1.414z" />
                </svg>
              )}
            </button>

            {/* Profile Dropdown */}
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
              <img src={assets.profile_icon} className="w-6 cursor-pointer hover:scale-110 transition-all" alt="Profile" />
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 py-3 px-4 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-xl animate-fade-in-up text-sm z-40 space-y-2 text-gray-700 dark:text-gray-100">
                  {isLoggedIn ? (
                    <>
                      <NavLink to="/profile" className="block hover:text-indigo-600">👤 My Profile</NavLink>
                      <NavLink to="/orders" className="block hover:text-indigo-600">📦 Orders</NavLink>
                      <NavLink to="/admin" className="block hover:text-indigo-600">🛠️ Admin Panel</NavLink>
                      <button onClick={() => setIsLoggedIn(false)} className="block text-left w-full hover:text-red-500">🚪 Logout</button>
                    </>
                  ) : (
                    <NavLink to="/login" className="block hover:text-indigo-600">🔐 Login</NavLink>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Icon */}
            <img
              onClick={() => setMenuVisible(!menuVisible)}
              src={assets.menu_icon}
              className="w-6 sm:hidden cursor-pointer"
              alt="Menu"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {menuVisible && (
        <div className="sm:hidden fixed top-[60px] left-0 w-full bg-white dark:bg-gray-900 z-40 shadow-md px-6 py-5 space-y-4 animate-fade-in-up">
          {["Home", "Collections", "About", "Contact", "Track Order"].map((item, idx) => (
            <NavLink
              key={idx}
              to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMenuVisible(false)}
              className="block text-gray-800 dark:text-gray-100 text-base hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}

      {/* Toast */}
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
        className="z-[9999]"
      />
    </>
  );
};

export default Navbar;
