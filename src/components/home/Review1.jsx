import { div } from 'framer-motion/client'
import React from 'react'

const Review1 = ({image,text,icon,paragraph}) => {
  return (
    <div className='border border-[#f6e3ce]'>
    <div className='border border-[#86705a] h-45 w-95 pt-7 -mt-40 mb-25 shadow-lg hover:shadow-xl hover:transition-transform hover:scale-103 hover: duration-300 hover: ease-in-out'>
      <img src={image} alt="" className='h-10 w-10 ml-4 border-none rounded-full ' />
      <p className='-mt-10 ml-17 font-semibold  text-[#382d22]'>{text}</p>
      <p className='ml-16  text-amber-300'>{icon}★★★★★</p>
      <p className='ml-17 text-[#382d22]'>{paragraph}</p>

    </div>
    </div>
  )
}

export default Review1
