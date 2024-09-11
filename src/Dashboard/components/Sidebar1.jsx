"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

function Sidebar1() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative">
      {/* Hamburger menu icon (visible only when sidebar is closed) */}
      {!nav && (
        <div className="p-4 cursor-pointer" onClick={handleNav}>
          <IoIosMenu size={30} />
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 w-[70%] sm:w-[50%] md:w-[20%] h-full bg-[#3c4043] p-5 transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className=" bg-[#3c4043] flex justify-end">
          {/* Close icon (visible only when sidebar is open) */}
          <IoMdClose
            size={30}
            className="bg-[#3c4043] cursor-pointer text-white"
            onClick={handleNav}
          />
        </div>
        <ul className="flex flex-col gap-5 uppercase text-xl text-white bg-[#3c4043] hover:text-blue-400">
          <li className="bg-[#3c4043] border-b border-gray-200 py-2 cursor-pointe hover:text-blue-500">
            Home
          </li>
          <li className="bg-[#3c4043] border-b border-gray-200 py-2 cursor-pointer hover:text-blue-400">
            Verdict AI
          </li>
          <li className="bg-[#3c4043] border-b border-gray-200 py-2 cursor-pointer hover:text-blue-400">
            Hire a lawyer
          </li>
          <li className="bg-[#3c4043] border-b border-gray-200 py-2 cursor-pointer hover:text-blue-400">
            Blogs
          </li>
        </ul>
      </div>

      {/* Overlay (visible only when sidebar is open) */}
      {nav && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={handleNav}
        ></div>
      )}
    </div>
  );
}

export default Sidebar1;
