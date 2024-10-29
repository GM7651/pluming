import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-white px-4 sm:px-6 lg:px-20">
  <div className="container mx-auto py-4 lg:py-10 flex flex-col lg:flex-row items-center">
    <div className="w-full lg:w-8/12 p-8 my-4 rounded-2xl shadow-2xl bg-white">
      <h1 className="font-bold uppercase text-3xl sm:text-4xl lg:text-5xl text-black mb-4">Send us a message</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <input
          className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="First Name*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Last Name*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Email*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Phone*"
        />
      </div>
      <div className="my-4">
        <textarea
          placeholder="Message*"
          className="w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="my-2 w-full sm:w-1/2 lg:w-1/4">
        <button className="inline-block text-center w-full md:w-auto min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-lg bg-gradient-to-r from-red-600 to-red-500 hover:bg-gradient-to-b hover:shadow-2xl">
          Send Message
        </button>
      </div>
    </div>

    <div className="w-full lg:w-4/12 px-8 py-10 mt-8 lg:mt-0 shadow-xl bg-red-600 text-white rounded-2xl ">
      <h1 className="font-bold uppercase text-3xl lg:text-4xl mb-4">Drop in our office</h1>
      <p className="text-gray-400 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam, eu feugiat felis fermentum id.
      </p>

      <div className="flex items-start mb-4">
        <i className="fas fa-map-marker-alt pt-1 pr-3" />
        <div>
          <h2 className="text-xl font-semibold">Main Office</h2>
          <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
        </div>
      </div>

      <div className="flex items-start mb-4">
        <i className="fas fa-phone-alt pt-1 pr-3" />
        <div>
          <h2 className="text-xl font-semibold">Call Us</h2>
          <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
          <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
        </div>
      </div>

      <div className="flex space-x-4 mt-6">
        <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 flex items-center justify-center text-blue-900">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 flex items-center justify-center text-blue-900">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
    </div>
  </div>
</div>

  );
};

export default Contact;
