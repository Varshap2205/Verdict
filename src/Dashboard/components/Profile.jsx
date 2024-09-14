import React from "react";
import profile from "../Assets/image1.avif";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <>
      <div className="border-b border-gray-500 w-full h-full">
        <div className="flex flex-col lg:gap-16 md:flex-row md:space-between">
          <div className="bg-gray-900 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex justify-center items-center mx-auto md:ml-20 md:mr-40 my-10 md:my-20">
            <img
              className="w-full h-full object-cover"
              src={profile}
              alt="Profile"
            ></img>
          </div>

          <div className="flex flex-col text-center md:text-left">
            <h1 className="lg:mt-20 lg:mb-20  mb-5 text-4xl md:text-5xl mx-auto md:mx-40">
              David
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12  mb-8">
              <Link to="/Edit" className="">
                {" "}
                <button className="px-16 lg:px-20 flex text-lg justify-center py-3 bg-gray-500 w-1/3 text-white font-bold rounded-md ml-10">
                  Edit
                </button>
              </Link>
              <button className="px-5 py-3 bg-gray-500 w-1/3 text-white font-bold rounded-md text-lg">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
