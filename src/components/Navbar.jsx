import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling between sections
import { Link } from "react-router-dom"; // For routing between pages

function Navbar() {
  const [nav, setNav] = useState(false);

  // Toggle mobile menu
  const handleNav = () => {
    setNav(!nav);
  };

  // Close the menu after clicking any link
  const closeMenu = () => {
    setNav(false);
  };

  return (
    <>
      {/* Sticky navbar */}
      <nav className="bg-black sticky top-0 w-full p-5 border-b border-gray-800 text-white flex justify-between items-center z-50">
        <h1 className="text-2xl md:text-3xl font-bold cursor-pointer">
          Verdict
        </h1>

        {/* Desktop Menu */}
        <ul className="gap-4 hidden md:flex items-center">
          {NavData.map((d) => (
            <li key={d.id} className="nav">
              <ScrollLink
                to={d.link} // Smooth scroll to section
                smooth={true}
                duration={500}
                offset={-80} // Adjust for navbar height
                spy={true}
                activeClass="active"
              >
                {d.title}
              </ScrollLink>
            </li>
          ))}
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
        </ul>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden cursor-pointer z-50" onClick={handleNav}>
          {!nav ? <IoIosMenu size={25} /> : <MdClose size={25} />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          nav ? "translate-y-0 opacity-100" : "translate-y-[-200%] opacity-0"
        } transform transition-all duration-500 ease-in-out bg-black fixed top-0 left-0 w-full h-screen md:hidden flex flex-col items-center gap-6 py-5 z-40`}
      >
        <ul className="flex flex-col items-center gap-5">
          {NavData.map((d) => (
            <li key={d.id} className="text-white cursor-pointer text-lg">
              <ScrollLink
                to={d.link} // Smooth scroll to section
                smooth={true}
                duration={500}
                offset={-80} // Adjust for navbar height
                spy={true}
                activeClass="active"
                onClick={closeMenu} // Close mobile menu on click
              >
                {d.title}
              </ScrollLink>
            </li>
          ))}

          {/* Link to Login page */}
          <Link to="/login" onClick={closeMenu}>
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
        </ul>
      </div>
    </>
  );
}

export default Navbar;

// Your NavData
const NavData = [
  { id: 1, title: "Home", link: "home" },
  { id: 2, title: "Features", link: "features" },
  { id: 3, title: "Pricing", link: "pricing" },
  { id: 4, title: "Testimonials", link: "testimonials" },
  { id: 5, title: "FAQs", link: "faqs" },
];
