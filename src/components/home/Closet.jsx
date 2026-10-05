import React from 'react'

const Closet = () => {
  return (
    <div>
      <img src="pic.jpg" alt="" className='h-60' />

      <div className='relative'>
        <div className='absolute bottom-7 ml-160 text- text-[#6a5843]'>
        <h1 className=' text-xl'>NEXORA</h1>
        <p className='text-3xl font-bold text-[#cdb292]'>TIMELESS PIECES</p>
        <p className='text-3xl font-bold text-[#c2ad94]'>MODERN SOUL</p>
        <p className='text-lg'>BUILT FOR TODAY, MADE FOR TOMORROW</p>   
        
         <p className=' h-10 w-56 pl-6 pt-2 mt-5 text-white  font-semibold bg-gradient-to-r from-[#8a745a] via-[#a48e75] to-[#826952] rounded-lg cursor-pointer hover:transition-transform hover:scale-105 ease-in-out duration-300'>EXPLORE COLLECTION→</p>
        </div>
      </div>
    </div>
  )
}

export default Closet
