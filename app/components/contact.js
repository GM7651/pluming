"use client";

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [imageUrl, setImageUrl] = useState(""); // Store Cloudinary image URL

  // Function to handle image upload to Cloudinary
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "sinani-corp"); // Corrected: use "upload_preset" as the key

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dnxplhivy/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setImageUrl(data.secure_url); // Store the uploaded image URL
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Failed to upload image. Please try again.");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Define template parameters with keys that match your EmailJS template placeholders
    const templateParams = {
      to_name: "Sinani Piping & Heating Corp", // Static recipient name
      from_name: `${e.target.firstName.value} ${e.target.lastName.value}`, // Combines first and last name
      firstName: e.target.firstName.value,     // First name from form
      lastName: e.target.lastName.value,       // Last name from form
      user_email: e.target.email.value,        // Email from form
      phone: e.target.phone.value,             // Phone number from form
      message: e.target.message.value,         // Message from form
      image_url: imageUrl                      // Include Cloudinary image URL in email parameters
    };

    // Send the email using EmailJS
    emailjs.send(
      'service_t0pq87k', // EmailJS service ID
      'template_sgr5ivq', // EmailJS template ID
      templateParams,
      'rFwlnYhABQ_4bDh_a' // EmailJS user ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Your message has been sent!');
    }, (error) => {
      console.log('Failed to send email:', error.text);
      alert('Failed to send the message. Please try again.');
    });

    e.target.reset(); // Reset the form after submission
  };

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const servicesNav = document.getElementById('contactform');
    if (servicesNav) {
      servicesNav.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="contact" className="flex flex-col justify-center items-center w-full h-full bg-white px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto py-4 lg:py-10 flex flex-col lg:flex-row items-center">

        <form onSubmit={sendEmail} id="contactform" className="w-full lg:w-8/12 p-8 my-4 rounded-2xl shadow-2xl bg-white">
          <h1 className="font-bold uppercase text-3xl sm:text-4xl lg:text-5xl text-black mb-4">Get In Touch</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <input
              name="firstName"
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
              required
            />
            <input
              name="lastName"
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
              required
            />
            <input
              name="email"
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
              required
            />
            <input
              name="phone"
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="Phone*"
              required
            />
          </div>
          <div className="my-4">
            <textarea
              name="message"
              placeholder="Message*"
              className="w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <h1 className=" text-gray-500">Please Upload A Image  </h1>


          {/* Image file input for Cloudinary upload */}
          <div className="my-4">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageUpload} // Triggers the Cloudinary upload
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="my-2 w-full sm:w-1/2 lg:w-1/4">
            <button type="submit" className="inline-block text-center w-full md:w-auto min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-lg bg-gradient-to-r from-red-600 to-red-500 hover:bg-gradient-to-b hover:shadow-2xl">
              Send Message
            </button>

          </div>
        </form>

        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 mt-4 sm:mt-6 lg:mt-0 shadow-xl bg-red-600 text-white rounded-2xl">
          <h1 className="font-bold text-lg md:text-2xl lg:text-3xl mb-4 whitespace-nowrap">
            Sinani Piping & Heating Corp.
          </h1>
          <p className="text-gray-200 mb-6">
            Our team is here to answer your questions, schedule service, and ensure your plumbing needs are met with prompt and professional care. 
            Just give us a call, and we’ll take care of the rest!
          </p>

          <div className="flex items-start mb-4">
            <i className="fas fa-map-marker-alt pt-1 pr-3" />
            <div>
              <h2 className="text-xl font-semibold">Main Office</h2>
              <p className="text-gray-400">736 N Railroad Ave, Staten Island, NY 10304</p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <i className="fas fa-phone-alt pt-1 pr-3" />
            <div>
              <div className="flex items-center space-x-4">
                <a href="tel:+13473306189" 
                  className="bg-red-900 text-white font-semibold mr-4 py-2 px-6 w-full sm:w-48 md:w-56 lg:w-64 rounded-lg hover:bg-red-700 transition">
                  <h2 className="text-xl font-semibold">Give Us A Call!</h2>
                </a>
              </div>          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
