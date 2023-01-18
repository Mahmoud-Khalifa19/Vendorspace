import React from 'react'
import Mechanics from '../assets/mechanics.jpg';

const Newsletter = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      <img className="w-[500px] mx-auto my-4" src={Mechanics} alt="/" />
      <div className="flex flex-col justify-center">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Hire the right vendors every time.</h1>
      <p className="">We vet every vendor in our marketplace to ensure you  get top-notch service and support for your event. Vendors also earn reviews so you can compare the quality of service.</p>
      <button className="w-[200px] bg-[#86198f] rounded-full font-medium my-6 mx-auto md:mx-0 py-3 text-white">Get Started</button>
      </div>
    </div>
  </div>
  )
}

export default Newsletter
