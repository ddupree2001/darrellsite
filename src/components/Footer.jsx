import React from "react";
import logo from "../assets/dteat_logo.svg";

const Footer = ({ open }) => {
  return (
    <div className="bg-[#EFEDE6] w-full">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 border-t border-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 items-center text-[#333333] w-full text-xs sm:text-sm md:text-base">
          <div className="flex flex-col items-center lg:items-start">
            <img
              src={logo}
              alt="Darrell Teat Associates Logo"
              className="w-48"
            />
          </div>
          <div className="flex flex-col items-center lg:h-[150px]">
            <p className="font-bold text-xl mb-2">Contact</p>
            <a
              href="mailto:darrell@dteatassociates.com"
              className="hover:underline hover:text-[#65bd50]"
            >
              darrell@dteatassociates.com
            </a>
            <a
              href="tel:9164704870"
              className="hover:underline hover:text-[#65bd50]"
            >
              (916) 470-4870
            </a>
            <p className="hover:underline hover:text-[#65bd50] cursor-pointer">
              Sacramento, CA
            </p>
          </div>
          <div className="flex flex-col items-center lg:h-[150px]">
            <p className="font-bold text-xl mb-2">Quick Links</p>
            <a href="/about" className="hover:underline hover:text-[#65bd50]">
              About
            </a>
            <a
              href="/testimonials"
              className="hover:underline hover:text-[#65bd50]"
            >
              Testimonials
            </a>
            <a
              href="/letstalk"
              className="hover:underline hover:text-[#65bd50]"
            >
              Let's Talk
            </a>
            <a href="/contact" className="hover:underline hover:text-[#65bd50]">
              Contact
            </a>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <button className="bg-[#65bd50] hover:bg-[#54ac41] text-white py-3 px-6 rounded-md">
              <a href="letstalk">Let's Chat!</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
