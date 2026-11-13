import React from 'react';

const Review1 = ({ image, text, icon, paragraph }) => {
  return (
    <div className="border border-[#f6e3ce] w-full lg:w-auto flex justify-center">
      {/* Main Card (Desktop h-45 w-95 -mt-40 mb-25 preserved on lg:) */}
      <div className="border border-[#86705a] w-full max-w-[400px] lg:max-w-none lg:w-95 h-auto py-5 px-5 lg:px-0 lg:py-0 lg:h-45 lg:pt-7 my-4 lg:my-0 lg:-mt-40 lg:mb-25 shadow-lg hover:shadow-xl transition-transform hover:scale-103 duration-300 ease-in-out rounded-lg lg:rounded-none">
        
        {/* Mobile & Tablet Flex Header / Desktop Original Offset */}
        <div className="flex items-start gap-3.5 lg:block">
          <img
            src={image}
            alt={text || "Customer"}
            className="h-10 w-10 shrink-0 lg:ml-4 border-none rounded-full object-cover"
          />

          <div className="flex-1 lg:block">
            <p className="lg:-mt-10 lg:ml-17 font-semibold text-[#382d22]">
              {text}
            </p>
            <p className="lg:ml-16 text-amber-300 text-sm sm:text-base">
              {icon}★★★★★
            </p>
            <p className="mt-1.5 lg:mt-0 lg:ml-17 lg:pr-4 text-sm sm:text-base text-[#382d22] leading-snug">
              {paragraph}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Review1;