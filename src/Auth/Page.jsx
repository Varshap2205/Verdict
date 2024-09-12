import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

const Page = () => {
   const [active,setActive ]= useState(true)
  return (
    <>
       <div className=' flex w-full justify-center gap-10'>
        <div className={` w-[50%] flex justify-center border-b p-2 font-semibold m-5 ${active?"border-blue-500":""}`} onClick={()=>setActive(true)}>
            <Link to='/auth/user' >Login to get Loyer</Link>
        </div>
        <div className={` w-[50%] flex justify-center border-b p-2 font-semibold m-5 ${active?"":"border-blue-500"} `} onClick={()=>setActive(false)}>
            <Link to='/auth/loyer'>Login as Loyer</Link>
        </div>
       </div>
       <Outlet/>
    </>
   
  )
}

export default Page