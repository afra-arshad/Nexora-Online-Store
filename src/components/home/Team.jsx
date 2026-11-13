import React from 'react';

const Team = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      {/* Team Background Image (Desktop h-70 preserved on lg:) */}
      <img 
        src="team.jpg" 
        alt="Behind Nexora Team" 
        className='w-full h-72 sm:h-80 lg:h-70 object-cover' 
      />

      {/* Content Overlay (Desktop layout & margins preserved with lg:) */}
      <div className='absolute inset-0 flex flex-col justify-center px-6 sm:px-12 bg-black/40 lg:bg-transparent lg:block lg:inset-auto lg:bottom-9 lg:ml-16 lg:px-0 text-[#6a5843]'>
        
        {/* Section Number & Title */}
        <h1 className='text-sm sm:text-base lg:text-lg font-medium text-[#e2d2be] lg:text-[#6a5843]'>
          03 / THE PEOPLE
        </h1>
        <p className='text-2xl sm:text-3xl font-bold mt-1 sm:mt-2 mb-2 text-[#c8ae96] leading-tight'>
          BEHIND NEXORA
        </p>

        {/* Description */}
        <p className='text-sm sm:text-base lg:text-xl text-[#f3ebd9] lg:text-[#6a5843] leading-relaxed'>
          WE'RE A TEAM OF DREAMERS, DESIGNERS AND <br className='hidden sm:inline' /> 
          CREATIVES — UNITED BY SHARED PASSION <br className='hidden sm:inline' /> 
          FOR MEANINGFUL FASHION
        </p>  
        
        {/* CTA Button */}
        <button className='h-10 w-45 mt-4 sm:mt-5 flex items-center justify-center text-sm sm:text-base text-white font-semibold bg-gradient-to-r from-[#78654e] via-[#ae977c] to-[#6d5845] rounded-lg cursor-pointer transition-transform hover:scale-105 ease-in-out duration-300'>
          MEET OUR TEAM →
        </button>

      </div>
    </div>
  );
};

export default Team;