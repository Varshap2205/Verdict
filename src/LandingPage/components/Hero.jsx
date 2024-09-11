import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from "react-icons/io";

function Hero() {
  return (
    <section id='Hero' className='w-[90%] mx-auto p-5 flex flex-col items-center justify-center gap-3 md:gap-2'>
      <h1 className='text-3xl md:text-6xl lg:text-7xl capitalize text-center'>Justice served right.</h1>
      <h1 className='text-3xl md:text-6xl lg:text-7xl capitalize text-center'><span className='text-blue-500'>Verdict</span>  is here!</h1>
      <Link to="/login">
            <button className="text-white text-lg capitalize bg-blue-500 px-4 py-2 rounded-md transform hover:scale-110 transition-transform duration-600 hover:font-bold flex items-center ml-6">
              Try Now!
              <span className="flex ml-2">
                <IoMdArrowForward
                  className="text-white bg-blue-500 outline-none"
                  size={20}
                />
              </span>
            </button>
          </Link>
    </section>
  )
}

export default Hero