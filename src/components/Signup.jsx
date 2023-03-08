import React from 'react'

const Signup = () => {
  return (
    <div className="w-full py-16 text-white px-4">
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
    <div className="lg:col-span-2 my-4">
    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
    Get the newsletter
    </h1>
    <p>Stay in the loop with updates on new features, planning tips, and experience ideas for your next event!</p>
    </div>
    <div className="my-4">
    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
    <input className="p-3 flex w-full rounded-md text-white" 
    type="email" 
    placeholder="Enter Email" 
    />
    <button className="w-[200px] bg-[#86198f] rounded-md font-medium ml-4 my-5 px-6 py-3 text-white">Subscribe</button>
    </div>
    <p>We care about the protection of your data. Read our {''} <span className="text-[#86198f]">Privacy Policy</span></p>
    </div>
    </div>
    </div> 
  
  )
}

export default Signup
