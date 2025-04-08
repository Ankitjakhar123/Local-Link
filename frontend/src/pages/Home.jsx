import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
  return (
    <div className="w-full ">
      {/* Hero is full width already, including background */}
      <Hero />

      {/* Main sections wrapped in consistent container */}
      <div className="w-full  max-w-[1600px] ">
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <NewsletterBox />
      </div>
    </div>
  );
};

export default Home;
