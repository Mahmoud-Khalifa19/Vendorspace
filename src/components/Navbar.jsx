import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll';

const Navbar = () => {
const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);
  
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
    <h1 className="w-full text-3xl font-bold text-[#a21caf]">vendor<span className="text-[#0ea5e9] font-bold">
    space</span>
    </h1>
    
     {/* Navbar Links */}
    <ul className="hidden md:flex">
    <li className="p-4">
    <Link to='home' smooth={true} duration={500}>
     Home
    </Link>
    </li>
    
    <li className="p-4">
    <Link to='about' smooth={true} duration={500}>
    About
    </Link>
    </li>

    <li className="p-4">
    <Link to='explore' smooth={true} duration={500}>
    Explore
    </Link>
    </li>
    
    <li className="p-4">
    <Link to='event' smooth={true} duration={500}>
    Event
    </Link>
    </li>
    </ul>

    {/*HandleClick */}
    <div onClick={handleClick} className="block md:hidden">
    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

     {/* Navbar Mobile menu */}
     <ul className={nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#60A5FA] flex flex-col justify-center items-center'}>
     <li className='py-6 text-4xl'>
     <Link onClick={handleClick} to='home' smooth={true} duration={500}>
     Home
     </Link>
     </li>
 
     <li className='py-6 text-4xl'>
     {' '}
     <Link onClick={handleClick} to='about' smooth={true} duration={500}>
     About
     </Link>
     </li>
 
     <li className='py-6 text-4xl'>
     {' '}
     <Link onClick={handleClick} to='explore' smooth={true} duration={500}>
     Explore
     </Link>
     </li>
 
     <li className='py-6 text-4xl'>
     {' '}
     <Link onClick={handleClick} to='event' smooth={true} duration={500}>
     Event
     </Link>
     </li>
     </ul>
    

    <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500" : "fixed left-[-100%"}>
    <h1 className="w-full text-3xl font-bold text-[#f6f1f1] m-4">Vendorspace</h1>
    <ul className="uppercase p-4">
    <li className="p-4 border-b border-gray-600">Home</li>
      <li className="p-4 border-b border-gray-600">About</li>
      <li className="p-4 border-b border-gray-600">Explore</li>
      <li className="p-4">Events</li>
    </ul>
    </div>
    </div>
    </div>
  );
  };

export default Navbar