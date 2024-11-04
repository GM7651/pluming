// File: components/ServiceAreas.js
"use client";
import React, { useState } from "react";
import zipcodes from "zipcodes";

const ServiceAreas = () => {
  const [isNYExpanded, setNYExpanded] = useState(false);
  const [isNJExpanded, setNJExpanded] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [serviceMessage, setServiceMessage] = useState("");

  const handleZipCheck = () => {
    const location = zipcodes.lookup(zipCode);
    
    if (location) {
      if (location.state === "NY") {
        setServiceMessage("We serve your area in New York!");
      } else if (location.state === "NJ") {
        setServiceMessage("We serve your area in New Jersey!");
      } else {
        setServiceMessage("Sorry, we do not currently serve this area.");
      }
    } else {
      setServiceMessage("Invalid ZIP code. Please try again.");
    }
  };

  return (
    <section id="serve" className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Locations We Serve</h2>
        <p className="text-gray-600 mb-12">
          Our plumbing services cover a wide range of areas throughout New York and New Jersey.
        </p>

        {/* Zip Code Check Section */}
        <div className="mb-8 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
  <input
    type="text"
    placeholder="Enter Your Zip Code"
    value={zipCode}
    onChange={(e) => setZipCode(e.target.value)}
    className="border border-gray-300 text-black p-3 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
  />
  <button
    onClick={handleZipCheck}
    className="bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 w-full sm:w-auto"
  >
    Check Service Area
  </button>
  {serviceMessage && (
    <p className="mt-4 text-gray-700 text-center sm:text-left sm:mt-0 sm:ml-4">
      {serviceMessage}
    </p>
  )}
</div>

      </div>

      <div className="flex justify-center items-center mt-8">
        <video
          src="vid5.mp4"
          className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl rounded-lg shadow-lg mr-4 sm:mr-8 md:mr-12 lg:mr-16 xl:mr-20 2xl:mr-24"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
};

export default ServiceAreas;
