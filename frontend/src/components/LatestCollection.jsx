import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; // ✅ Import category images

// 💡 Category Data with images and filters
const categoryData = [
  {
    name: 'Electrical Tools',
    image: assets.electrical_tools, // 🛠️ Image: electrical_tools.png
    filter: 'electrical',
  },
  {
    name: 'Kitchen Essentials',
    image: assets.kitchen_essentials, // 🍳 Image: kitchen_essentials.png
    filter: 'kitchen',
  },
  {
    name: 'Garden Tools',
    image: assets.garden_tools, // 🌱 Image: garden_tools.png
    filter: 'garden',
  },
  {
    name: 'Cleaning Supplies',
    image: assets.cleaning_supplies, // 🧼 Image: cleaning_supplies.png
    filter: 'cleaning',
  },
  {
    name: 'Home Decor',
    image: assets.home_decor, // 🏡 Image: home_decor.png
    filter: 'decor',
  },
  {
    name: 'Bathroom Needs',
    image: assets.bathroom_needs, // 🚿 Image: bathroom_needs.png
    filter: 'bathroom',
  },
  {
    name: 'Lighting',
    image: assets.lighting, // 💡 Image: lighting.png
    filter: 'lighting',
  },
  {
    name: 'Furniture',
    image: assets.furniture, // 🪑 Image: furniture.png
    filter: 'furniture',
  },
  {
    name: 'Storage Solutions',
    image: assets.storage_solutions, // 📦 Image: storage_solutions.png
    filter: 'storage',
  },
  {
    name: 'Pet Supplies',
    image: assets.pet_supplies, // 🐶 Image: pet_supplies.png
    filter: 'pets',
  },
];

const LatestCollection = () => {
  const navigate = useNavigate();

  // 👉 Handle category click
  const handleClick = (filter) => {
    navigate(`/collection?category=${filter}`);
  };

  return (
    <div className="mt-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16 bg-gradient-to-br from-white to-blue-50">
      {/* 🔝 Header Section */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide mb-2">
          Explore by Categories
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Discover what you need, where you need it. Tap a category and find top picks instantly!
        </p>
      </div>

      {/* 🧱 Grid of Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-10">
        {categoryData.map((category, idx) => (
          <div
            key={idx}
            className="cursor-pointer group relative bg-white/20 backdrop-blur-lg rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-xl border border-white/30 hover:scale-105 transition-transform duration-300"
            onClick={() => handleClick(category.filter)}
          >
            {/* 🖼️ Category Image */}
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* 🏷️ Category Name (Fixed height to keep image aligned) */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-600 min-h-[3rem] flex items-center justify-center text-center">
              {category.name}
            </h3>

            {/* ✨ Glow Effect */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-blue-400 group-hover:w-32 transition-all duration-300 blur-sm opacity-40"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
