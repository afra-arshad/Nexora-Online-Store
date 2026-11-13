import React from 'react';

const NewArrivals = () => {
  return (
    <div className='bg-[#efdecb] relative px-6 sm:px-12 pt-10 pb-6 lg:px-0 lg:pt-0 lg:pb-0'>
      
      {/* Top Row: SHOP BY CATEGORY + Line */}
      <div className='flex items-center gap-3 lg:block'>
        <h1 className='font-semibold text-sm sm:text-base text-[#4e3f2e] lg:ml-12 lg:pt-15 shrink-0'>
          SHOP BY CATEGORY
        </h1>
        <hr className='flex-1 max-w-[140px] sm:max-w-[200px] border-[#4e3f2e]/40 lg:ml-51 lg:-mt-2 lg:w-50 lg:max-w-none' />
      </div>

      {/* Bottom Row: FOR EVERY MOOD + Line */}
      <div className='flex items-center gap-3 mt-3 lg:block lg:mt-0'>
        <p className='font-bold text-2xl sm:text-3xl lg:text-4xl text-[#3d3124] lg:mt-2 lg:ml-12 shrink-0'>
          FOR EVERY MOOD
        </p>
        <hr className='flex-1 max-w-[180px] sm:max-w-[300px] border-[#3d3124]/40 lg:ml-92 lg:-mt-2 lg:w-80 lg:max-w-none' />
      </div>

    </div>
  );
};

export default NewArrivals;