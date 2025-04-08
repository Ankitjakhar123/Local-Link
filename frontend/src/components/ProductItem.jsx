import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="group bg-white/40 dark:bg-[#1e1e1e]/60 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-44 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Name */}
      <p className="text-base font-semibold text-gray-800 dark:text-white mb-1 font-outfit line-clamp-2">
        {name}
      </p>

      {/* Price */}
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 font-outfit">
        {currency}{price}
      </p>
    </Link>
  );
};

export default ProductItem;
