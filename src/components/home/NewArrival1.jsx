

import { motion } from 'framer-motion'
import React from 'react'
import { Animation, SlideLeft, SlideUpward } from '../../utility/Animation'


const NewArrival1 = ({image,paragraph,index}) => {
 return (
 
 <div className='overflow-hidden'>
 
 <motion.div

 variants={Animation(index * 0.20)} // Multiply index for staggered delay
 initial="hidden"
 whileInView="visible"
 viewport={{ once: false }}
 
 
 
 className='relative border w-53 rounded-xl overflow-hidden mb-20 mt-10 shadow-md border-[#574839] '>
 <img src={image} alt="New Arrival" className='h-65 w-53 hover:transition-transform hover:scale-105 hover: duration-300 hover:ease-in-out' />
 
 {/* Add inset-0 here */}
 <div className='absolute bottom-10 ml-5'>
 <p className='text-xl font-bold  text-[#2e251e]  cursor-pointer text-white '>{paragraph}<span className='text-2xl font-bold text-white'>→</span></p>
 </div>
</motion.div>
</div>


 )
}

export default NewArrival1