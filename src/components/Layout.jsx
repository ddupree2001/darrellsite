import React from 'react';
import NavButton from './NavButton';

const Layout = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-screen-2xl mx-auto flex justify-end fixed w-full px-4 md:px-12 xl:px-16 2xl:px-20">
        <NavButton />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
