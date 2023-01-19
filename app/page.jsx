import React from 'react';

//  internal imports
import About from '@/src/components/About/About';
import Explore from '@/src/components/Explore/Explore';
import Feedback from '@/src/components/Feedback/Feedback';
import GetStarted from '@/src/components/GetStarted/GetStarted';
import Hero from '@/src/components/Hero/Hero';
import Insights from '@/src/components/Insights/Insights';
import WhatsNew from '@/src/components/WhatsNew/WhatsNew';
import World from '@/src/components/World/World';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
    </div>
  );
};

export default Home;
