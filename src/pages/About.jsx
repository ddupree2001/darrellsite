import React from "react";
import headshot from "../assets/dteat_white.svg";

const About = () => {
  return (
    <div className="bg-[#EFEDE6]">
      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 gap-y-5">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-robotoCondensed font-bold text-[#65bd50] mb-5 md:mb-10">
          Executive Coach, Tested Executive, Corporate Board Member
        </h1>
        <div className="flex flex-col gap-y-3 md:gap-y-5 font-thin font-openSans text-sm sm:text-base md:text-xl text-left text-[#333333]">
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="w-full md:w-1/2 flex flex-col gap-y-3 md:gap-y-5">
              <p>
                Darrell Teat excels as a corporate growth leader that leverages
                organizational strengths to drive sustained profitability and
                innovation. He influences organizational change and efficacy by
                inspiring employees to become the best version of themselves,
                while codifying a unified vision that aligns corporate values
                and individual aspirations. Darrell accelerates revenue
                diversification efforts that embrace core competencies and are
                rooted in sound financial and data driven strategies. He
                believes people are a company’s greatest treasure and operates
                from the Simon Sinek quote, “Leadership is not about being in
                charge, it is about taking care of those in your charge”.
              </p>
              <p>
                Darrell currently serves as President &amp; Chief Executive
                Officer of Safety Center Incorporated, a California-based,
                social enterprise excelling in safety training and education. At
                Safety Center, Darrell leads one of the California’s largest and
                most effective safety training organization’s which specializes
                in workplace safety training and DUI education, and serves
                customers in California, Arizona, and Washington.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-full flex justify-center">
              <img src={headshot} alt="Darrell Teat" className="w-1/2" />
            </div>
          </div>

          <p>
            Previously, serving in the capacity of President, Darrell led the
            national expansion of the Nehemiah Corporation of America’s, single
            family – distressed asset acquisition strategy which purchased and
            sold more than 2,500 homes to low-to-moderate income families and
            donated 25 homes to United States Veterans and Active Duty Military
            Personnel. At Nehemiah, he also led the development of Township 9,
            an award winning, 65-acre urban infill project.
          </p>
          <p>
            Darrell is a recipient of the National Basketball Association (NBA)
            – Dream Big All-Star Award, American Diabetes Association – Father
            of the Year Award, Sacramento Metropolitan Chamber of Commerce – Al
            Geiger Award, and Sacramento Business Journal – 2024 Most Admired
            CEO’s Award
          </p>
          <p>
            He earned his Bachelor of Arts Degree in Communications from Santa
            Clara University, where he was Captain of the Men’s Basketball Team.
            Darrell also holds a Master’s in Business Administration from Drexel
            University, LeBow College of Business.
          </p>
          <p className="font-robotoCondensed font-semibold text-base sm:text-lg xl:text-4xl mt-5 md:mt-10">
            Current Board Engagements:
          </p>
          <p>
            Environmental Science Associates – Corporate Board Director; 100%
            employee-owned, national environmental consulting firm
          </p>
          <p>
            CXORE – Board Chairman; privately held business process outsourcing
            company
          </p>
          <p>
            Dignity Health – Advisory Board Member; multi-billion dollar health
            care system serving the Greater Sacramento Region (part of
            CommonSpirit Health)
          </p>
          <p>
            Sacramento Metropolitan Chamber of Commerce – Board Chairman;
            Northern California’s largest regional chamber of commerce
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
