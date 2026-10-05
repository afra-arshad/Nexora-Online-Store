import React from 'react'
import { FadeIn, Slide, SlideDown, SlideUp } from '../../utility/Animation'
import { motion } from 'framer-motion'

const About1 = () => {
  return (
    <div className='relative'>
     <img src="ab2.jpg" alt="" />

     <div className='absolute bottom-12 ml-15 '>
      <h1 className='text-lg text-[#6a5745] pt-10 '>ABOUT NEXORA</h1>
      <h3 className='font-bold text-4xl text-[#b3967a] mt-1 mb-1 -ml-1'>OUR STORY</h3>
      <h3 className='text-lg text-[#6c5d4d] mt-2 mb-2'>NEXORA was born from a simple belief — <br />that true style doesn't need to shout. <br /> It's for the ones who move with purpose,<br /> and let their  presence speak for itself.</h3>
      <h3 className='mt-4 border-none font-semibold text-lg h-12 w-44 pl-6 pt-2.5 rounded-lg  bg-gradient-to-r from-[#8a745a] via-[#a48e75] to-[#826952] cursor hover:transition-transform hover:scale-105 hover:duration-300 hover: ease-in-out'>OUR JOURNEY→</h3>


     </div>
    </div>
  )
}

export default About1