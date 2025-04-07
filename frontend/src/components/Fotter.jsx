import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';
import NewsletterBox from './NewsletterBox';
import OurPolicy from './OurPolicy';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-gradient-to-br from-gray-100 to-white dark:from-[#0f172a] dark:to-[#1e293b] text-gray-800 dark:text-white pt-10">
      {/* Show ONLY on Home Page */}
      {isHomePage && (
        <div className="px-5 md:px-20 mb-10 space-y-10">
          <NewsletterBox />
          <OurPolicy />
        </div>
      )}

      {/* Main Footer Grid */}
      <div className="px-5 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

        {/* Logo & About */}
        <div>
          <img src={assets.logo} className="mb-4 w-32" alt="Local Link Logo" />
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Your one-stop platform for <strong>trusted home services</strong> and <strong>home essentials</strong>. Shop and book with confidence!
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Company</h3>
          <ul className="text-sm space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/info/how-it-works" className="hover:text-blue-400">How It Works</Link></li>
            <li><Link to="/info/our-mission" className="hover:text-blue-400">Our Mission</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Support</h3>
          <ul className="text-sm space-y-2">
            <li><Link to="/info/faqs" className="hover:text-blue-400">FAQs</Link></li>
            <li><Link to="/info/refund-policy" className="hover:text-blue-400">Refund Policy</Link></li>
            <li><Link to="/info/terms" className="hover:text-blue-400">Terms & Conditions</Link></li>
            <li><Link to="/info/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>📞 +91-XXXXXXXXXX</li>
            <li>
              📧 <a href="mailto:support@locallink.com" className="hover:text-blue-400">support@locallink.com</a>
            </li>
            <li>📍 India</li>
          </ul>

          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} className="h-5 cursor-pointer hover:opacity-75" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.instagram_icon} className="h-5 cursor-pointer hover:opacity-75" alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} className="h-5 cursor-pointer hover:opacity-75" alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} className="h-5 cursor-pointer hover:opacity-75" alt="LinkedIn" />
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-5 text-center text-sm text-gray-600 dark:text-gray-400">
        © 2025 Local Link. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
