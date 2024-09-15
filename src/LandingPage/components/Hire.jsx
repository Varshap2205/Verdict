import React from 'react';
import lawyer from './assets/laywerImg.jpeg'
import { IoMdArrowForward } from "react-icons/io";

const Hire = () => {
  return (
    <section className="w-[95%] rounded-xl mx-auto flex flex-col md:flex-row items-center justify-between bg-[#3c4043] text-white p-6 md:p-12">
      {/* Image Container */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src={lawyer}
          alt="Know Your Rights"
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Text Container */}
      <div className="bg-[#3c4043] w-full md:w-1/2 flex flex-col items-start md:pl-10">
        <h1 className="bg-[#3c4043] text-4xl md:text-5xl font-bold mb-4">Hire the right lawyers!</h1>
        <p className="mb-6 text-lg bg-[#3c4043]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquam itaque voluptas autem, unde aspernatur.
        </p>
        <button className="text-white text-lg capitalize bg-blue-500 px-4 py-2 rounded-md transform hover:scale-110 transition-transform duration-600 hover:font-bold flex items-center ml-6">
          learn more!
          <span className="flex ml-2">
            <IoMdArrowForward className="text-white bg-blue-500 outline-none" size={20}/>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hire;
