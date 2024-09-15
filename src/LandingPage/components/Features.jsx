import React from 'react'
import pics1 from './assets/pics1.jpeg'
import pics2 from './assets/pics2.jpeg'
import pics3 from './assets/pics3.jpeg'
import pics4 from './assets/pics4.jpeg'

function Features() {
  return (
    <div className='bg-black'>
      <div className='flex justify-center items-center pt-5 text-3xl sm:text-5xl md:text-6xl font-bold font-mono text-white'>
        Features
      </div>

      <div className='flex flex-wrap justify-center items-center text-white overflow-hidden'>
      
        <div className='bg-blue-500 w-64 sm:w-72 h-auto m-5 rounded-md relative group'>
          <img
            src={pics1}
            alt="User Rights Awareness"
            className='rounded-full w-24 h-24 sm:w-32 sm:h-32 block mx-auto p-1 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-lg'
          />
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white group-hover:rounded-lg transition-all duration-300 ease-in-out"></div>
          <h1 className='font-mono font-bold text-xl sm:text-2xl text-center mt-4'>User Rights Awareness</h1>
          <p className='text-sm sm:text-lg p-3 text-center'>
            Users can access detailed information about their rights in consumer court cases and commercial disputes.
          </p>
        </div>

        <div className='bg-blue-500 w-64 sm:w-72 h-auto m-5 rounded-md relative group'>
          <img
            src={pics2}
            alt="Interactive Chatbot"
            className='rounded-full w-24 h-24 sm:w-32 sm:h-32 block mx-auto p-1 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-lg'
          />
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white group-hover:rounded-lg transition-all duration-300 ease-in-out"></div>
          <h1 className='font-mono font-bold text-xl sm:text-2xl text-center mt-4'>Interactive Chatbot</h1>
          <p className='text-sm sm:text-lg p-3 text-center'>
            An AI-powered chatbot assists users by answering frequently asked legal questions related to consumer courts and helps guide them through their legal queries.
          </p>
        </div>

        <div className='bg-blue-500 w-64 sm:w-72 h-auto m-5 rounded-md relative group'>
          <img
            src={pics3}
            alt="Case Management"
            className='rounded-full w-24 h-24 sm:w-32 sm:h-32 block mx-auto p-1 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-lg'
          />
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white group-hover:rounded-lg transition-all duration-300 ease-in-out"></div>
          <h1 className='font-mono font-bold text-xl sm:text-2xl text-center mt-4'>Case Management</h1>
          <div className='text-sm sm:text-lg p-3 text-center'>
            Users' case statuses are visually represented:
            <ul className='list-disc list-inside'>
              <li>Red: Case not yet solved or assigned.</li>
              <li>Orange: Case is taken by a law practitioner and is being worked on.</li>
              <li>Green: Case successfully resolved.</li>
            </ul>
          </div>
        </div>

        <div className='bg-blue-500 w-64 sm:w-72 h-auto m-5 rounded-md relative group'>
          <img
            src={pics4}
            alt="Connection with Law Practitioners"
            className='rounded-full w-24 h-24 sm:w-32 sm:h-32 block mx-auto p-1 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-lg'
          />
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white group-hover:rounded-lg transition-all duration-300 ease-in-out"></div>
          <h1 className='font-mono font-bold text-xl sm:text-2xl text-center mt-4'>Connection with Law Practitioners</h1>
          <p className='text-sm sm:text-lg p-3 text-center'>
            The platform connects users with verified law practitioners who can take up their cases and help resolve them.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Features;
