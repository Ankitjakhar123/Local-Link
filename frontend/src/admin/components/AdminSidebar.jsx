import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setOpen(false);
    }
  }, [location.pathname]);

  return (
    <>
      <button
        className="lg:hidden p-4 focus:outline-none fixed top-2 left-2 z-50 bg-white dark:bg-gray-800 shadow rounded-md"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div
        className={`   bg-white dark:bg-gray-900 border-r dark:border-gray-700 w-64 px-6 py-20 h-screen fixed top-16 left-0 z-400
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static`}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Admin Panel</h2>
        <ul className="space-y-8">
          <li>
            <Link to="/admin/add" className="block hover:text-blue-600 dark:hover:text-blue-400 text-gray-800 dark:text-gray-100">
              ➕ Add Product
            </Link>
          </li>
          <li>
            <Link to="/admin/remove" className="block hover:text-blue-600 dark:hover:text-blue-400 text-gray-800 dark:text-gray-100">
              ❌ Remove Product
            </Link>
          </li>
          <li>
            <Link to="/admin/orders" className="block hover:text-blue-600 dark:hover:text-blue-400 text-gray-800 dark:text-gray-100">
              📦 Orders
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
