"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { useFirebase } from "../../Firebase/FireBase"; // Ensure this is correct
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Sidebar1() {
  const firebase = useFirebase();
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    // Prevent the click event from closing the sidebar
    e.stopPropagation();
    
    try {
      await firebase.logOut(); // Ensure logOut is properly implemented in Firebase
      navigate("/"); // Redirect after successful logout
    } catch (error) {
      console.error("Error logging out:", error);
      // You can show an error message to the user here if needed
    }
  };

  return (
   <>
      <div className="">
        {nav?(
          <>
            <div className="bg-[#161616] flex flex-col w-[13rem] h-[100vh]">
              <div className="bg-[#161616] rounded-full ml-1 mt-2" onClick={()=>setNav(false)}>
                <IoMdClose size={35} className="bg-[#161616] rounded-full p-1"/>
              </div>
              <div className="bg-[#161616] flex flex-col rounded-full mt-1 p-2">
                <div className="bg-[#161616] w-[10rem] border-b mt-2 ">
                   <Link to='/#' className="bg-[#161616] text-xl">Home</Link>
                </div>
                <div className="bg-[#161616] w-[10rem] border-b mt-2 ">
                   <Link to='/#' className="bg-[#161616] text-xl">Verdict AI</Link>
                </div>
                <div className="bg-[#161616] w-[10rem] border-b mt-2 ">
                   <Link to='/#' className="bg-[#161616] text-xl">Hire a lawyer</Link>
                </div>
                <div className="bg-[#161616] w-[10rem] border-b mt-2 ">
                   <Link to='/#' className="bg-[#161616] text-xl">Blogs</Link>
                </div>
                <div className="bg-[#161616] w-[10rem] border-b mt-2 ">
                  <button onClick={handleSignOut} className="text-xl">Log out</button>
                </div>
              </div>
            </div>
          </>
          
        ):(
          <>
           <div className="mt-6 ml-6 cursor-pointer  " onClick={()=>setNav(true)}>
             <IoIosMenu size={35} className="bg-[#161616] rounded-full p-1"/>
           </div>
          </>
        )}
      </div>
   </>
  );
}

export default Sidebar1;
