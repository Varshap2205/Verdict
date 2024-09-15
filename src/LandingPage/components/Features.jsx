import React from 'react'
import { GoLaw } from "react-icons/go";
import { SiWritedotas } from "react-icons/si";
import { FaPeopleLine } from "react-icons/fa6";

function Features() {
  return (
    <section className='w-[95%] mx-auto' id='features'>
      <h1 className="text-center mb-5 capitalize pl-7 font-bold text-4xl md:text-5xl">Features</h1>
      <div className='grid grid-cols md:grid-cols-3 gap-3'>
        {FeatureData.map((e) => (
          <div key={e.id} className='bg-[#3c4043] text-white flex flex-col justify-center items-center py-2 px-3 rounded-lg'>
            <button className='flex items-center'>{e.photo}</button>
            <p className='bg-[#3c4043] text-center text-xl'>{e.name}</p>
            <p className='bg-[#3c4043] mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ducimus distinctio nisi fugit officia blanditiis laborum sunt, velit eaque cupiditate necessitatibus harum, eligendi consequuntur atque repellendus veniam. Delectus, nulla deserunt!</p>
          </div>
        ))}
      </div>
    </section>
  )

}

export default Features

const FeatureData = [
  {
    id: 1,
    photo: <GoLaw size={60} className='bg-[#3c4043]' />,
    name: "AI based Laywer"
  },
  {
    id: 2,
    photo: <SiWritedotas size={60} className='bg-[#3c4043]' />,
    name: "Blogs"
  },
  {
    id: 1,
    photo: <FaPeopleLine size={60} className='bg-[#3c4043]' />,
    name: "Hire lawyers"
  }
]