import React from 'react'
import { LuLeaf, LuTruck, LuRotateCcw } from 'react-icons/lu';
import {motion} from 'framer-motion'
import { SlideLeft,ZoomIn } from '../../utility/Animation';

const Choose = () => {
  return (
    <div>
       <section className="relative w-full bg-[#241B15] text-[#E8DCC4] py-12 px-6 md:px-16 overflow-hidden border-t border-b border-[#3D3028]">
      {/* Background texture overlay effect if needed */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4a382c_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        
        {/* Left Text Block */}
        <motion.div
        
               variants={SlideLeft(0.8)}
           initial="hidden"
           whileInView="visible"
          viewport={{ once: true }}
        
        
        
        
        className="flex flex-col items-start max-w-lg">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49D] mb-3 font-medium">
            Why Nexora
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide leading-tight text-[#F4EFE6]">
            QUALITY. COMFORT. CONFIDENCE.
          </h2>
        </motion.div>

        {/* Right Features Container */}
        <motion.div
        
            variants={ZoomIn(0.8)}
           initial="hidden"
           whileInView="visible"
          viewport={{ once: true }}
        
        
        
        className="flex flex-col md:flex-row items-center justify-around w-full lg:w-auto gap-8 md:gap-12">
          
          {/* Feature 1: 100% Premium Fabrics */}
          <div className="flex flex-col items-center text-center group">
            <div className="text-2xl mb-3 text-[#D4C3A3] transition-transform duration-300 group-hover:scale-110">
              <LuLeaf />
            </div>
            <h3 className="text-sm md:text-base font-semibold tracking-wider text-[#F4EFE6]">
              100%
            </h3>
            <p className="text-[11px] uppercase tracking-widest text-[#B5A48D] mt-1">
              Premium Fabrics
            </p>
          </div>

          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden md:block h-16 w-[1px] bg-[#42342A]"></div>

          {/* Feature 2: Free Shipping */}
          <div className="flex flex-col items-center text-center group">
            <div className="text-2xl mb-3 text-[#D4C3A3] transition-transform duration-300 group-hover:scale-110">
              <LuTruck />
            </div>
            <h3 className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#F4EFE6]">
              Free Shipping
            </h3>
            <p className="text-[11px] uppercase tracking-widest text-[#B5A48D] mt-1">
              On Orders Above $100
            </p>
          </div>

          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden md:block h-16 w-[1px] bg-[#42342A]"></div>

          {/* Feature 3: Easy Returns */}
          <div className="flex flex-col items-center text-center group">
            <div className="text-2xl mb-3 text-[#D4C3A3] transition-transform duration-300 group-hover:scale-110">
              <LuRotateCcw />
            </div>
            <h3 className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#F4EFE6]">
              Easy Returns
            </h3>
            <p className="text-[11px] uppercase tracking-widest text-[#B5A48D] mt-1">
              Within 7 Days
            </p>
          </div>

        </motion.div>

      </div>
    </section>
    </div>
  )
}

export default Choose
