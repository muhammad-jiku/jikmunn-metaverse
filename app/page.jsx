import About from '@/src/components/About/About';
import Explore from '@/src/components/Explore/Explore';
import Feedback from '@/src/components/Feedback/Feedback';
import GetStarted from '@/src/components/GetStarted/GetStarted';
import Hero from '@/src/components/Hero/Hero';
import Insights from '@/src/components/Insights/Insights';
import Navbar from '@/src/components/Navbar/Navbar';
import WhatsNew from '@/src/components/WhatsNew/WhatsNew';
import World from '@/src/components/World/World';
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
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
    </div>
    // </div>
  );
};

export default Home;
