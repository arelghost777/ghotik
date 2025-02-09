import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <main className="mt-14 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;