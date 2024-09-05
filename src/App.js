<<<<<<< HEAD
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './LandingPage/Home';
=======
import React from "react";
// import PageNotFound from './components/PageNotFound';
import Poster1 from "./LandingPage/components/Poster1";
import Poster2 from "./LandingPage/components/Poster2";
import Testimonial from "./LandingPage/components/Testimonial";
import Educate from "./LandingPage/components/Educate";
>>>>>>> bcd89f42e8697f2122ca63898696703d7db29fda

function App() {
  return (
    <>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Auth />} />
      </Routes>
=======
      <div className="flex flex-col gap-3 mt-2">
        <Educate/>
        <Testimonial/>
        <Poster1 />
        <Poster2 />
      </div>
>>>>>>> bcd89f42e8697f2122ca63898696703d7db29fda
    </>
  );
}

export default App;
