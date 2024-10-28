"use client"; // Enable client-side rendering

import Image from "next/image";

export default function Tips() {
  return (
    <section className="bg-blue-900 text-white py-10 px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-lime-200 mb-4">Seasonal Plumbing</h2>
        <p className="text-2xl italic font-semibold text-lime-400 mb-8">Tips For Summer</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Tip Cards */}
          {tipsData.map((tip, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-lime-500 p-4 rounded-lg shadow-lg text-center"
            >
              <div className="text-6xl mb-3">{tip.icon}</div>
              <h3 className="text-xl font-bold">{tip.title}</h3>
              <p className="text-sm mt-2">{tip.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lime-400 font-medium">www.reallygreatsite.com</p>
      </div>
    </section>
  );
}

const tipsData = [
  {
    icon: "💧",
    title: "Hydrate Your Plumbing",
    description: "Keep pipes in good condition with regular use.",
  },
  {
    icon: "🔍",
    title: "Check Your Sump Pump",
    description: "Ensure your sump pump is working efficiently.",
  },
  {
    icon: "🧹",
    title: "Inspect and Clean Gutters",
    description: "Prevent water backup by maintaining your gutters.",
  },
  {
    icon: "🚰",
    title: "Maintain Your Outdoor Plumbing",
    description: "Inspect hoses, spigots, and outdoor pipes for leaks.",
  },
  {
    icon: "🔥",
    title: "Protect from Extreme Heat",
    description: "Insulate pipes to prevent damage from high temperatures.",
  },
  {
    icon: "🛠️",
    title: "Schedule Maintenance",
    description: "Book a professional check-up for peace of mind.",
  },
];
