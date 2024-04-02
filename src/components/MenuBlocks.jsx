import React from "react";
import NavLink from "./NavLink";
import logo from "../assets/dteat_logo.svg";

const MenuBlocks = ({ open, setOpen }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row z-40 font-openSans">
      <div
        className={`${
          open
            ? ""
            : "-translate-x-full translate-y-0 sm:translate-x-0 sm:translate-y-full"
        } fixed w-full sm:w-1/2 h-1/2 sm:h-screen transition-all duration-1000 ease-in-out left_block`}
      ></div>
      <div
        className={`${
          open
            ? "sm:translate-x-full translate-y-full sm:translate-y-0"
            : "translate-x-full translate-y-full sm:translate-x-full sm:-translate-y-full"
        } fixed w-full sm:w-1/2 h-1/2 sm:h-screen bg-[#D3D3D3] flex flex-col justify-between items-center px-4 md:px-12 xl:px-16 2xl:px-20 py-10 sm:py-20 transition-all duration-1000 ease-in-out`}
      >
        <img
          src={logo}
          alt="Darrell Teat Associates Logo"
          className="w-48 sm:w-64 md:w-80"
        />
        <p className="text-[#333333] text-center italic text-sm md:text-base lg:text-lg">
          My only goal is to help you win. When you win, those in your sphere of
          influence will benefit and be inspired by your journey to the best
          version of yourself. Let’s talk about what winning means to you. Don’t
          let your hesitation delay your elevation.
        </p>
        <p className="font-bold text-2xl lg:text-4xl">Inspire Not Impress</p>
        <div className="flex flex-col w-full gap-y-4">
          <div className="flex justify-between text-sm sm:text-base md:text-lg">
            <NavLink to="/" name="HOME" onClick={() => setOpen(!open)} />
            <NavLink to="/about" name="ABOUT" onClick={() => setOpen(!open)} />
            <NavLink
              to="/testimonials"
              name="TESTIMONIALS"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="flex justify-around">
            <NavLink
              to="/letstalk"
              name="LET'S TALK"
              onClick={() => setOpen(!open)}
            />
            <NavLink
              to="/contact"
              name="CONTACT"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBlocks;
