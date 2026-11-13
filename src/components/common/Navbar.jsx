import React, { useState } from 'react';
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { PiShoppingCartBold } from "react-icons/pi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='relative bg-[#927b62] border-none'>
      {/* Main Navbar Bar */}
      <div className='flex items-center justify-between lg:items-start lg:justify-start h-20 px-6 md:px-12 lg:px-0'>
        
        {/* Brand Logo (Desktop margins preserved with lg:) */}
        <h1 className='text-2xl font-extrabold text-[#443725] lg:ml-16 lg:mt-6'>
          <Link to="/">NEXORA</Link>
        </h1>

        {/* Desktop Menu (Exact same layout & spacing on lg screens) */}
        <div className='hidden lg:block'>
          <ul className="flex gap-10 mt-7.5 ml-74 font-semibold text-md text-[#433625]">
            <li>
              <Link to="/" className="hover:opacity-80 transition">Home</Link>
            </li>
            <li>
              <Link to="/product" className="hover:opacity-80 transition">Product</Link>
            </li>
            <li>
              <Link to="/about" className="hover:opacity-80 transition">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:opacity-80 transition">Contact</Link>
            </li>
            <li className='ml-55 text-xl mt-2'>
              <Link to="/search" className="hover:opacity-80 transition">
                <IoSearchOutline />
              </Link>
            </li>
            <li className='text-xl mt-2'>
              <Link to="/cart" className="hover:opacity-80 transition">
                <PiShoppingCartBold />
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile & Tablet Right Icons + Hamburger Button */}
        <div className='flex items-center gap-5 text-xl text-[#433625] lg:hidden'>
          <Link to="/search" aria-label="Search">
            <IoSearchOutline />
          </Link>
          <Link to="/cart" aria-label="Cart">
            <PiShoppingCartBold />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-2xl focus:outline-none cursor-pointer'
            aria-label="Toggle Menu"
          >
            {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      {isOpen && (
        <div className='lg:hidden bg-[#927b62] border-t border-[#433625]/20 px-6 md:px-12 py-5 shadow-md'>
          <ul className='flex flex-col gap-4 font-semibold text-md text-[#433625]'>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className='block py-1'>
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" onClick={() => setIsOpen(false)} className='block py-1'>
                Product
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)} className='block py-1'>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)} className='block py-1'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;