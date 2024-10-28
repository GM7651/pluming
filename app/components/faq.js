import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            FAQ
          </h2>
        </div>
        <div className="max-w-3xl text-black mx-auto mt-8 space-y-6 md:mt-16">
          {[
            {
              question: "How quickly can you respond to a plumbing emergency?",
              answer: "We aim to respond to plumbing emergencies as quickly as possible. Our team is on standby 24/7, ready to assist you when you need us most.",
            },
            {
              question: "What is the pricing for common plumbing services?",
              answer: "Our pricing is transparent and competitive. We provide estimates for common services, such as leak repairs, drain cleaning, and water heater installation. Contact us for a detailed quote based on your needs.",
            },
            {
              question: "Do you offer guarantees or warranties on your services?",
              answer: "Yes, we stand behind our work with a satisfaction guarantee and offer warranties on certain services and parts. We believe in delivering reliable and long-lasting plumbing solutions.",
            },
            {
              question: "Can you help with both residential and commercial plumbing issues?",
              answer: "Absolutely! We handle both residential and commercial plumbing jobs. Whether it's a minor home repair or a large-scale commercial project, our team has the experience to manage it all.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => handleToggle(index)}
              >
                <span className="flex text-lg font-semibold text-black">{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?{" "}
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary">
            Contact our support
          </span>
        </p>
      </div>
    </section>
  );
};

export default Accordion;
