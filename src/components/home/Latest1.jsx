import React from 'react'
import {motion} from 'framer-motion'
import {  SlideDown } from '../../utility/Animation'

const Latest1 = ({image,paragraph,price,details,index}) => {
  return (
    <motion.div
    
      variants={SlideDown(index*0.1)}
               initial="hidden"
               whileInView="visible"
              viewport={{ once: true }}

    

    >
       <div className=' border  border-[#a38971]  rounded-xl overflow-hidden mb-20 mt-10 h-84 w-65 shadow-md'>
          <img src={image} alt="New ARRIVAL" className='h-65 w-65 hover:transition-transform hover:scale-105 hover: duration-300 hover:ease-in-out ' />
          
          {/* Add inset-0 here */}
          <div className=' ml-5'>
              <p className='text-base font-semibold  text-[#382d22] mt-3 '>{paragraph}</p>
              <p className='text-base font-semibold  text-[#382d22]'>{price}</p>
              <div className='relative' >
               <h2 className='text-sm border w-12 h-6 rounded-xl pl-2 bg-[#7a6b5b] absolute bottom-70 font-semibold  text-[#382d22] '>{details}</h2>
             </div>
          </div>
      </div>
    </motion.div>
  )
}

export default Latest1
