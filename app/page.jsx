import About from '@/src/components/About/About';
import Explore from '@/src/components/Explore/Explore';
import GetStarted from '@/src/components/GetStarted/GetStarted';
import Hero from '@/src/components/Hero/Hero';
import Navbar from '@/src/components/Navbar/Navbar';
import React from 'react';

const Home = () => {
  return (
    // <div className="bg-black overflow-hidden">
    //   <Navbar />
    <div>
      <Hero />
      <About />
      <Explore />
      <GetStarted />
    </div>
    // </div>
  );
};

export default Home;
