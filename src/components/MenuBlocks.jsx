import React from 'react';

const MenuBlocks = ({ open }) => {
  return (
    <div
      className={`${
        open ? '' : ''
      } fixed w-full h-screen flex flex-col md:flex-row`}
    >
      <div
        className={`${
          open
            ? ''
            : 'translate-x-full translate-y-0 md:translate-x-0 md:translate-y-full'
        } w-full md:w-1/2 h-1/2 md:h-full bg-gray-700 transition-all duration-1000 ease-in-out`}
      ></div>
      <div
        className={`${
          open
            ? ''
            : '-translate-x-full translate-y-0 md:translate-x-0 md:-translate-y-full'
        } w-full md:w-1/2 h-1/2 md:h-full bg-gray-400 transition-all duration-1000 ease-in-out`}
      ></div>
    </div>
  );
};

export default MenuBlocks;
