import React, { useState } from "react";
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  CogIcon,
  UserIcon,
} from "@heroicons/react/outline";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen ">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex justify-between bg-gray-800 items-center">
          <h2 className="text-xl font-semibold bg-gray-800">Menu</h2>
          <button onClick={toggleSidebar}>
            <XIcon className="h-6 w-6 bg-gray-800 text-white" />
          </button>
        </div>
        <nav className="p-4 bg-gray-900">
          <ul className="bg-gray-900">
            <li className="mb-4 flex items-center bg-gray-900 ">
              <HomeIcon className="h-5 w-5 mr-2 bg-gray-900" />
              <a href="/" className="hover:underline bg-gray-900">
                Home
              </a>
            </li>
            <li className="mb-4 flex items-center bg-gray-900">
              <UserIcon className="h-5 w-5 mr-2 bg-gray-900" />
              <Link to="/profile" className="hover:underline bg-gray-900">
                Profile
              </Link>
            </li>
            <li className="mb-4 flex items-center bg-gray-900">
              <CogIcon className="h-5 w-5 mr-2 bg-gray-900" />
              <a href="#settings" className="hover:underline bg-gray-900">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-4 ">
        <button
          onClick={toggleSidebar}
          className="text-white bg-gray-900 p-2 rounded-full focus:outline-none"
        >
          <MenuIcon className="h-6 w-6 " />
        </button>
        <div className="mt-4 mx-36 "></div>
      </div>
    </div>
  );
}

export default App;
