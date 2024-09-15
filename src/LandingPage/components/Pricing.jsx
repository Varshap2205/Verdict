import React from 'react';
// import tick from './assets/tick.jpeg'

function Pricing() {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-center gap-10 p-4' id='pricing'>
        
        <div className="w-full lg:w-1/3 bg-[#3c4043] text-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 bg-[#3c4043]">Free plan</h2>
          <div className="text-4xl font-extrabold mb-4 bg-[#3c4043]">
            Free<span className="text-lg font-medium"></span>
          </div>
          <ul className="mb-6 text-xl bg-[#3c4043]">
            <li className="flex items-center mb-2 bg-[#3c4043]">
              <span className="text-blue-500 mr-2 bg-[#3c4043]">✔️</span> AI Powered Chatbot Assistance
            </li>
            <li className="flex items-center mb-2 bg-[#3c4043]">
              <span className="text-blue-500 mr-2 bg-[#3c4043]">✔️</span> Access to Blogs & Articles
            </li>
            <li className="flex items-center mb-2 bg-[#3c4043]">
              <span className="text-blue-500 mr-2 bg-[#3c4043]">✔️</span> Community Support
            </li>
            <li className="flex items-center mb-2 bg-[#3c4043]">
              <span className="text-blue-500 mr-2 bg-[#3c4043]">✔️</span> Users can Hire Lawyers and Upload Case Documents
            </li>
          </ul>
          <button className="w-full py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg mt-44">
            Choose plan
          </button>
        </div>

        {/* Standard Plan */}
        <div className="w-full lg:w-1/3 bg-[#3c4043] text-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 bg-[#3c4043]">Standard plan</h2>
          <div className="text-4xl font-extrabold mb-4 bg-[#3c4043]">
            $49<span className="text-lg font-medium bg-[#3c4043]">/month</span>
          </div>
          <ul className="mb-6 text-xl bg-[#3c4043]">
            <li className="flex items-center mb-2 bg-[#3c4043]">
              <span className="text-blue-500 mr-2 bg-[#3c4043]">✔️</span> AI Powered Chatbot Assistance
            </li>
            <li className="flex items-center mb-2 bg-[#3c4043]">
              <span className="text-blue-500 mr-2 bg-[#3c4043]">✔️</span> Access to Blogs & Articles
            </li>
            <li className="flex items-center mb-2 bg-[#3c4043]">
              <span className="text-blue-500 mr-2 bg-[#3c4043]">✔️</span> Community Support
            </li>
            <li className="flex items-center mb-2 bg-[#3c4043]">
              <span className="text-blue-500 mr-2 bg-[#3c4043]">✔️</span> Users can Hire Lawyers and Upload Case Documents
            </li>
            <li className="flex items-center mb-2 bg-[#3c4043]">
              <span className="text-blue-500 mr-2 bg-[#3c4043]">✔️</span> Users can register themselves as Lawyers with License attached
            </li>
            <li className="flex items-center mb-2 bg-[#3c4043]">
              <span className="text-blue-500 mr-2 bg-[#3c4043]">✔️</span> Status Of The Case Can Be Seen
            </li>
          </ul>
          <button className="w-full py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg mt-[75px]">
            Choose plan
          </button>
        </div>
      </div>
    </>
  );
}

export default Pricing;
