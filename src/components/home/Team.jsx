import React from 'react'

const Team = () => {
  return (
    <div>
      <img src="team.jpg" alt="" className='h-70' />
       <div className='relative'>
        <div className='absolute bottom-9 ml-16 text- text-[#6a5843]'>
        <h1 className=' text-lg'>03 / THE PEOPLE</h1>
        <p className='text-3xl font-bold mt-2 mb-2 text-[#c8ae96]'>BEHIND NEXORA</p>
        <p className='text-XL'>WE 'RE A TEAM OF DREAMERS,DESIGHNERS AND <br /> CREATIVES _ UNITED BY SHARED PASSION <br /> FOR MEANINGFUL FASHION</p>  
        
         <p className=' h-10 w-45 pl-6 pt-2 mt-5 text-white font-semibold bg-gradient-to-r from-[#78654e] via-[#ae977c] to-[#6d5845] rounded-lg cursor-pointer hover:transition-transform hover:scale-105 ease-in-out duration-300'>MEET OUT TEAM→</p>
        </div>
      </div>
    </div>
  )
}

export default Team
