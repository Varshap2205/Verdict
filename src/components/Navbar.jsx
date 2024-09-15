import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll
import { Link } from "react-router-dom"; // For other routing

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  
  return (
    <>
      <nav className="bg-black sticky top-0 w-full p-5 border-b border-gray-800 text-white flex justify-around items-center">
        <h1 className="text-2xl md:text-3xl font-bold cursor-pointer">
          Verdict
        </h1>
        <ul className="gap-4 hidden md:flex items-center">
          {NavData.map((d) => (
            <li key={d.id} className="nav">
              <ScrollLink
                to={d.link} // Refers to the section ID
                smooth={true} // Enable smooth scrolling
                duration={500} // Scrolling duration
                offset={-80} // Adjust according to your navbar height
                spy={true} // Optional: makes link active when section is in view
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

        <div className="block md:hidden cursor-pointer" onClick={handleNav}>
          {!nav ? <IoIosMenu size={25} /> : <MdClose size={25} />}
        </div>
      </nav>

      <div
        className={`${
          nav ? "translate-y-0 opacity-100" : "translate-y-[-200%] opacity-0"
        } transform transition-all duration-500 ease-in-out bg-black absolute top-[80px] left-0 w-full md:hidden flex flex-col items-center gap-6 py-5 z-50`}
      >
        <ul className="flex flex-col items-center gap-5">
          {NavData.map((d) => (
            <li key={d.id} className="text-white cursor-pointer text-lg">
              <ScrollLink
                to={d.link} 
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="active"
                onClick={handleNav} // Close mobile menu on click
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
