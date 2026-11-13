import React from 'react';
import { motion } from 'framer-motion';
import { SlideDown } from '../../utility/Animation';

const Latest1 = ({ image, paragraph, price, details, index }) => {
  return (
    <motion.div
      variants={SlideDown(index * 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full lg:w-auto flex justify-center"
    >
      {/* Main Card (Desktop h-84 w-65 preserved on lg:) */}
      <div className="relative border border-[#a38971] rounded-xl overflow-hidden mb-10 lg:mb-20 mt-6 lg:mt-10 w-full max-w-[280px] lg:max-w-none h-auto pb-5 lg:pb-0 lg:h-84 lg:w-65 shadow-md bg-white/40 mr-10">
        
        {/* Product Image */}
        <div className="overflow-hidden ">
          <img
            src={image}
            alt={paragraph || "New Arrival"}
            className="w-full h-60 lg:h-65 lg:w-65 object-cover transition-transform hover:scale-105 duration-300 ease-in-out"
          />
        </div>

        {/* Details Badge */}
        {details && (
          <div className="absolute top-3 left-3 z-10">
            <h2 className="text-xs sm:text-sm border border-[#382d22]/30 px-2.5 h-6 flex items-center justify-center rounded-xl bg-[#7a6b5b] font-semibold text-[#382d22] shadow-sm">
              {details}
            </h2>
          </div>
        )}

        {/* Product Info */}
        <div className="px-4 lg:px-0 lg:ml-5 mt-3 text-left">
          <p className="text-base font-semibold text-[#382d22] truncate">
            {paragraph}
          </p>
          <p className="text-base font-semibold text-[#382d22] mt-0.5">
            {price}
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default Latest1;