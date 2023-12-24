import React, { useState } from 'react';

const NavButton = ({ open, setOpen }) => {
  return (
    <div
      className="menu_shape cursor-pointer flex flex-col py-3 px-3 gap-y-1 group sm:hover:opacity-50"
      onClick={() => setOpen(!open)}
    >
      <div
        className={`${
          open ? 'rotate-[15deg] translate-y-1.5' : 'rotate-0 translate-y-0'
        } bg-white sm:group-hover:bg-[#65bd50]  h-0.5 rounded-full`}
      ></div>
      <div
        className={`${
          open ? 'bg-black' : 'bg-white sm:group-hover:bg-[#65bd50]'
        } h-0.5 rounded-full`}
      ></div>
      <div
        className={`${
          open ? '-rotate-[15deg] -translate-y-1.5' : 'rotate-0 translate-y-0'
        } bg-white sm:group-hover:bg-[#65bd50] h-0.5 rounded-full`}
      ></div>
      <p
        className={
          'text-white sm:group-hover:text-[#65bd50] text-xs text-center mt-0.5'
        }
      >
        {open ? 'CLOSE' : 'MENU'}
      </p>
    </div>
  );
};

export default NavButton;
