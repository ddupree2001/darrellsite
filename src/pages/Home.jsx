import React from 'react';
import logo from '../assets/dteat_logo.svg';

const Home = () => {
  return (
    <div>
      <div className="bg-[#EFEDE6]">
        <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 gap-y-8">
          <img
            src={logo}
            alt="Darrell Teat Associates Logo"
            className="w-48 sm:w-80"
          />
        </div>
      </div>
      <div className="h-[200px] xl:h-[700px] headshot">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 flex items-end h-full">
          <p className="text-white text-base xl:text-6xl text-center w-3/5 font-semibold mb-4">
            OUR MISSION IS TO “HELP TAKE THE LID OFF YOUR LIFE &amp; YOUR
            CAREER”
          </p>
        </div>
      </div>
      <div className="bg-[#D3D3D3]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 text-[#333333] text-sm xl:text-3xl flex flex-col gap-y-5">
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
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 flex flex-col items-center gap-y-5 sm:gap-y-10">
          <h2 className="text-xl sm:text-5xl font-bold text-[#65bd50]">
            Ready To Win
          </h2>
          <p className="text-sm xl:text-3xl text-center text-[#333333]">
            “Leadership is Leadership.” Leaders from a broad range of industries
            have trusted us to help develop their leaders, as well as, provide
            strategic guidance to their organizations.
          </p>
        </div>
      </div>
      <div className="block md:flex">
        <div className="bg-gray-300 w-full md:w-1/2 h-full">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 flex flex-col justify-center items-center h-full gap-y-5 text-[0.625rem] sm:text-xl">
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
            <p className="font-bold">BE. DO. YOU.</p>
          </div>
        </div>
        <div className="bg-white w-full md:w-1/2 h-full">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20">
            Contact
          </div>
        </div>
      </div>
      <div className="bg-gray-900 h-[300px]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20">
          Footer
        </div>
      </div>
    </div>
  );
};

export default Home;
