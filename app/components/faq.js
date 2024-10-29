import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black dark:bg-black">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-white">FAQ's</h1>

    <hr className="my-6 border-gray-200 dark:border-gray-700" />

    <div>
      <div>
        <button
          onClick={() => handleToggle(0)}
          className="flex items-center w-full text-left focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
          <h1 className="mx-4 text-base sm:text-lg md:text-xl text-gray-200">What areas do you cover?</h1>
        </button>
        {activeIndex === 0 && (
          <div className="flex mt-4 md:mt-8">
            <span className="border border-blue-500 hidden sm:block"></span>
            <p className="max-w-lg sm:max-w-xl lg:max-w-2xl px-4 text-sm sm:text-base text-gray-400">
              We proudly serve all of New York, including New York City, Brooklyn, Queens, and the Bronx, as well as the entire state of New Jersey.
            </p>
          </div>
        )}
      </div>

      <hr className="my-6 border-gray-200 dark:border-gray-700" />

      <div>
        <button
          onClick={() => handleToggle(1)}
          className="flex items-center w-full text-left focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <h1 className="mx-4 text-base sm:text-lg md:text-xl text-gray-200">
            What are your emergency plumbing services?
          </h1>
        </button>
        {activeIndex === 1 && (
          <div className="flex mt-4 md:mt-8">
            <span className="border border-blue-500 hidden sm:block"></span>
            <p className="max-w-lg sm:max-w-xl lg:max-w-2xl px-4 text-sm sm:text-base text-gray-400">
              Our emergency services include leak repairs, pipe bursts, water heater issues, and severe drain blockages. We’re available 24/7 to handle urgent plumbing problems to prevent further damage.
            </p>
          </div>
        )}
      </div>

      <hr className="my-6 border-gray-200 dark:border-gray-700" />

      <div>
        <button
          onClick={() => handleToggle(2)}
          className="flex items-center w-full text-left focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <h1 className="mx-4 text-base sm:text-lg md:text-xl text-gray-200">
            How do I know if my drain is clogged or if there’s a bigger issue?
          </h1>
        </button>
        {activeIndex === 2 && (
          <div className="flex mt-4 md:mt-8">
            <span className="border border-blue-500 hidden sm:block"></span>
            <p className="max-w-lg sm:max-w-xl lg:max-w-2xl px-4 text-sm sm:text-base text-gray-400">
              Slow draining, gurgling sounds, and foul odors can indicate a clog, but recurring blockages may suggest a bigger issue. Our technicians can assess and resolve both minor clogs and major drainage problems.
            </p>
          </div>
        )}
      </div>

      <hr className="my-6 border-gray-200 dark:border-gray-700" />

      <div>
        <button
          onClick={() => handleToggle(3)}
          className="flex items-center w-full text-left focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <h1 className="mx-4 text-base sm:text-lg md:text-xl text-gray-200">
            Do you offer free estimates for plumbing services?
          </h1>
        </button>
        {activeIndex === 3 && (
          <div className="flex mt-4 md:mt-8">
            <span className="border border-blue-500 hidden sm:block"></span>
            <p className="max-w-lg sm:max-w-xl lg:max-w-2xl px-4 text-sm sm:text-base text-gray-400">
              Yes, we provide free estimates for all plumbing services. Our team will evaluate your needs and offer a transparent quote before any work begins.
            </p>
          </div>
        )}
      </div>

      <hr className="my-6 border-gray-200 dark:border-gray-700" />
    </div>
  </div>
</section>

  );
};

export default Accordion;
