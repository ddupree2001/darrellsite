import React from 'react';
import logo from '../assets/dteat_logo.svg';
import quote from '../assets/quote.svg';

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
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 flex items-end h-full">
          <p className="text-white text-base sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-3/5 font-semibold mb-4">
            OUR MISSION IS TO “HELP TAKE THE LID OFF YOUR LIFE &amp; YOUR
            CAREER”
          </p>
        </div>
      </div>
      <div className="bg-[#D3D3D3]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 text-[#333333] text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl flex flex-col gap-y-5">
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
      <div className="bg-[#EFEDE6]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 flex flex-col items-center gap-y-5 md:gap-y-8 lg:gap-y-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#65bd50]">
            READY TO WIN
          </h2>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-center text-[#333333]">
            “Leadership is Leadership.” Leaders from a broad range of industries
            have trusted us to help develop their leaders, as well as, provide
            strategic guidance to their organizations.
          </p>
        </div>
      </div>
      <div className="block lg:flex">
        <div className="bg-[#D3D3D3] w-full lg:w-1/2">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-12 lg:px-8 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 flex flex-col justify-center items-center h-full gap-y-5 text-[0.7rem] sm:text-lg lg:text-base xl:text-xl text-[#333333] text-center">
            <p>
              Scalable Strategy Development |{' '}
              <span className="font-bold">Productivity Enhancement</span>
            </p>
            <p>
              <span className="font-bold">Leadership Growth Strategy</span> |
              Culture Design &amp; Activation
            </p>
            <p>
              Management Execution |{' '}
              <span className="font-bold">Organizational Problem Solving</span>
            </p>
            <p className="font-bold text-sm sm:text-lg lg:text-base xl:text-xl">
              BE. DO. YOU.
            </p>
          </div>
        </div>
        <div className="bg-white w-full lg:w-1/2">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-12 lg:px-8 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 flex flex-col items-center gap-y-5 sm:gap-y-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#333333] text-center">
              HELPING OUR CLIENTS “TAKE THE LID OFF”
            </h2>
            <div className="flex gap-5 text-[#333333] text-xs sm:text-base lg:text-sm xl:text-base">
              <div className="w-1/2">
                <img
                  src={quote}
                  alt="quote"
                  className="float-left mr-2 sm:mr-4 mb-0.5 sm:mb-1 w-10 sm:w-20 lg:w-16 xl:w-20"
                />
                <p className="">
                  I have been fortunate to utilize the services of Darrell Teat
                  &amp; Associates. Darrell's business acumen and ability to
                  advise executives and business owners is beyond reproach. What
                  I appreciate the most is his character and sincere desire to
                  make a sizable impact on the business and the individual as a
                  whole. The ROI from Darrell Teat &amp; Associates has been
                  exponential. I highly recommend Darrell Teat &amp; Associates
                </p>
                <p className="text-[#808080] mt-2">
                  Christopher Johnson, Founder &amp; CEO, The Johnson Group
                </p>
              </div>
              <div className="w-1/2">
                <img
                  src={quote}
                  alt="quote"
                  className="float-left mr-2 sm:mr-4 mb-0.5 sm:mb-1 w-10 sm:w-20 lg:w-16 xl:w-20"
                />
                <p>
                  Our C Suite at Clutch works with Darrell Teat &amp; Associates
                  for regular executive coaching. Darrell’s energy and approach
                  to coaching breeds excitement and perspective that helps us
                  move faster, grow closer, and dream bigger. He’s a wonderful
                  culture fit for our team, a true asset! I’d recommend Darrell
                  to anyone trying to grow their organization or elevate a
                  positive culture.
                </p>
                <p className="text-[#808080] mt-2">
                  Rachel Zillner, C-Founder &amp; CEO, CLUTCH
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
