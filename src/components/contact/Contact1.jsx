import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Contact1 = () => {
  return (
    <div className='-mb-60 bg-[#dfc5a9] border border-[#927b62]'>
    
     <h1 className='lg:ml-17 lg:mt-7 mt-7 ml-4 '>CONTACT</h1>
     <h1 className=' md:ml-17 md:text-7xl md:mt-4 md:font-normal font-serif ml-4 text-4xl mt-5'>LET'S <br /><span className=''>TALK</span></h1>
     <h1 className='lg:ml-17 lg:mt-7 ml-4 mt-6 '>Have a question about our collection,<br />an idea for collabration or simply <br /> wants to say hello?</h1>
     <h1 className='lg:ml-17 lg:mt-7 ml-4 mt-6'>We'd love to hear from you</h1>
     <h1 className='lg:ml-17 lg:mt-7 ml-4 mt-6'>Follow Our Journey</h1>
     <div className='flex gap-4 text-2xl lg:ml-16 lg:mt-3 ml-3 mt-3 mb-4 cursor-pointer'>
        <p>{<FaFacebookF />}</p>
        <p>{<FaInstagram />}</p>
        <p>{<FaTwitter />}</p>
     </div>

      <form action="" className="w-full max-w-2xl mx-auto px-4">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:relative bottom-85 lg:left-50">

    {/* Name */}
    <div>
      <label className="block mb-2 font-medium">
        Your Name
      </label>

      <input
        type="text"
        placeholder="Enter your name"
        className="w-full border-1 border-white rounded-lg px-4 py-3 outline-none
         focus:border-[#ac9173]"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block mb-2 font-medium">
        Your Email
      </label>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full border-1 border-white rounded-lg px-4 py-3 outline-none focus:border-[#ac9173]"
      />
    </div>

    {/* Message */}
    <div className="md:col-span-2">
      <label className="block mb-2 font-medium">
       Your Message
      </label>

      <textarea
        placeholder="Enter your message"
        rows="5"
        className="w-full border-1 border-white rounded-lg px-4 py-3 outline-none focus:border-[#ac9173]"
      ></textarea>
    </div>

  </div>

  <button
    type="submit"
    className="mt-5 bg-[#2b231e] font-semibold px-6 py-3 rounded-lg w-full sm:w-auto relative lg:bottom-83 lg:left-50 cursor-pointer text-white hover:bg-[#4c3b2e]  duration-500 ease-in-out'"
  >
    Send Message
  </button>

</form>
     </div> 
  )
}

export default Contact1