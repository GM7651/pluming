import React, { useEffect, useRef } from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Endrit Islami',
      text: "Someone referred me to Sinani heating and piping and I called him right away, to replace my shower body, Ardit from Sinani heating and piping responded right away and came to replace the shower body the same day. He was very professional, clean work and reasonable price. I will definitely call him for future plumbing work.",
    },
    {
      name: 'Dmitriy Smolyar',
      text: "We had a pinhole in a copper pipe in our shower. Sinani came to the rescue!! Awesome gentleman came assessed and gave a fantastic price. The repair was completed within 20 mins. Flawless. Thank you so much.",
    },
    {
      name: 'Fatjon Shalari',
      text: "I bought a new house and I called several plumbers to come do some work for me. Sinani was the first one that came by right away with a good price and very clean job. I will definitely recommend them to my friends and family.",
    },
  ];

  const sectionRef = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
          }
        });
      },
      { threshold: 0.2 }
    );

    const sectionElements = sectionRef.current.querySelectorAll('.review-card');
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-white px-4 py-12  sm:py-16 md:py-24">
<div className="w-full max-w-screen-xl bg-white mx-auto px-4 sm:px-6  lg:px-8">
      <h2 className="font-black text-black bg-white text-center text-2xl sm:text-3xl lg:text-4xl leading-tight uppercase max-w-2xl mx-auto mb-8 sm:mb-12">
        What Customers Are Saying
      </h2>
      <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-0 md:flex-row md:space-x-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-lg rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 text-black text-center w-full md:w-1/3 relative transform transition duration-200 ease-out opacity-0 sm:translate-x-4 md:translate-x-6 lg:translate-x-8 review-card"
            >
            <p className="font-bold uppercase text-base sm:text-lg md:text-xl">{review.name}</p>
            <p className="text-md sm:text-lg md:text-xl font-light italic text-gray-700 mt-2 sm:mt-4">
              {review.text}
            </p>
            
            {/* Positioning the logo at the bottom left */}
            <img
              src="/review.png"
              alt="Google Verified Review"
              className="w-16 h-10 sm:w-16 sm:h-10 shadow-lg absolute bottom-2 left-2"
            />
            
            <div className="flex items-center justify-center space-x-1 sm:space-x-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Reviews;
