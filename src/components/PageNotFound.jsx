import React from 'react'

function PageNotFound() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-5 pt-8 md:pt-10'>
        <h1 className='text-4xl md:text-6xl text-center font-semibold'>Page Not Found!</h1>
        <button className='text-xl bg-blue-500 px-6 py-2 rounded-lg'>Return Home</button>
    </div>
  )
}

export default PageNotFound