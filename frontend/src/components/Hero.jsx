import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]
      bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 transition-all duration-500">

      {/* Decorative Blur Circles */}
      <div className="absolute top-[-100px] left-[-80px] w-60 h-60 md:w-80 md:h-80 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-60px] w-56 h-56 md:w-72 md:h-72 bg-purple-400 opacity-20 blur-2xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">

        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-blue-600 dark:text-blue-400 font-medium text-sm uppercase tracking-widest">
            One Stop for All Home Needs
          </h2>

          <h1 className="text-gray-900 dark:text-white font-bold text-3xl sm:text-4xl md:text-[2.7rem] leading-snug md:leading-[3.2rem]">
            <span className="text-blue-600 dark:text-indigo-400">Book Trusted Services</span> &<br className="hidden sm:block" />
            <span className="text-blue-500 dark:text-purple-400"> Shop Daily Essentials</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            Experience seamless home solutions & fast delivery.  
            <span className="font-semibold text-blue-600 dark:text-indigo-400"> Book. Shop. Relax! </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-5">
            <a
              href="#services"
              className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              📌 Book a Service
            </a>
            <a
              href="#shop"
              className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 hover:from-gray-900 hover:to-black text-white px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🛍 Shop Essentials
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
          <img
            src={assets.hero_img}
            alt="Local Link Services & Shop"
            className="w-[85%] max-w-sm md:max-w-md object-contain drop-shadow-2xl rounded-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
