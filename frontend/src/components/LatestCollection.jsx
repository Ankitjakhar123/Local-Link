import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const categoryData = [
  { name: 'Electrical Tools', image: assets.electrical_tools, filter: 'electrical' },
  { name: 'Kitchen Essentials', image: assets.kitchen_essentials, filter: 'kitchen' },
  { name: 'Garden Tools', image: assets.garden_tools, filter: 'garden' },
  { name: 'Cleaning Supplies', image: assets.cleaning_supplies, filter: 'cleaning' },
  { name: 'Home Decor', image: assets.home_decor, filter: 'decor' },
  { name: 'Bathroom Needs', image: assets.bathroom_needs, filter: 'bathroom' },
  { name: 'Lighting', image: assets.lighting, filter: 'lighting' },
  { name: 'Furniture', image: assets.furniture, filter: 'furniture' },
  { name: 'Storage Solutions', image: assets.storage_solutions, filter: 'storage' },
  { name: 'Pet Supplies', image: assets.pet_supplies, filter: 'pets' },
];

const LatestCollection = () => {
  const navigate = useNavigate();
  const { products } = useContext(ShopContext);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setDisplayProducts(products.slice(0, 20));
    }
  }, [products]);

  const handleCategoryClick = (filter) => {
    navigate(`/collection?category=${filter}`);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="relative px-1 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 transition-all duration-500">
      <div className="absolute top-[-60px] left-[-40px] w-52 h-52 bg-blue-300 dark:bg-blue-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-40px] w-60 h-60 bg-indigo-200 dark:bg-indigo-500 opacity-20 blur-2xl rounded-full"></div>

      {/* Categories Section */}
      <div className="relative z-10 text-center mb-14">
        <h2 className="text-4xl font-extrabold tracking-wide mb-3 text-gray-900 dark:text-white font-prata drop-shadow">
          Explore by Categories
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto font-outfit">
          Discover what you need, where you need it. Tap a category and find top picks instantly!
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-10 mb-20">
        {categoryData.map((category, idx) => (
          <div
            key={idx}
            className="cursor-pointer group relative bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-xl hover:scale-105 transition-transform duration-300"
            onClick={() => handleCategoryClick(category.filter)}
          >
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 min-h-[3rem] flex items-center justify-center text-center transition-colors duration-300 font-outfit">
              {category.name}
            </h3>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-blue-400 group-hover:w-32 transition-all duration-300 blur-sm opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Best Sellers Section */}
      <div className="relative z-10 text-center mb-14">
        <h2 className="text-4xl font-extrabold tracking-wide mb-3 text-gray-900 dark:text-white font-prata drop-shadow">
          Best Sellers of the Month
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto font-outfit">
          Explore the most popular picks loved by our customers – only the best for your home!
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-10 mb-20">
        {displayProducts.map((item, idx) => (
          <div
            key={idx}
            className="cursor-pointer group relative bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-xl hover:scale-105 transition-transform duration-300"
            onClick={() => handleProductClick(item._id)}
          >
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 min-h-[3rem] flex items-center justify-center text-center transition-colors duration-300 font-outfit">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-outfit">₹{item.price}</p>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-blue-400 group-hover:w-32 transition-all duration-300 blur-sm opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Our Policy Section (inline) */}
      <div className="relative z-10 mb-20">
        <div className="py-20 px-4 sm:px-10 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 rounded-3xl border border-white/20 dark:border-white/10 shadow-inner">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white font-prata drop-shadow">
              Our Commitment to You
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto font-outfit">
              Experience peace of mind with our transparent, quality-first approach to home essentials & services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {[{
              icon: assets.exchange_icon,
              title: 'Easy Returns',
              desc: '7-day hassle-free return policy.',
              color: 'from-pink-100 to-pink-50 dark:from-pink-800 dark:to-pink-700',
            }, {
              icon: assets.quality_icon,
              title: 'Premium Quality',
              desc: '100% authentic, high-quality products.',
              color: 'from-blue-100 to-blue-50 dark:from-blue-800 dark:to-blue-700',
            }, {
              icon: assets.support_img,
              title: '24/7 Support',
              desc: 'Always ready to assist you, anytime.',
              color: 'from-green-100 to-green-50 dark:from-green-800 dark:to-green-700',
            }].map((item, i) => (
              <div
                key={i}
                className={`relative w-full sm:w-72 bg-gradient-to-br ${item.color} p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group backdrop-blur-sm bg-opacity-30 border border-white/10 dark:border-white/5`}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-full shadow-inner flex items-center justify-center group-hover:scale-110 transition">
                  <img src={item.icon} alt={item.title} className="w-10 h-10" />
                </div>
                <div className="pt-12 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white font-outfit">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-outfit">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
