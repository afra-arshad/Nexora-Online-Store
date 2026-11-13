import React from 'react';

const Latest = () => {
  return (
    <div className='bg-[#efdecb] relative px-6 sm:px-12 pt-10 pb-6 lg:px-0 lg:pt-0 lg:pb-0'>
      
      {/* NEW ARRIVALS Row */}
      <div className='flex items-center gap-3 lg:block'>
        <h1 className='font-semibold text-sm sm:text-base text-[#63513d] lg:ml-12 lg:pt-15 shrink-0'>
          NEW ARRIVALS
        </h1>
        <hr className='flex-1 max-w-[140px] sm:max-w-[200px] border-[#63513d]/40 lg:ml-43 lg:-mt-2 lg:w-50 lg:max-w-none' />
      </div>

      {/* LATEST DROPS Row */}
      <div className='flex items-center gap-3 mt-3 lg:block lg:mt-0'>
        <p className='font-bold text-2xl sm:text-3xl lg:text-4xl text-[#443729] lg:mt-2 lg:ml-12 shrink-0'>
          LATEST DROPS
        </p>
        <hr className='flex-1 max-w-[180px] sm:max-w-[300px] border-[#63513d]/40 lg:ml-80 lg:-mt-2 lg:w-90 lg:max-w-none' />
      </div>

    </div>
  );
};

export default Latest;