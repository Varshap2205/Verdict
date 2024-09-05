import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="bg-black stciky top-0 relative w-full p-5 border-b border-gray-300 text-white flex justify-around items-center">
        <h1 className="font-serif text-xl md:text-2xl font-bold cursor-pointer">
          Verdict
        </h1>

        <ul className="gap-4 hidden md:flex items-center">
          {NavData.map((d) => (
            <li key={d.id} className="text-white cursor-pointer md:text-lg">
              {d.title}
            </li>
          ))}
          <button className="text-white bg-blue-500 px-4 py-2 rounded-md transform hover:scale-110 transition-transform duration-600 hover:font-bold">
            Try Now!
          </button>
        </ul>

        <div className="block md:hidden cursor-pointer" onClick={handleNav}>
          {!nav ? <IoIosMenu size={25} /> : <MdClose size={25} />}
        </div>
      </nav>

      <div
        className={`${
          nav ? "translate-y-0 opacity-100" : "translate-y-[-200%] opacity-0"
        } transform transition-all duration-500 ease-in-out bg-black absolute top-15 left-0 w-full md:hidden flex flex-col items-center gap-6 py-5 z-50`}
      >
        <ul className="flex flex-col items-center gap-5">
          {NavData.map((d) => (
            <li key={d.id} className="text-white cursor-pointer text-lg">
              {d.title}
            </li>
          ))}
          <button className="text-white bg-blue-500 px-4 py-2 rounded-md">
            Try Now!
          </button>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

const NavData = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Features", link: "/" },
  { id: 3, title: "Testimonials", link: "/" },
  { id: 4, title: "Pricing", link: "/" },
];
