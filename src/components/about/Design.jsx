import React from 'react'
import {motion} from 'framer-motion'
import { SlideLeft, ZoomIn ,Animation} from '../../utility/Animation'

const Design = ({image,icon,heading,paragraph,index}) => {
  return (
    <motion.div
      
       variants={Animation(index*0.8)}
               initial="hidden"
               whileInView="visible"
              viewport={{ once: true }}
    
    
    
    className='relative mb-20 overflow-hidden'>
      <img src={image} alt="" className='h-45 w-85'/>
     
     <div className='absolute bottom-8 pl-10  text-[#26201a] '>
        <h1 className='text-3xl '>{icon}</h1>
        <h1 className='mt-1 mb-1 text-2xl'>{heading}</h1>
        <p>{paragraph}</p>
     </div>
    </motion.div>
  )
}

export default Design
