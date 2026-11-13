import React from 'react';
import { motion } from 'framer-motion';
import { Animation } from '../../utility/Animation';

const Design = ({ image, icon, heading, paragraph, index }) => {
  return (
    <motion.div
      variants={Animation(index * 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative mb-4 lg:mb-10 overflow-hidden w-full max-w-[320px] lg:max-w-none lg:w-85 rounded-xl shadow-md bg-white/40"
    >
      {/* Background Card Image (Desktop h-45 w-85 preserved on lg:) */}
      <img
        src={image}
        alt={heading || "Philosophy card"}
        className="w-full h-40 sm:h-44 lg:h-45 lg:w-85 object-cover"
      />

      {/* Overlay Content (Relative stack on mobile, Absolute on lg:) */}
      <div className="p-5 lg:p-0 lg:absolute lg:inset-auto lg:bottom-8 lg:pl-10 text-[#26201a]">
        <h1 className="text-2xl sm:text-3xl">{icon}</h1>
        <h1 className="mt-1 mb-1 text-xl sm:text-2xl font-semibold">{heading}</h1>
        <p className="text-sm sm:text-base leading-snug">{paragraph}</p>
      </div>
    </motion.div>
  );
};

export default Design;