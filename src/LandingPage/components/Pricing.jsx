import React from 'react'
import tick from './assets/tick.jpeg'

function Pricing() {
  return (
    <div className='bg-black min-h-screen flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-10 p-5'>
    
      <div className='font-mono font-bold w-full md:w-[45%] h-min rounded-lg p-9 text-4xl text-center border-blue-500'>
        Free
        <div>
          <ul>
            <li className='flex mb-5'>
              <img src={tick} alt="nn" className='w-6 h-6'/>
              <h2 className='font-mono font-light text-2xl text-left ml-5 pb-5 border-blue-500 w-full border-4'>
                Basic Legal Information & Resources
              </h2>
            </li>
            <li className='flex mb-5'>
              <img src={tick} alt="nn" className='w-6 h-6'/>
              <h2 className='font-mono font-light text-2xl text-left ml-5 pb-5 border-blue-500 w-full border-4'>
                Chatbot for Queries
              </h2>
            </li>
            <li className='flex mb-5'>
              <img src={tick} alt="nn" className='w-6 h-6'/>
              <h2 className='font-mono font-light text-2xl text-left ml-5 pb-5 border-blue-500 w-full border-4'>
                Basic Legal Information & Resources
              </h2>
            </li>
            <li className='flex mb-5'>
              <img src={tick} alt="nn" className='w-6 h-6'/>
              <h2 className='font-mono font-light text-2xl text-left ml-5 pb-5 border-blue-500 w-full border-4'>
                24/7 Customer Support
              </h2>
            </li>
          </ul>
        </div>
      </div>

      {/* Subscription Pricing Section */}
      <div className='font-mono font-bold border-blue-500 w-full md:w-[45%] h-min rounded-lg p-9 text-4xl text-center'>
        Subscription
        <div>
          <ul>
            <li className='flex mb-5'>
              <img src={tick} alt="nn" className='w-6 h-6'/>
              <h2 className='font-mono font-light text-2xl text-left ml-5 pb-5 border-blue-500 w-full border-4'>
                Comprehensive Legal Assistance
              </h2>
            </li>
            <li className='flex mb-5'>
              <img src={tick} alt="nn" className='w-6 h-6'/>
              <h2 className='font-mono font-light text-2xl text-left ml-5 pb-5 border-blue-500 w-full border-4'>
                Direct Communication with Law Practitioners
              </h2>
            </li>
            <li className='flex mb-5'>
              <img src={tick} alt="nn" className='w-6 h-6'/>
              <h2 className='font-mono font-light text-2xl text-left ml-5 pb-5 border-blue-500 w-full border-4'>
                Document Upload & Case Management
              </h2>
            </li>
            <li className='flex mb-5'>
              <img src={tick} alt="nn" className='w-6 h-6'/>
              <h2 className='font-mono font-light text-2xl text-left ml-5 pb-5 border-blue-500 w-full border-4'>
                Advanced Case Analytics
              </h2>
            </li>
            <li className='flex mb-5'>
              <img src={tick} alt="nn" className='w-6 h-6'/>
              <h2 className='font-mono font-light text-2xl text-left ml-5 pb-5 border-blue-500 w-full border-4'>
                24/7 Customer Support
              </h2>
            </li>
            <li className='flex mb-5'>
              <img src={tick} alt="nn" className='w-6 h-6'/>
              <h2 className='font-mono font-light text-2xl text-left ml-5 pb-5 border-blue-500 w-full border-4'>
                Chatbot for Queries
              </h2>
            </li>
          </ul>
          <button className='bg-blue-500'>Get Subscription</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
