"use client";
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
    if (typeof window !== 'undefined') {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }
  }, [videos.length]);
  
  // Intersection Observer for text visibility
  useEffect(() => {
    if (typeof window !== 'undefined') {
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
    }
  }, []);

  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <Nav /> 

      {/* Primary Static Video Section */}
      <section className="dark:bg-black dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-12 mx-auto lg:flex-row lg:justify-between lg:items-center lg:space-x-6 lg:py-24">
        <div className="flex items-center justify-center p-4 mt-8 lg:mt-0 h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem] w-full max-w-screen-2xl">
          <video
            src="/plumingV1.mp4"
            className="object-contain w-full h-full max-w-screen-2xl"
            autoPlay
            muted
            playsInline
            loop
          />
        </div>




          <div className="flex flex-col justify-center p-6 text-center lg:max-w-md xl:max-w-lg lg:text-left lg:w-1/2">
          <div className="flex justify-start">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white inline whitespace-nowrap">
    <span className="text-red-500">Sinani</span> Piping & Heating Corp.
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
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Slideshow Section */}
      <section id="services-section" className="container mx-auto p-6 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* "Why Us?" Section */}
          <div  className="lg:pr-8 lg:pt-4">
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
    <div key={index} className="flex items-start space-x-4">
      {/* Icon */}
      <svg
        height="30"
        width="30"
        viewBox="0 0 372 312"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 h-6 w-6 text-gray-600"
      >
        <path style={{ fill: "#666666" }} d="M302.164,141.115h-88.131c-4.347,0-7.869,3.523-7.869,7.869s3.522,7.869,7.869,7.869h34.098v63.475 c0,4.346,3.522,7.869,7.869,7.869s7.869-3.523,7.869-7.869v-63.475h38.295c4.347,0,7.869-3.523,7.869-7.869 S306.511,141.115,302.164,141.115z"/>
        <g>
          <path style={{ fill: "#EB6836" }} d="M300.066,120.131c-15.909,0-28.852,12.943-28.852,28.852s12.944,28.852,28.852,28.852 s28.852-12.943,28.852-28.852S315.974,120.131,300.066,120.131z"/>
          <path style={{ fill: "#EB6836" }} d="M211.934,120.131c-15.909,0-28.852,12.943-28.852,28.852s12.944,28.852,28.852,28.852 s28.852-12.943,28.852-28.852S227.843,120.131,211.934,120.131z"/>
        </g>
        <path style={{ fill: "#F7D04A" }} d="M485.246,2.623H421.77c-4.347,0-7.869,3.523-7.869,7.869v178.361 c0,13.017-10.59,23.607-23.607,23.607H121.18c-56.406,0-102.295,45.889-102.295,102.295V499.41c0,4.346,3.522,7.869,7.869,7.869 h63.475c4.347,0,7.869-3.523,7.869-7.869V314.754c0-13.017,10.59-23.607,23.607-23.607H390.82 c56.406,0,102.295-45.889,102.295-102.295V10.492C493.115,6.146,489.593,2.623,485.246,2.623z"/>
      </svg>

      {/* Text */}
      <div>
        <dt className="font-semibold text-gray-900">{item.title}</dt>
        <dd className="text-gray-600">– {item.text}</dd>
      </div>
    </div>
  ))}
</dl>


            </div>
          </div>

          {/* Video Slideshow Section */}
    <div className="flex justify-center items-center relative aspect-[16/9] max-w-[1440px] w-full">
  {videos.map((video, index) => (
    <video
      key={video}
      src={video}
      className={`absolute inset-0 w-full h-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:mt-40 xl:max-w-2xl 2xl:max-w-3xl mt-2 object-cover rounded-lg shadow-lg transition-opacity duration-1000  ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
      autoPlay
      muted
      loop
      playsInline
    />
  ))}
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
