import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#d1f1ff] via-white to-[#ffe6ec] dark:from-gray-900 dark:to-gray-950 flex items-center justify-center py-12 px-6 mt-20">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden animate-fade-in">
        <div className="grid md:grid-cols-2 gap-10 p-10">

          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#0f172a] dark:text-white">💬 Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              Whether it's service queries or product info, we're here for you.
              Fill out the form and we'll get back to you shortly!
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-white" 
                  required 
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-white" 
                  required 
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?" 
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-white" 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              >
                ✉️ Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h2 className="text-3xl font-bold text-[#111827] dark:text-white">📍 Reach Us</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl text-blue-600 dark:text-blue-400">📌</span>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>123 Service Lane, Jaipur, Rajasthan 302001, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-green-600 dark:text-green-400">📞</span>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-red-600 dark:text-red-400">📧</span>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>support@locallink.in</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border-[3px] border-dashed border-pink-300 dark:border-pink-600 mt-6 shadow-xl">
              <iframe
                title="Local Link Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0993509250247!2d75.78727307532658!3d26.897681860577378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4e5ea2df0cf%3A0x9c5b43ef16b49769!2sJECRC%20University!5e0!3m2!1sen!2sin!4v1712200000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400 pt-4 text-center">
              © 2025 Local Link. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
