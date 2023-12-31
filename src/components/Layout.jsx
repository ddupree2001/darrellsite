import React, { useState } from 'react';
import NavButton from './MenuButton';
import MenuBlocks from './MenuBlocks';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-screen-2xl mx-auto flex justify-end fixed w-full px-4 md:px-12 xl:px-16 2xl:px-20 z-50">
        <NavButton open={open} setOpen={setOpen} />
      </div>
      <MenuBlocks open={open} setOpen={setOpen} />
      <div className="w-full">{children}</div>
      <Footer open={open} />
    </div>
  );
};

export default Layout;
