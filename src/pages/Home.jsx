import React from "react";
import logo from "../assets/dteat_logo.svg";
import quote from "../assets/quote.svg";
import smud from "../assets/smud.jpg";
import clutch from "../assets/clutch.png";
import safe_credit from "../assets/safe_credit.png";
import AHI from "../assets/AHI.jpg";
import rapid_brands from "../assets/rapid_brands.png";
import state_of_ca from "../assets/state_of_ca.jpg";
import metro from "../assets/metro.png";
import leap from "../assets/leap.jpg";
import cxore from "../assets/cxore.png";
import esa from "../assets/esa.png";
import nichols from "../assets/nichols.png";

const Home = () => {
  return (
    <div>
      <div className="bg-[#EFEDE6]">
        <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 gap-y-8">
          <img
            src={logo}
            alt="Darrell Teat Associates Logo"
            className="w-48 sm:w-64 md:w-80"
          />
        </div>
      </div>
      <div className="h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] headshot">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 flex items-center h-full">
          <div className="w-[70%] flex flex-col justify-center gap-y-4">
            <p className="text-white text-base sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] text-left font-robotoCondensed font-semibold mb-4">
              OUR MISSION IS TO <br />
              “TAKE THE LID OFF YOUR LIFE &amp; CAREER”
            </p>
            <div className="text-left">
              <button className="bg-[#65bd50] hover:bg-[#54ac41] text-white py-3 px-6 sm:px-10 rounded-md text-xs sm:text-sm md:text-base lg:text-xl cursor-pointer">
                <a href="/letstalk">Let's Chat!</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#D3D3D3]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 text-[#333333] font-openSans font-thin text-sm sm:text-base md:text-xl lg:text-2xl flex flex-col gap-y-5">
          <p>
            Activating your strengths to operate at peak performance in every
            area of your life takes focus, identification of your standards,
            stamina and making the necessary adjustments to elevate your impact
            in the areas most important to you.
          </p>
          <p>
            As an active CEO, Corporate Board Member and Executive Coach to
            entrepreneurs and senior- level management professionals, Darrell
            Teat blends more than 20 years of collegiate sports and business
            leadership experience to identify keys to your greatness and help
            you develop the strategies to become the best version of yourself.
          </p>
          <p>
            “Everyone was born to be Great. Some just Believe it to be true more
            than others”.
          </p>
          <p className="ml-10">- Darrell Teat</p>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 flex flex-col items-center gap-y-5 md:gap-y-8 lg:gap-y-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-robotoCondensed font-bold text-[#65bd50]">
            READY TO WIN
          </h2>
          <p className="font-thin font-openSans text-sm sm:text-base md:text-xl lg:text-2xl text-center text-[#333333]">
            “Leadership is Leadership.” Leaders from a broad range of industries
            have trusted us to help develop their leaders, as well as, provide
            strategic guidance to their organizations.
          </p>
          <div className="flex justify-center items-center gap-x-4 w-full">
            <div>
              <img
                src={smud}
                alt="SMUD"
                className="h-10 sm:h-10 md:h-20 lg:h-28 xl:h-40"
              />
            </div>
            <div>
              <img src={clutch} alt="Clutch" className="h-3 sm:h-6 xl:h-8" />
            </div>
            <div>
              <img
                src={safe_credit}
                alt="Safe Credit Union"
                className="h-10 md:h-20 lg:h-28 xl:h-40"
              />
            </div>
            <div>
              <img
                src={AHI}
                alt="AHI"
                className="h-8 sm:h-10 lg:h-16 xl:h-28"
              />
            </div>
            <div>
              <img
                src={rapid_brands}
                alt="Rapid Brands"
                className="h-5 sm:h-10 lg:h-10 xl:h-16"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-4 w-full">
            <div>
              <img
                src={state_of_ca}
                alt="State of California"
                className="h-8 sm:h-10 lg:h-16 xl:h-32"
              />
            </div>
            <div>
              <img src={metro} alt="Metro" className="h-10 lg:h-28 xl:h-40" />
            </div>
            <div>
              <img
                src={leap}
                alt="Leap"
                className="h-6 sm:h-10 lg:h-14 xl:h-20"
              />
            </div>
            <div>
              <img
                src={cxore}
                alt="Cxore"
                className="h-4 sm:h-6 lg:h-8 xl:h-12"
              />
            </div>
            <div>
              <img
                src={esa}
                alt="ESA"
                className="h-5 sm:h-10 lg:h-12 xl:h-16"
              />
            </div>
            <div>
              <img
                src={nichols}
                alt="Nichols"
                className="h-5 sm:h-10 lg:h-10 xl:h-14"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:flex">
        <div className="bg-[#D3D3D3] w-full lg:w-1/2">
          <div className="max-w-screen-md mx-auto px-4 md:px-12 lg:px-8 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 flex flex-col items-center h-full gap-y-5 font-robotoCondensed text-sm sm:text-2xl lg:text-lg xl:text-xl text-[#333333] text-center">
            <p className="text-[#65bd50] font-bold text-xl sm:text-2xl md:text-3xl">
              WHAT WE DO
            </p>
            <p>
              Scalable Strategy Development |{" "}
              <span className="font-bold">Productivity Enhancement</span>
            </p>
            <p>
              <span className="font-bold">Leadership Growth Strategy</span> |
              Culture Design &amp; Activation
            </p>
            <p>
              Management Execution |{" "}
              <span className="font-bold">Organizational Problem Solving</span>
            </p>
            <div className="text-left">
              <p className="font-bold">"I Can. I Will. I Must."</p>
              <p>- Eric Thomas</p>
            </div>
          </div>
        </div>
        <div className="bg-[#EFEDE6] w-full lg:w-1/2">
          <div className="max-w-screen-md mx-auto px-4 md:px-12 lg:px-8 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 flex flex-col items-center gap-y-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-robotoCondensed font-bold text-[#65bd50] text-center">
              HELPING OUR CLIENTS “TAKE THE LID OFF”
            </h2>
            <div className="flex flex-col gap-5 font-light font-openSans text-[#333333] text-xs sm:text-base lg:text-sm xl:text-base">
              <div className="w-full">
                <p className="">
                  "I have been fortunate to utilize the services of Darrell Teat
                  &amp; Associates. Darrell's business acumen and ability to
                  advise executives and business owners is beyond reproach. What
                  I appreciate the most is his character and sincere desire to
                  make a sizable impact on the business and the individual as a
                  whole. The ROI from Darrell Teat &amp; Associates has been
                  exponential. I highly recommend Darrell Teat &amp; Associates"
                </p>
                <p className="font-bold font-robotoCondensed text-[#808080] mt-2">
                  Christopher Johnson, Founder &amp; CEO <br />
                  The Johnson Group
                </p>
              </div>
              <div className="w-full">
                <p>
                  "Our C Suite at Clutch works with Darrell Teat &amp;
                  Associates for regular executive coaching. Darrell's energy
                  and approach to coaching breeds excitement and perspective
                  that helps us move faster, grow closer, and dream bigger. He's
                  a wonderful culture fit for our team, a true asset! I'd
                  recommend Darrell to anyone trying to grow their organization
                  or elevate a positive culture."
                </p>
                <p className="font-bold font-robotoCondensed text-[#808080] mt-2">
                  Rachel Zillner, C-Founder &amp; CEO <br />
                  CLUTCH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
