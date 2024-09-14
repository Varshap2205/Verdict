import React from 'react';
import lawyer from './assets/laywerImg.jpeg'

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
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
          Hire now!
        </button>
      </div>
    </section>
  );
};

export default Hire;
