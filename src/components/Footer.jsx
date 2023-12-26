import React from 'react';
import logo from '../assets/dteat_logo.svg';

const Footer = ({ open }) => {
  return (
    <div className="bg-black w-full">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20">
        <div className="flex items-center text-white">
          <div className="w-1/3">
            <img
              src={logo}
              alt="Darrell Teat Associates Logo"
              className="w-48"
            />
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <a href="mailto:darrell@dteatassociates.com">
              darrell@dteatassociates.com
            </a>
          </div>
          <div className="w-1/3 flex flex-col items-end">
            <p>Let's Chat!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
