import React from 'react'
import { SlideDown, SlideLeft,ZoomIn,Animation, FadeIn, SlideRight } from '../../utility/Animation'
import {motion} from 'framer-motion'

const About3 = () => {
  return (
    <div>

        <section className="relative w-full bg-[#261e17] text-[#E8DCC4] py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Editorial Image Composition */}
        <div className="relative flex justify-center items-center">
          <div className="absolute -inset-2 bg-[#3D3028] rounded-sm transform -rotate-1 opacity-50"></div>
          <div className="relative w-full h-[450px] md:h-[520px] overflow-hidden rounded-sm shadow-2xl border border-[#3D3028]">
            <motion.img 

               variants={SlideDown(0.8)}
                       initial="hidden"
                       whileInView="visible"
                      viewport={{ once: true }}

            

              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop" 
              alt="Nexora Brand Philosophy" 
              className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Accent floating badge */}
          <motion.div
          
             variants={SlideLeft(0.8)}
                     initial="hidden"
                     whileInView="visible"
                    viewport={{ once: true }}
          
          
          className="absolute -bottom-6 -right-6 hidden sm:flex flex-col justify-center items-center bg-[#2C221B] border border-[#4A3A2E] p-6 shadow-xl">
            <span className="text-2xl font-serif text-[#F4EFE6]">01</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5B49D] mt-1">Established Heritage</span>
          </motion.div>
        </div>

        {/* Right Side: Content Block */}
        <motion.div
        
           variants={ZoomIn(0.8)}
                   initial="hidden"
                   whileInView="visible"
                  viewport={{ once: true }}
        
        className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-[#C5B49D]"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49D] font-medium">
              About Nexora
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide leading-tight text-[#F4EFE6] mb-6">
            Different styles. Same soul.
          </h2>

          <p className="text-sm md:text-base text-[#C5B49D] font-light leading-relaxed mb-6">
            At Nexora, we believe that true style goes beyond transient fashion trends—it is an extension of identity. Our pieces are meticulously crafted for individuals who appreciate understated elegance, uncompromising quality, and the quiet confidence that comes from wearing perfection.
          </p>

          <p className="text-sm text-[#A8967F] font-light leading-relaxed mb-8">
            From sourcing sustainable, tactile fabrics to precision tailoring, every garment tells a story of craftsmanship designed to elevate your everyday narrative.
          </p>

          {/* Call to action button */}
          <motion.button
            
               variants={SlideLeft(0.8)}
                       initial="hidden"
                       whileInView="visible"
                      viewport={{ once: true }}
          
          
          
          className="group relative inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#F4EFE6] py-3 px-8 border border-[#4A3A2E]  bg-[#30261f] hover:bg-[#3D3028] transition-all duration-300">
            <span>Discover Our Collection</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1"></span>
          </motion.button>
        </motion.div>

      </div>
    </section>
      
    </div>
  )
}

export default About3
