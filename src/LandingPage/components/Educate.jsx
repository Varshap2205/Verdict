import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import blogPhoto from "./assets/blogPhoto.jpg";

function Educate() {
  return (
    <section
      id="educate"
      className="w-[95%] mx-auto rounded-xl bg-[#3c4043] p-5 grid grid-cols-1 md:grid-cols-2"
    >
      <div className="flex flex-col justify-center items-start gap-3 bg-[#3c4043]">
        <h1 className="text-start capitalize bg-[#3c4043] pl-7 font-bold text-4xl md:text-5xl">Know your rights!</h1>
        <p className='bg-[#3c4043] pl-7 mb-3'>
          {"Empowering You with Knowledge: Navigate Consumer Rights and Courts\
          with Confidence – Your Guide to Understanding and Defending Your\
          Rights."}
        </p>
        <button className="text-white text-lg capitalize bg-blue-500 px-4 py-2 rounded-md transform hover:scale-110 transition-transform duration-600 hover:font-bold flex items-center ml-6">
          learn more!
          <span className="flex ml-2">
            <IoMdArrowForward className="text-white bg-blue-500 outline-none" size={20}/>
          </span>
        </button>
      </div>
      <div className="mt-3 md:mt-none md:rounded-md">
        <img src={blogPhoto} alt="blogging" className='w-[100%]' />
      </div>
    </section>
  );
}

export default Educate;
