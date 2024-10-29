// File: components/ServiceAreas.js

import React, { useState } from "react";

const ServiceAreas = () => {
  const [isNYExpanded, setNYExpanded] = useState(false);
  const [isNJExpanded, setNJExpanded] = useState(false);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Locations We Serve</h2>
        <p className="text-gray-600 mb-12">
          Our plumbing services cover a wide range of areas throughout New York and New Jersey.
        </p>

        <div className="space-y-8">
          {/* New York Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <button
              onClick={() => setNYExpanded(!isNYExpanded)}
              className="w-full text-left flex justify-between items-center font-semibold text-lg text-gray-800"
            >
              New York
              <span className="text-gray-600">{isNYExpanded ? "-" : "+"}</span>
            </button>
            {isNYExpanded && (
              <ul className="mt-4 text-gray-700 pl-6 list-disc space-y-1">
                <li>Manhattan</li>
                <li>Brooklyn</li>
                <li>Queens</li>
                <li>Staten Island</li>
                <li>Bronx</li>
                <li>Long Island</li>
                <li>Westchester County</li>
                <li>Buffalo</li>
                <li>Rochester</li>
                <li>Syracuse</li>
                {/* Add more New York locations as needed */}
              </ul>
            )}
          </div>

          {/* New Jersey Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <button
              onClick={() => setNJExpanded(!isNJExpanded)}
              className="w-full text-left flex justify-between items-center font-semibold text-lg text-gray-800"
            >
              New Jersey
              <span className="text-gray-600">{isNJExpanded ? "-" : "+"}</span>
            </button>
            {isNJExpanded && (
              <ul className="mt-4 text-gray-700 pl-6 list-disc space-y-1">
                <li>Newark</li>
                <li>Jersey City</li>
                <li>Paterson</li>
                <li>Elizabeth</li>
                <li>Edison</li>
                <li>Trenton</li>
                <li>Camden</li>
                <li>Clifton</li>
                <li>Hoboken</li>
                <li>Atlantic City</li>
                {/* Add more New Jersey locations as needed */}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
