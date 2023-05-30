import React from 'react'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaLinkedinIn,
    FaYoutube
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
      <h1 className="w-full text-3xl font-bold text-[#a21caf]">vendor<span className="text-[#0ea5e9] font-bold">
    space</span>
    </h1>
    <div className="flex justify-between md:w-[75%] my-6">
      <FaFacebookSquare size={30} />
      <FaInstagram size={30} />
      <FaTwitterSquare size={30} />
      <FaLinkedinIn size={30} />
      <FaYoutube size={30} />
    </div>
      </div>
      <div className="lg:col-span-3 flex justify-between">
      <div>
        <ul>
          <li className="py-2 text-sm">Sign Up</li>
          <li className="py-2 text-sm">Get Started</li>
          <li className="py-2 text-sm">Vendorspace 101</li>
          <li className="py-2 text-sm">Event Inspiration</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
