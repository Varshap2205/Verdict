import React from "react";
// import PageNotFound from './components/PageNotFound';
import Poster1 from "./LandingPage/components/Poster1";
import Poster2 from "./LandingPage/components/Poster2";
import Testimonial from "./LandingPage/components/Testimonial";
import Educate from "./LandingPage/components/Educate";

function App() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Educate/>
        <Testimonial/>
        <Poster1 />
        <Poster2 />
      </div>
    </>
  );
}

export default App;
