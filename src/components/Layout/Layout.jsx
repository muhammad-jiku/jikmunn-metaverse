import React from 'react';

//  internal imports
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
