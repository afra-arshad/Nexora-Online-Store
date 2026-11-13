import React from 'react';
import { motion } from 'framer-motion';
import { SlideDown, SlideLeft, SlideRight, ZoomIn } from '../../utility/Animation';

const Home1 = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Background Image */}
      <img
        src="hero.jpg"
        alt="Nexora Hero"
        className="w-full h-[520px] sm:h-[580px] lg:h-auto object-cover"
      />

      {/* Overlay Content (Desktop layout & margins preserved on lg:) */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 bg-black/30 lg:bg-transparent lg:block lg:inset-auto lg:bottom-30 lg:ml-10 lg:px-0 text-base sm:text-lg lg:text-xl font-semibold text-white">
        
        {/* Left / Top Tagline */}
        <div>
          <motion.h1
            variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:ml-4"
          >
            <span className="font-bold text-xl sm:text-2xl text-[#d8c3a5] lg:text-[#403426]">
              NEXORA{" "}
            </span>
            IS BUILT FOR THOSE WHO
          </motion.h1>

          <motion.h1
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:ml-4"
          >
            CHOOSE FROM OVERNOISE AND LET THE
          </motion.h1>

          <motion.h1
            variants={SlideLeft(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:ml-4"
          >
            WORK SPEAK WHERE WORDS DO NOT
          </motion.h1>
        </div>

        {/* Right / Secondary Tagline */}
        <div className="mt-5 lg:mt-0 lg:ml-192">
          <motion.h1
            variants={SlideDown(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:ml-12"
          >
            MORE THAN CLOTHING BRAND
          </motion.h1>

          <motion.h1
            variants={SlideDown(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:ml-20"
          >
            IT'S A FEELING
          </motion.h1>
        </div>

        {/* CTA Button */}
        <motion.button
          variants={ZoomIn(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-none font-semibold text-base sm:text-lg h-12 w-44 mt-6 lg:mt-0 lg:ml-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#8a745a] via-[#a48e75] to-[#826952] cursor-pointer transition-transform hover:scale-105 duration-300 ease-in-out"
        >
          Shop Now →
        </motion.button>

      </div>
    </div>
  );
};

export default Home1;