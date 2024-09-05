import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10 px-5 md:px-0">
        <div>
          <h3 className="font-bold text-gray-400 mb-4">WHAT</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                How it Works
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Security
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Docs
              </a>
            </li>
          </ul>
        </div>

    
        <div>
          <h3 className="font-bold text-gray-400 mb-4">WHO</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-bold text-gray-400 mb-4">CONNECT</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="container mx-auto mt-10 px-5 md:px-0">
        <h3 className="font-bold text-gray-400 mb-4">SUBSCRIBE TO UPDATES</h3>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Your email"
            className="w-full sm:w-auto px-4 py-2 border border-gray-600 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className='px-6 py-2 bg-blue-500 rounded-md'>Subscribe</button>
        </div>
      </div>

    
      <div className="container mx-auto mt-10 border-t border-gray-600 pt-5 flex flex-col sm:flex-row justify-between items-center gap-4 px-5 md:px-0">
        <p className="text-gray-400 text-sm">
          © 2024 Verdict. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 text-sm hover:text-gray-200">
            Terms
          </a>
          <a href="#" className="text-gray-400 text-sm hover:text-gray-200">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;