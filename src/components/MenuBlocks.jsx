import React from 'react';

const MenuBlocks = ({ open }) => {
  return (
    <div className="fixed w-full h-screen flex flex-col sm:flex-row z-40">
      <div
        className={`${
          open
            ? ''
            : 'translate-x-full translate-y-0 sm:translate-x-0 sm:translate-y-full'
        } w-full sm:w-1/2 h-1/2 sm:h-full bg-gray-700 transition-all duration-1000 ease-in-out left_block`}
      ></div>
      <div
        className={`${
          open
            ? ''
            : '-translate-x-full translate-y-0 sm:translate-x-0 sm:-translate-y-full'
        } w-full sm:w-1/2 h-1/2 sm:h-full bg-gray-400 transition-all duration-1000 ease-in-out`}
      ></div>
    </div>
  );
};

export default MenuBlocks;
