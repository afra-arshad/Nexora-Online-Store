import React from 'react';

const Review = () => {
  return (
    <div className='bg-[#efdecb] lg:bg-transparent px-6 sm:px-12 py-10 lg:px-0 lg:mt-13 lg:mb-5 lg:ml-16 text-[#382d22]'>
      
      {/* Subtitle */}
      <h1 className='text-sm sm:text-base lg:text-lg font-medium'>
        WHAT OUR CUSTOMERS SAY
      </h1>

      {/* Main Titles */}
      <p className='text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 leading-tight'>
        REAL STORIES
      </p>
      <p className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-2 leading-tight'>
        REAL STYLE
      </p>

      {/* Read More Link */}
      <h1 className='text-sm sm:text-base lg:text-lg font-semibold hover:text-white duration-300 ease-in-out transition-all cursor-pointer inline-block'>
        READ MORE REVIEWS →
      </h1>

    </div>
  );
};

export default Review;