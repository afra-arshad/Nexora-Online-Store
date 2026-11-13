import React from 'react';

const Closet = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="pic.jpg"
        alt="Nexora Closet Collection"
        className="w-full h-64 sm:h-72 lg:h-60 object-cover"
      />

      {/* Text Overlay (Desktop position preserved with lg:bottom-7 lg:ml-160) */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 bg-black/25 lg:bg-transparent lg:block lg:inset-auto lg:bottom-7 lg:ml-160 lg:px-0 text-[#6a5843]">
        <h1 className="text-base sm:text-xl font-medium text-[#e5d4bf] lg:text-[#6a5843]">
          NEXORA
        </h1>
        <p className="text-2xl sm:text-3xl font-bold text-[#cdb292] leading-tight">
          TIMELESS PIECES
        </p>
        <p className="text-2xl sm:text-3xl font-bold text-[#c2ad94] leading-tight">
          MODERN SOUL
        </p>
        <p className="text-sm sm:text-lg mt-1 text-[#e5d4bf] lg:text-[#6a5843]">
          BUILT FOR TODAY, MADE FOR TOMORROW
        </p>

        <button className="h-10 w-56 px-5 mt-4 lg:mt-5 flex items-center justify-center text-sm sm:text-base text-white font-semibold bg-gradient-to-r from-[#8a745a] via-[#a48e75] to-[#826952] rounded-lg cursor-pointer transition-transform hover:scale-105 ease-in-out duration-300">
          EXPLORE COLLECTION →
        </button>
      </div>
    </div>
  );
};

export default Closet;