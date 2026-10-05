import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className=" bg-[#927b62] text- text-[#443725] font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16 mt-0">
        <div className="flex flex-row gap-3 ml-4 mr-30">
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
            
              <h1 className="text-7xl font-extrabold  mt-6 text-[#443725] tracking-wider" > NEXORA </h1>
            </div>

           

            <div className="flex gap-4 pt-2">
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-white" />
              <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-white" />
              <FaLinkedinIn className="w-6 h-6 cursor-pointer hover:text-white" />
            </div>
          </div>

          <div className="flex-1 ml-25">
            <h3 className=" text-[#5c4b38] font-bold text-2xl tracking-wide mb-4 ">
              Important Links
            </h3>
            <ul className="flex flex-col gap-3 text-md">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>

          <div className="flex-1 ml-5">
            <h3 className=" text-[#5c4b38] font-bold text-2xl tracking-wide mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-md">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className=" text-[#5c4b38] font-bold text-2xl tracking-wide mb-4">
              Resources
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#t" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

        </div>

       
      </div>
    </footer>
  );
};

export default Footer;