import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      // Show first 20 products or all if less
      setDisplayProducts(products.slice(0, 20));
    }
  }, [products]);

  return (
    <div className="my-16 px-4 sm:px-10 lg:px-20 bg-gradient-to-b from-white to-gray-100 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Best Sellers of the Month
        </h2>
        <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
          Explore the most popular picks loved by our customers – only the best for your home!
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {displayProducts.map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-4 rounded-2xl shadow hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center"
          >
            {/* Product Image */}
            <div className="w-36 h-36 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="text-center mt-4">
              <h3 className="text-base font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">₹{item.price}</p>
            </div>

            {/* Optional Button */}
            <button className="mt-4 text-sm bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
