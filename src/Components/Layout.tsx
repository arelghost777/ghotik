import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from '@/components/ui/sonner';

const Layout = ({ children }:{children: React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <Toaster richColors position="bottom-right"/>
      <main className="mt-14 min-h-100 w-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;