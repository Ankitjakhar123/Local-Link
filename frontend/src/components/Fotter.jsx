import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className='bg-gray-100 text-gray-800 py-10 px-5 md:px-20 mx-4'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

        {/* Logo & About */}
        <div>
          <img src={assets.logo} className='mb-4 w-32' alt="Local Link Logo" />
          <p className='text-sm leading-relaxed'>
            Your one-stop platform for <strong>trusted home services</strong> and <strong>home essentials</strong>. Shop and book with confidence!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold text-black mb-3'>Company</h3>
          <ul className='text-sm space-y-2'>
            <li className='hover:text-gray-600 cursor-pointer'>Home</li>
            <li className='hover:text-gray-600 cursor-pointer'>About Us</li>
            <li className='hover:text-gray-600 cursor-pointer'>How It Works</li>
            <li className='hover:text-gray-600 cursor-pointer'>Our Mission</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className='text-lg font-semibold text-black mb-3'>Support</h3>
          <ul className='text-sm space-y-2'>
            <li className='hover:text-gray-600 cursor-pointer'>FAQs</li>
            <li className='hover:text-gray-600 cursor-pointer'>Refund Policy</li>
            <li className='hover:text-gray-600 cursor-pointer'>Terms & Conditions</li>
            <li className='hover:text-gray-600 cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div>
          <h3 className='text-lg font-semibold text-black mb-3'>Contact Us</h3>
          <ul className='text-sm space-y-2'>
            <li>📞 +91-XXXXXXXXXX</li>
            <li>📧 support@locallink.com</li>
            <li>📍 [Your Business Location]</li>
          </ul>

          {/* Social Media Links */}
          <div className='flex space-x-4 mt-4'>
            <img src={assets.facebook_icon} className="h-5 cursor-pointer hover:opacity-75" alt="Facebook" />
            <img src={assets.instagram_icon} className="h-5 cursor-pointer hover:opacity-75" alt="Instagram" />
            <img src={assets.twitter_icon} className="h-5 cursor-pointer hover:opacity-75" alt="Twitter" />
            <img src={assets.linkedin_icon} className="h-5 cursor-pointer hover:opacity-75" alt="LinkedIn" />
          </div>
        </div>

      </div>

      {/* Divider & Copyright */}
      <div className='mt-8 border-t border-gray-300 pt-5 text-center text-sm'>
        © 2025 Local Link. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
