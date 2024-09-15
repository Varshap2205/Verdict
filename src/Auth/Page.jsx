import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

const Page = () => {
   const [active,setActive ]= useState(true)
  return (
    <>
       <div className=' flex w-full justify-center gap-10'>
        <div className={` w-[50%] flex justify-center border-b p-2 font-semibold m-5 ${active?"border-blue-500 ":""}`} onClick={()=>setActive(true)}>
            <Link to='/auth/user' className={` text-lg ${active?"bg-blue-500":" "} p-1 w-full text-center rounded-md`}>User can go here!</Link>
        </div>
        <div className={` w-[50%] flex justify-center border-b p-2 font-semibold m-5 ${active?"":"border-blue-500"} `} onClick={()=>setActive(false)}>
            <Link to='/auth/lawyer' className={` text-lg ${active?"":"bg-blue-500 "} p-1 w-full text-center rounded-md`}>Lawyer can go here</Link>
        </div>
       </div>
       <Outlet/>
    </>
   
  )
}

export default Page