import React from 'react'
import Caterer from '../assets/caterer.jpg';

const Content = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      <img className="w-[500px] mx-auto my-4" src={Caterer} alt="/" />
      <div className="flex flex-col justify-center">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Connect with vendors that can bring your event to life.</h1>
      <p className="">From DJs and singers to audio visual and party rentals, its easy to find the services you need for your special occasion.</p>
      <button className="w-[200px] bg-[#86198f] rounded-full font-medium my-6 mx-auto md:mx-0 py-3 text-white">Get Started</button>
      </div>
    </div>
  </div>
  )
}

export default Content
