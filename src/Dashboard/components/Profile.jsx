import React, { useEffect, useState } from "react";
import profile from "../Assets/image1.avif";
import { Link } from "react-router-dom";
import { useFirebase } from "../../Firebase/FireBase";

function Profile() {

  const [uid,setUid] = useState('')
  const firebase = useFirebase()
  const [user,setUser] = useState('')
  
  const getData =async()=>{
    if (firebase.user) {
      setUid(firebase.user.uid)
      console.log(firebase.user.uid);

      const user =await firebase.getDocs(firebase.user.uid)

      console.log(user.data());
      setUser(user.data())
    } 
  }
  useEffect(()=>{
       getData()
  })
  return (
    <div className="mx-auto px-4 h-full border border-slate-400 rounded-md mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gray-900 flex justify-center items-center mx-auto md:mx-0 my-8">
          <img
            className="w-full h-full object-cover"
            src={profile}
            alt="Profile"
          />
        </div>

        {/* Profile Info and Actions */}
        <div className="text-center md:text-left md:ml-16 flex-1">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 md:mb-10">
            {user.displayName} {uid}
          </h1>

          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-4 mb-8">
            <Link to="/Edit">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold rounded-md shadow-md w-full md:w-auto">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
