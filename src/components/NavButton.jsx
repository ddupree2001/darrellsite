import React, { useState } from 'react';

const NavButton = ({ open, setOpen }) => {
  return (
    <div
      className="menu_shape cursor-pointer flex flex-col py-3 px-3 gap-y-1 hover:opacity-30"
      onClick={() => setOpen(!open)}
    >
      <div
        className={`${
          open ? 'rotate-[15deg] translate-y-1.5' : 'rotate-0 translate-y-0'
        } bg-white h-0.5 rounded-full`}
      ></div>
      <div
        className={`${open ? 'bg-black' : 'bg-white'} h-0.5 rounded-full`}
      ></div>
      <div
        className={`${
          open ? '-rotate-[15deg] -translate-y-1.5' : 'rotate-0 translate-y-0'
        } bg-white h-0.5 rounded-full`}
      ></div>
      <p className={'text-white text-xs text-center mt-0.5'}>
        {open ? 'CLOSE' : 'MENU'}
      </p>
    </div>
  );
};

export default NavButton;
