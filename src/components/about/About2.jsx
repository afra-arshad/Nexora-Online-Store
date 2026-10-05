import React from 'react'
import { SlideLeft, SlideRight } from '../../utility/Animation'
import {motion} from 'framer-motion'

const About2 = () => {
  return (
    <div className='bg-[#ffeeda] border border-[#fff0df]'>
      <motion.h3 
      
            variants={SlideLeft(0.8)}
                    initial="hidden"
                    whileInView="visible"
                   viewport={{ once: true }}
      
      
      
      className='text-sm text-[#382d22] mt-10 ml-15'>THE NEXORA PHILOSOPHY</motion.h3>
      <motion.h1
      

         variants={SlideRight(0.8)}
                 initial="hidden"
                 whileInView="visible"
                viewport={{ once: true }}
      
      className='font-bold text-3xl  text-[#3b3025] ml-15 mt-1'>MORE THAN FASHION</motion.h1>
       <motion.h1
          variants={SlideRight(0.8)}
                  initial="hidden"
                  whileInView="visible"
                 viewport={{ once: true }}
       
       
       className='font-bold text-3xl  text-[#342a21] ml-15'>IT'S A MINDSET</motion.h1>
        <motion.h3
            variants={SlideLeft(0.8)}
                    initial="hidden"
                    whileInView="visible"
                   viewport={{ once: true }}
        
        
        className='-mt-20 ml-180 mb-20 text-sm'>We create timeless pieces for modern souls <br />
           Every design,every stitch,every detail,is guided <br />
           by a simple philosophy — less noise, more meaning.
</motion.h3>
       
    </div>
  )
}

export default About2
