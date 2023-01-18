import About from '@/src/components/About/About';
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
    </div>
    // </div>
  );
};

export default Home;
