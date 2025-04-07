import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import { useSearchParams } from 'react-router-dom';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory) setCategory([urlCategory]);
  }, [searchParams]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        fpCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        fpCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        return;
    }
    setFilterProducts(fpCopy);
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  const allHomepageCategories = [
    'Electrical Tools',
    'Kitchen Essentials',
    'Garden Tools',
    'Cleaning Supplies',
    'Home Decor',
    'Bathroom Needs',
    'Lighting',
    'Furniture',
    'Storage Solutions',
    'Pet Supplies'
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 transition-all duration-500 px-4 sm:px-10">
      {/* Filter Option */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2 text-gray-900 dark:text-white">
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
          FILTERS
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 dark:border-gray-600 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} bg-white/40 dark:bg-white/10 backdrop-blur rounded-xl`}>
          <p className="mb-3 text-sm font-medium text-gray-800 dark:text-gray-300">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-300">
            {allHomepageCategories.map((item, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input className="w-3" type="checkbox" value={item} onChange={toggleCategory} /> {item}
              </label>
            ))}
          </div>
        </div>

        {/* Sub Category */}
        <div className={`border border-gray-300 dark:border-gray-600 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} bg-white/40 dark:bg-white/10 backdrop-blur rounded-xl`}>
          <p className="mb-3 text-sm font-medium text-gray-800 dark:text-gray-300">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-300">
            {['Topwear', 'Bottomwear', 'Winterwear'].map((item, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input className="w-3" type="checkbox" value={item} onChange={toggleSubCategory} /> {item}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'All'} text2={'COLLECTION'} />
          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 dark:border-gray-600 text-sm px-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-md">
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer group relative bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-xl hover:scale-105 transition-transform duration-300"
              onClick={() => window.location.href = `/product/${item._id}`}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                <img src={item.image[0]} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 min-h-[3rem] flex items-center justify-center text-center transition-colors duration-300 font-outfit">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-outfit">₹{item.price}</p>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-blue-400 group-hover:w-32 transition-all duration-300 blur-sm opacity-40"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
