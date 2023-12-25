import React from 'react';

const NavButton = ({ isActive, children }) => {
  const defaultClasses =
    'relative py-1 px-3 rounded-md text-[#333333] md:text-menuText cursor-pointer transition-all duration-300 ease-in-out';
  const activeClasses =
    'bg-transparent text-[#333333] md:text-primary ring-2 ring-inset ring-[#333333] md:ring-primary transition-all duration-300 ease-in-out';
  const inActiveClasses = 'nav-btn hover:text-primary';

  const buttonClasses = isActive
    ? `${defaultClasses} ${activeClasses}`
    : `${defaultClasses} ${inActiveClasses}`;

  return <div className={buttonClasses}>{children}</div>;
};

export default NavButton;
