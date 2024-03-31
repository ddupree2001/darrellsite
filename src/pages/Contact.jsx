import React from "react";

const Contact = () => {
  return (
    <div className="bg-black">
      <div className="py-8 lg:py-16 px-4 md:px-12 xl:px-16 2xl:px-20 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-[#D3D3D3] sm:text-xl">
          Experiencing a challenge with your business strategy? Reach out to us
          - we're here to assist you every step of the way.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-black bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2 w-full">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-[#65bd50] focus:ring-[#65bd50]"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            classNameName="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#65bd50] sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
