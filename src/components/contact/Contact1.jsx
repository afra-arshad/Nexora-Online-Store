import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact1 = () => {
  return (
    <section className="bg-[#dfc5a9] border border-[#927b62] w-full py-12 lg:py-16 px-6 sm:px-12 lg:px-17">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16">
        
        {/* Left Column: Contact Info & Socials */}
        <div className="w-full lg:w-5/12 text-[#2b231e]">
          <h1 className="text-sm sm:text-base font-semibold tracking-wide">
            CONTACT
          </h1>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-serif mt-3 sm:mt-4 leading-none">
            LET'S <br />
            <span>TALK</span>
          </h1>

          <p className="text-sm sm:text-base mt-5 sm:mt-7 leading-relaxed max-w-md">
            Have a question about our collection, an idea for collaboration or simply want to say hello?
          </p>

          <p className="text-sm sm:text-base mt-5 sm:mt-6 font-medium">
            We'd love to hear from you
          </p>

          <p className="text-sm sm:text-base mt-5 sm:mt-6">
            Follow Our Journey
          </p>

          <div className="flex gap-4 text-xl sm:text-2xl mt-3 cursor-pointer">
            <a href="#facebook" aria-label="Facebook" className="hover:text-white transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="#instagram" aria-label="Instagram" className="hover:text-white transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="#twitter" aria-label="Twitter" className="hover:text-white transition-colors duration-300">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form className="w-full lg:w-7/12 max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-sm sm:text-base text-[#2b231e]">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-white rounded-lg px-4 py-3 outline-none focus:border-[#ac9173] bg-white/40 lg:bg-transparent transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-sm sm:text-base text-[#2b231e]">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-white rounded-lg px-4 py-3 outline-none focus:border-[#ac9173] bg-white/40 lg:bg-transparent transition-colors"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-sm sm:text-base text-[#2b231e]">
                Your Message
              </label>
              <textarea
                placeholder="Enter your message"
                rows="5"
                className="w-full border border-white rounded-lg px-4 py-3 outline-none focus:border-[#ac9173] bg-white/40 lg:bg-transparent transition-colors"
              ></textarea>
            </div>

          </div>

          <button
            type="submit"
            className="mt-5 bg-[#2b231e] font-semibold px-6 py-3 rounded-lg w-full sm:w-auto cursor-pointer text-white hover:bg-[#4c3b2e] duration-500 ease-in-out"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact1;