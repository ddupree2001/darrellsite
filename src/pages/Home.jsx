import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="bg-[#EFEDE6] h-[200px]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20">
          Home
        </div>
      </div>
      <div className="bg-gray-600 h-[600px]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20">
          Banner
        </div>
      </div>
      <div className="bg-gray-900 h-[600px]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20">
          Mission
        </div>
      </div>
      <div className="bg-[#EFEDE6] h-[600px]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20">
          Courses
        </div>
      </div>
      <div className="flex h-[500px]">
        <div className="bg-gray-300 w-1/2 h-full">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-12 xl:px-16 2xl:px-20">
            Testimonials
          </div>
        </div>
        <div className="bg-white w-1/2 h-full">
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
