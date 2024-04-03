import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20 py-10 md:py-16 2xl:py-20 gap-y-5">
        <h1 className="text-center font-robotoCondensed font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 md:mb-10">
          What Our Clients Say
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-light font-openSans text-[#333333] text-sm md:text-base">
          <div>
            <p>
              "Our C Suite at Clutch works with Darrell Teat &amp; Associates
              for regular executive coaching. Darrell's energy and approach to
              coaching breeds excitement and perspective that helps us move
              faster, grow closer, and dream bigger. He's a wonderful culture
              fit for our team, a true asset! I'd recommend Darrell to anyone
              trying to grow their organization or elevate a positive culture."
            </p>
            <p className="font-bold font-robotoCondensed text-[#808080] mt-2">
              Rachel Zillner, C-Founder &amp; CEO <br />
              CLUTCH
            </p>
          </div>
          <div>
            <p>
              "Darrell Teat is the sort of gentleman you want to tell everyone
              about except your competition. He is a business's best kept
              secret."
            </p>
            <p className="font-bold font-robotoCondensed text-[#808080] mt-2">
              Jason Newell, COO <br />
              Systems2Solutions
            </p>
          </div>
          <div>
            <p>
              "Darrell Teat&#39;s unique leadership development approach
              encourages creativity and expansion, urging clients to push beyond
              their comfort zones and conventional thinking. His coaching
              techniques help discover one&#39;s leadership style and make an
              impact. The lessons learned include the importance of thinking
              outside the box, embracing challenges, and seeking opportunities
              for growth. Darrell&#39;s coaching requires courage, commitment,
              and an open mind, but the rewards are immense."
            </p>
            <p className="font-bold font-robotoCondensed text-[#808080] mt-2">
              William Walker III, MSL <br />
              State of California, Civil Servant
            </p>
          </div>
          <div>
            <p className="">
              "I have been fortunate to utilize the services of Darrell Teat
              &amp; Associates. Darrell's business acumen and ability to advise
              executives and business owners is beyond reproach. What I
              appreciate the most is his character and sincere desire to make a
              sizable impact on the business and the individual as a whole. The
              ROI from Darrell Teat &amp; Associates has been exponential. I
              highly recommend Darrell Teat &amp; Associates"
            </p>
            <p className="font-bold font-robotoCondensed text-[#808080] mt-2">
              Christopher Johnson, Founder &amp; CEO <br />
              The Johnson Group
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
