import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send logout request to backend
      await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true });

      // Clear localStorage/token if you use any
      localStorage.removeItem('token');

      // Navigate to login
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-3 max-w-screen-xl mx-auto">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="h-10 w-auto" />

        {/* Navigation links */}
        <div className="hidden sm:flex gap-6 text-sm font-medium text-gray-700">
          <a href="/" className="hover:text-black">Home</a>
          <a href="/products" className="hover:text-black">Products</a>
          <a href="/about" className="hover:text-black">About</a>
          <a href="/contact" className="hover:text-black">Contact</a>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-full text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
