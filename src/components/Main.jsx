import React from 'react'
import Typed from 'react-typed';
import { Link } from'react-scroll';


export const Main = () => {
  return (
    <div className="text-white">
    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
    <h1 className="md:text-7xl sm:text-6xl text-3xl font-bold md:py-6">
    Hire from anywhere
    </h1>
    <Typed
    className="md:text-5xl sm:text-4xl text-xl font-bold pl-2" 
    strings = {['DJs.', 'caterers.', 'hosts.', 'Photographers.', 'Party rentals']} 
    typeSpeed={120}
    backSpeed={140}
    loop
    />
    <div className="flex justify-center items-center">
    <p className="md:text-4xl sm:text-4xl text-xl font-bold py-4">
    Discover all the vendors you need in one place.
    </p>
    </div>
    <button className="w-[200px] bg-[#86198f] rounded-full font-medium my-6 mx-auto py-3 text-white">Get Started
    </button>
    </div>
    </div>
  );
}

export default Main
