import React from 'react';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex flex-col items-center justify-center py-10 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">About Local Link</h1>
        <p className="text-lg text-gray-600 text-center">
          Welcome to <span className="font-semibold text-blue-600">Local Link</span> – your one-stop solution for trusted home services and quality home essentials. Whether you're booking a plumber or shopping for cleaning supplies, Local Link brings everything together in one user-friendly platform.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Home Services</h2>
            <p className="text-gray-700">
              Find and book verified professionals for plumbing, electrical repairs, home cleaning, pest control, and more. Enjoy seamless scheduling and secure payment options.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Home Essentials</h2>
            <p className="text-gray-700">
              Explore our collection of everyday home maintenance items and cleaning products delivered directly to your doorstep.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li><span className="font-medium">Verified Experts:</span> Every service provider goes through strict background checks.</li>
            <li><span className="font-medium">Quality First:</span> We ensure top-quality products and services at competitive prices.</li>
            <li><span className="font-medium">Easy Experience:</span> Intuitive UI for browsing, booking, and tracking orders or services.</li>
            <li><span className="font-medium">Reliable Support:</span> Our team is here to help you every step of the way.</li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
            Get Started with Local Link
          </button>
        </div>
      </div>
      {/* <NewsletterBox /> */}
    </div>
  );
};


export default About;