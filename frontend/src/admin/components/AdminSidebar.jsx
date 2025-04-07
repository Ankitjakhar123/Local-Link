import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Automatically close sidebar on small screen ONLY when outside admin route
  React.useEffect(() => {
    if (window.innerWidth < 1024) {
      setOpen(false);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Hamburger - visible only on small screens */}
      <button
        className="lg:hidden p-4 focus:outline-none fixed top-2 left-2 z-50 bg-white shadow rounded-md"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`bg-white border-r w-64 p-4 h-screen fixed top-0 left-0 z-40 
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static`}
      >
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/admin/add" className="block hover:text-blue-600">
              ➕ Add Product
            </Link>
          </li>
          <li>
            <Link to="/admin/remove" className="block hover:text-blue-600">
              ❌ Remove Product
            </Link>
          </li>
          <li>
            <Link to="/admin/orders" className="block hover:text-blue-600">
              📦 Orders
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
