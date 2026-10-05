import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartBold } from "react-icons/pi";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex border-none h-20   bg-[#927b62] '>
      <h1 className='text-2xl font-extrabold ml-16 mt-6 text-[#443725] '>NEXORA</h1>
      <div className=''>
       <ul className="flex gap-10 mt-7.5 ml-74 font-semibold text-md  text-[#433625]">
          <li className>
         <Link to="/" >
         Home
        </Link>
        </li>
    

              <li className>
         <Link to="/product" >
         Product
        </Link>
        </li>

             <li className>
         <Link to="/about" >
          About
        </Link>
        </li>

          <li className>
         <Link to="/contact" >
         Contact
        </Link>
        </li>


                  <li className='ml-55 text-xl mt-2'>
         <Link to="" >
          {<IoSearchOutline />}
     
        </Link>
        </li>


                   <li className='text-xl mt-2'>
         <Link to="" >
         
      {<PiShoppingCartBold />}
        </Link>
        </li>
  </ul>
    </div>
   
    </div>
  )
}

export default Navbar





