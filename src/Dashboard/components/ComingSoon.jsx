import React from 'react';
import Sidebar1 from './Sidebar1'; // Make sure the path to Sidebar1 is correct

const ComingSoon = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Section */}
      <Sidebar1 />

      {/* Main Content Section */}
      <div className="flex-1 flex items-center justify-center bg-black">
        <h1 className="text-5xl font-bold">Coming Soon...</h1>
      </div>
    </div>
  );
};

export default ComingSoon;
