import React from "react";
import { InlineWidget } from "react-calendly";

const LetsTalk = () => {
  return (
    <div className="bg-[#D3D3D3]">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 text-[#333333] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex flex-col gap-y-5">
        <h1 className="text-center font-robotoCondensed font-bold">
          Schedule a Call
        </h1>
        <div>
          <InlineWidget url="https://calendly.com/dteat/60min" />
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
