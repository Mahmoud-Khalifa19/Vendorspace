import React from 'react'

const Signup = () => {
  return (
    <div className="w-full py-16 text-white">
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
    <div className="lg:col-span-2">
    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Get the newsletter</h1>
    <p>Stay in the loop with updates on new features, planning tips, and experience ideas for your next event!</p>
    <div className="my-4">
    <input className="p-3 flex w-full rounded-md text-white" type="email" placeholder="Your Email" />
    <button className="w-[200px] bg-[#86198f] rounded-md font-medium ml-4 my-5 px-6 py-3 text-white">Subscribe</button>
    </div>
    </div>
    </div> 
    </div>
  )
}

export default Signup
