
"use client"; // Add this at the very top

import Image from "next/image";
import { useEffect, useState, useRef } from 'react';
import Nav from "./components/nav";
import Footer from "./components/footer";
import Accordion from './components/faq'; // Adjust the path if needed
import Contact from "./components/contact";
import Reviews from './components/reviews';
import ServiceAreas from "./components/ServiceAreas";






export default function Home() {

  const [isTextVisible, setIsTextVisible] = useState(false);
  const textSectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = textSectionRef.current; // Create a stable reference

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the stable reference
      }
    }
    };
  }, []);
  return (
    <div className="bg-gray-100 overflow-x-hidden">
            <Nav /> 

  <section className="dark:bg-black dark:text-gray-800">
  <div className="container flex flex-col justify-center px-4 py-12 mx-auto lg:flex-row lg:justify-between lg:items-center lg:space-x-6 lg:py-24">
    {/* Video Section */}
    <div className="flex items-center justify-center p-4 mt-8 lg:mt-0 h-52 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] w-full lg:w-1/2">
     <video
      src="/plumingV1.mp4"
      className="object-contain w-full h-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
      autoPlay
      muted
      playsInline
      loop
    />
</div>

    {/* Text and Buttons Section */}
    <div className="flex flex-col justify-center p-6 text-center lg:max-w-md xl:max-w-lg lg:text-left lg:w-1/2">
      {/* Title */}
      <div className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mb-4">
      <span className="dark:text-red-700 text-center block lg:inline md:ml-24 lg:ml-24">Sinani</span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white inline lg:block">
          Piping & Heating
        </h1>
      </div>
      {/* Subtitle */}
      <p className="mt-6 text-white text-base sm:text-lg md:text-xl sm:mb-12">
        Your Trusted Solution for All Plumbing Needs
      </p>

      {/* Buttons */}
      <div className="flex flex-col items-center justify-center gap-4 mt-6 md:flex-row">
        <a
          className="inline-block text-center w-full md:w-auto min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-lg bg-gradient-to-r from-red-600 to-red-500 hover:bg-gradient-to-b hover:shadow-2xl"
          href=""
        >
          Book Appointment
        </a>
        <a
          className="inline-block w-full text-center md:w-auto min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 rounded-md shadow-lg hover:bg-gray-900 dark:bg-white dark:text-gray-800 dark:shadow-neutral-700 hover:text-white"
          href=""
        >
          Search Examples
        </a>
      </div>
    </div>
  </div>
            </section>



            <section
        ref={textSectionRef}
        className="overflow-hidden bg-white py-8 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2
                  className={`text-base font-semibold leading-7 text-red-600 transition-opacity duration-500 ${
                    isTextVisible ? "animate-smoothSlideIn opacity-100" : "opacity-0"
                  }`}
                >
                  Local, Fast & Reliable
                </h2>
                <p
                  className={`mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl transition-opacity duration-500 ${
                    isTextVisible ? "animate-smoothSlideIn opacity-100" : "opacity-0"
                  }`}
                  style={{ animationDelay: "0.2s" }}
                >
                  Why Us?
                </p>
                <p
                  className={`mt-6 text-lg leading-8 text-gray-600 transition-opacity duration-500 ${
                    isTextVisible ? "animate-smoothSlideIn opacity-100" : "opacity-0"
                  }`}
                  style={{ animationDelay: "0.4s" }}
                >
                  Swift Solutions, Trusted Plumbing – Ready When You Need Us At
                  Any Time Of Day!
                </p>

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {[
                    {
                      title: "Family-Owned & Trusted",
                      text: "With over 15 years of family ownership, we bring unmatched dedication and personalized service to every job.",
                    },
                    {
                      title: "Fully Insured for Your Peace of Mind",
                      text: "Rest assured, our services are fully insured, giving you confidence in safe, reliable plumbing solutions.",
                    },
                    {
                      title: "Rapid Response, Anytime",
                      text: "We know plumbing emergencies can't wait; our team is ready for fast, efficient service when you need it most.",
                    },
                    {
                      title: "Skilled, Certified Professionals",
                      text: "Our highly trained plumbers bring expertise and professionalism, ensuring top-quality work every time.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`relative pl-9 transition-opacity duration-500 ${
                        isTextVisible ? "animate-smoothSlideIn opacity-100" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                    >
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-red-600"
                        >
                          <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z" />
                          <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z" />
                          <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z" />
                        </svg>
                        {item.title}
                      </dt>
                      <dd className="inline"> – {item.text}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
    src="/img1.png"
    alt="Product screenshot"
  className="w-full animate-slideIn max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl rounded-xl shadow-xl ring-1 ring-gray-400/10"
  width={2432}
  height={1442}
  priority
/>
          </div>
        </div>
      </section>

    <div className="bg-gray-100 mt-18 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Services We Offer</h2>
        <p className="text-red-600 mt-4   text-lg">We’re committed to delivering top-quality service and craftsmanship to meet all your needs with reliability and care</p>
        

      </div>
      

      


      <div className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
          <Image
  src="/img2.png"
  alt="Moller's Logo"
  className="w-24 h-auto sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 shadow-lg"
  width={96} // Set a reasonable width value based on your design
  height={96} // Set a reasonable height value based on your design
  priority // Optional if you want to preload this image
/>     
            </div>
          <h3 className="text-xl font-semibold text-gray-900">Plumbing Services</h3>
          <p className="text-gray-700 mt-4">
          At Sinani Piping and Heating, we provide reliable, affordable plumbing. From leaks to repairs, our friendly pros handle it all. Call us today and let’s fix those plumbing issues!          </p>
        </div>
      
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
          <Image
  src="/img1.png"
  alt="Moller's Logo"
  className="w-24 h-auto sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 shadow-lg"
  width={96} // Set a reasonable width value based on your design
  height={96} // Set a reasonable height value based on your design
  priority // Optional if you want to preload this image
/>   
        </div>
          <h3 className="text-xl font-semibold text-gray-900">Faucet Repairs</h3>
          <p className="text-gray-700 mt-4">
            Do you have a dripping faucet? Don’t worry, we are here to help! A dripping faucet is simply a waste of water and money.
          </p>
        </div>
      
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
          <Image
  src="/img3.png"
  alt="Moller's Logo"
  className="w-24 h-auto sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 shadow-lg"
  width={96} // Set a reasonable width value based on your design
  height={96} // Set a reasonable height value based on your design
  priority // Optional if you want to preload this image
/>      </div>
          <h3 className="text-xl font-semibold text-gray-900">Water Heater</h3>
          <p className="text-gray-700 mt-4">
            Are you constantly running out of hot water while taking a shower? Sinani Piping & Heating can make sure you never get this problem again.
          </p>
        </div>
      
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
          <Image
  src="/img4.png"
  alt="Moller's Logo"
  className="w-24 h-auto sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 shadow-lg"
  width={96} // Set a reasonable width value based on your design
  height={96} // Set a reasonable height value based on your design
  priority // Optional if you want to preload this image
/>    
        </div>
          <h3 className="text-xl font-semibold text-gray-900">Drain Cleaning</h3>
          <p className="text-gray-700 mt-4">
            If you are noticing your drain starting to back up, it may be clogged. Several factors can cause a drain to be clogged.
          </p>
        </div>
      
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
          <Image
  src="/img5.png"
  alt="Moller's Logo"
  className="w-24 h-auto sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 shadow-lg"
  width={96} // Set a reasonable width value based on your design
  height={96} // Set a reasonable height value based on your design
  priority // Optional if you want to preload this image
/>     
        </div>
          <h3 className="text-xl font-semibold text-gray-900">Emergency Plumber</h3>
          <p className="text-gray-700 mt-4">
          In a plumbing emergency, every second counts. Don’t waste time searching—call us for fast, 
          reliable service you can trust, delivered with quality and care to get your home back to normal.
          </p>
        </div>
      
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
          <Image
  src="/img7.png"
  alt="Moller's Logo"
  className="w-24 h-auto sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 shadow-lg"
  width={96} // Set a reasonable width value based on your design
  height={96} // Set a reasonable height value based on your design
  priority // Optional if you want to preload this image
/>     
            </div>
          <h3 className="text-xl font-semibold text-gray-900">Sink Installation</h3>
          <p className="text-gray-700 mt-4">
            The sink is a central feature of kitchens and bathrooms and is susceptible to getting clogged drains. Trust us to handle it professionally.
          </p>
        </div>
        
      </div>
    </div>
    <Contact />
    <Reviews />

      <Accordion />
      <ServiceAreas />

    <Footer />


    </div>
  );
}
