import { motion } from 'framer-motion';
import React from 'react';
import { Animation } from '../../utility/Animation';

const NewArrival1 = ({ image, paragraph, index }) => {
  return (
    <div className='w-full lg:w-auto flex justify-center overflow-hidden'>
      <motion.div
        variants={Animation(index * 0.20)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className='relative border rounded-xl overflow-hidden my-3 lg:mb-20 lg:mt-10 shadow-md border-[#574839] w-full max-w-[220px] lg:max-w-none lg:w-53 shrink-0 bg-white/40'
      >
        {/* Category Image (Desktop h-65 w-53 preserved on lg:) */}
        <div className='overflow-hidden'>
          <img 
            src={image} 
            alt={paragraph || "New Arrival Category"} 
            className='w-full h-56 sm:h-60 lg:h-65 lg:w-53 object-cover transition-transform hover:scale-105 duration-300 ease-in-out' 
          />
        </div>
        
        {/* Category Label Overlay */}
        <div className='absolute bottom-4 left-4 right-4'>
          <p className='text-base sm:text-lg lg:text-xl font-bold text-white drop-shadow-md cursor-pointer flex items-center justify-between'>
            <span className='truncate'>{paragraph}</span>
            <span className='text-xl lg:text-2xl font-bold text-white ml-1'>→</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default NewArrival1;