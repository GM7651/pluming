"use client"; // Add this at the very top

import Image from "next/image";
import { useEffect, useState, useRef } from 'react';
import Nav from "./components/nav";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Reviews from './components/reviews';
import ServiceAreas from "./components/ServiceAreas";

export default function Home() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const textSectionRef = useRef(null);

  const videos = ["/vid1.mp4", "/vid2.mp4", "/vid3.mp4", "/vid4.mp4"];

  // Video slideshow interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [videos.length]);

  // Intersection Observer for text visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (textSectionRef.current) {
      observer.observe(textSectionRef.current);
    }

    return () => {
      if (textSectionRef.current) {
        observer.unobserve(textSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <Nav /> 

      <section className="dark:bg-black dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-12 mx-auto lg:flex-row lg:justify-between lg:items-center lg:space-x-6 lg:py-24">
          <div className="flex items-center justify-center p-4 mt-8 lg:mt-0 h-52 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] w-full lg:w-1/2">
            <video
              src="/plumingV1.mp4"
              className="object-contain w-full h-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
              autoPlay
              muted
              playsInline
            />
          </div>

          <div className="flex flex-col justify-center p-6 text-center lg:max-w-md xl:max-w-lg lg:text-left lg:w-1/2">
            <div className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mb-4">
              <span className="dark:text-red-700 text-center block lg:inline md:ml-24 lg:ml-24">Sinani</span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white inline lg:block">
                Piping & Heating
              </h1>
            </div>
            <p className="mt-6 text-white text-base sm:text-lg md:text-xl sm:mb-12">
              Your Trusted Solution for All Plumbing Needs
            </p>

            <div className="flex flex-col items-center justify-center gap-4 mt-6 md:flex-row">
              <a
                className="inline-block text-center w-full md:w-auto min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-lg bg-gradient-to-r from-red-600 to-red-500 hover:bg-gradient-to-b hover:shadow-2xl"
                href="#"
              >
                Book Appointment
              </a>
              <a
                className="inline-block w-full text-center md:w-auto min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 rounded-md shadow-lg hover:bg-gray-900 dark:bg-white dark:text-gray-800 dark:shadow-neutral-700 hover:text-white"
                href="#"
              >
                Search Examples
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-6 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* "Why Us?" Section */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-600">
                Local, Fast & Reliable
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Us?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Swift Solutions, Trusted Plumbing – Ready When You Need Us At Any Time Of Day!
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600">
                {[
                  { title: "Family-Owned & Trusted", text: "With over 15 years of family ownership, we bring unmatched dedication and personalized service to every job." },
                  { title: "Fully Insured for Your Peace of Mind", text: "Rest assured, our services are fully insured, giving you confidence in safe, reliable plumbing solutions." },
                  { title: "Rapid Response, Anytime", text: "We know plumbing emergencies can't wait; our team is ready for fast, efficient service when you need it most." },
                  { title: "Skilled, Certified Professionals", text: "Our highly trained plumbers bring expertise and professionalism, ensuring top-quality work every time." },
                ].map((item, index) => (
                  <div key={index} className="relative pl-9">
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

          {/* Video Slideshow Section */}
          <div className="flex justify-center items-center">
            <video
              src={videos[currentIndex]}
              className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>

      <Contact />
      <Reviews />
      <ServiceAreas />
      <Footer />
    </div>
  );
}
