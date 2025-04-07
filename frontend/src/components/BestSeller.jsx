// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';

// const BestSeller = () => {
//   const { products } = useContext(ShopContext);
//   const [displayProducts, setDisplayProducts] = useState([]);

//   useEffect(() => {
//     if (products && products.length > 0) {
//       setDisplayProducts(products.slice(0, 20));
//     }
//   }, [products]);

//   return (
//     <section className="relative px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 transition-all duration-500">
      
//       {/* Decorative Blur Circles (Same as LatestCollection) */}
//       <div className="absolute top-[-60px] left-[-40px] w-52 h-52 bg-blue-300 dark:bg-blue-600 opacity-20 blur-3xl rounded-full"></div>
//       <div className="absolute bottom-[-80px] right-[-40px] w-60 h-60 bg-indigo-200 dark:bg-indigo-500 opacity-20 blur-2xl rounded-full"></div>

//       {/* Header */}
//       <div className="relative z-10 text-center mb-14">
//         <h2 className="text-4xl font-extrabold tracking-wide mb-3 text-gray-900 dark:text-white">
//           Best Sellers of the Month
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
//           Explore the most popular picks loved by our customers – only the best for your home!
//         </p>
//       </div>

//       {/* Product Grid */}
//       <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-10">
//         {displayProducts.map((item, idx) => (
//           <div
//             key={idx}
//             className="cursor-pointer group relative bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-xl hover:scale-105 transition-transform duration-300"
//           >
//             {/* Product Image */}
//             <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//               />
//             </div>

//             {/* Product Name */}
//             <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 min-h-[3rem] flex items-center justify-center text-center transition-colors duration-300">
//               {item.name}
//             </h3>

//             {/* Price */}
//             <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">₹{item.price}</p>

//             {/* Glow Line (Same as Category Card) */}
//             <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-blue-400 group-hover:w-32 transition-all duration-300 blur-sm opacity-40"></div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BestSeller;
import React from 'react'

const BestSeller = () => {
  return (
    <div></div>
  )
}

export default BestSeller