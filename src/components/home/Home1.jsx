import React from 'react'
import { motion } from 'framer-motion'
import { SlideDown, SlideLeft, SlideRight, SlideUp,ZoomIn } from '../../utility/Animation'


const Home1 = () => {
  return (
    <div className=''>
        <img src="hero.jpg" alt="" />
         
            <div className='absolute bottom-30 ml-10  text-xl font-semibold text-white '>
                
            <motion.h1
            
            variants={SlideLeft(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
            
            className='ml-4' ><span className='font-bold text-2xl  text-[#403426]'>NEXORA </span>IS BUILT FOR THOSE WHO</motion.h1>
            <motion.h1 
             variants={SlideRight(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
            
            className='ml-4'>CHOOSE FROM OVERNOISE AND LET THE </motion.h1>
             <motion.h1
             
             variants={SlideLeft(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
             
             
             className='ml-4'> WORK SPEAK WHERE WORDS DO NOT</motion.h1>

             <div className='ml-192 '>
                <motion.h1
                
                 variants={SlideDown(0.4)}
              initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
                
                className='ml-12'>MORE THAN CLOTHING BRAND  </motion.h1>
                <motion.h1
                 variants={SlideDown(0.7)}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true }}
                
                className='ml-20'>IT'S A FEELING</motion.h1>
                
             </div>

             <motion.p
             
             variants={ZoomIn(0.8)}
           initial="hidden"
           whileInView="visible"
          viewport={{ once: true }}
             
             className='border-none font-semibold text-lg h-12 w-44 pl-10 pt-2.5 rounded-lg ml-4 bg-gradient-to-r from-[#8a745a] via-[#a48e75] to-[#826952] cursor hover:transition-transform hover:scale-105 hover:duration-300 hover: ease-in-out'>Shop Now→</motion.p>
             
            </div>
         
    </div>
  )
}

export default Home1



