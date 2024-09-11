<<<<<<< HEAD

import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import Home from './LandingPage/components/Home';
import { AiBot } from './Aibot/AiBot';
import Navbar from './components/Navbar';

=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth/Auth";
import Home from "./LandingPage/components/Home";
import { AiBot } from "./Aibot/AiBot";
import Faq from './LandingPage/components/Faq'
import PageNotFound from './components/PageNotFound'
import Sidebar1 from "./Dashboard/components/Sidebar1";
>>>>>>> 20a32989a2900d6be88a8dc57d4d3a6f0d7c0f5b
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
<<<<<<< HEAD
        <Route path="/aibot" element={<AiBot/>}/>
=======
        <Route path="aibot" element={<AiBot />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='faq' element={<Faq/>}/>
        <Route path='/profile' element={<Sidebar1/>}></Route>
>>>>>>> 20a32989a2900d6be88a8dc57d4d3a6f0d7c0f5b
      </Routes>
    </>
  );
}

export default App;
