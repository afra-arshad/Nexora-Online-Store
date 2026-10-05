import React from 'react'
import {motion} from 'framer-motion'
import { FadeIn, ZoomIn } from '../../utility/Animation'

const About4 = () => {
  return (
    <div>
      <section className="w-full bg-[#f6e3ce] text-[#E8DCC4] py-20 px-6 text-center border-t border-b border-[#2E2018]">
      <motion.div
      
           variants={ZoomIn(0.8)}
           initial="hidden"
           whileInView="visible"
          viewport={{ once: true }}
      
      
      className="max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Small subtitle */}
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#231f1a] mb-3">
          The Philosophy
        </span>

        {/* Minimal Statement */}
        <h3 className="text-xl md:text-2xl font-serif font-light tracking-wide text-[#1b1812] leading-relaxed">
          "Elegance is not standing out, but being remembered."
        </h3>

        {/* Short descriptive text */}
        <p className="text-xs text-[#1f1b16] font-light mt-4 tracking-wider uppercase">
          Crafted for those who value subtlety over noise.
        </p>

      </motion.div>
    </section>
    </div>
  )
}

export default About4

