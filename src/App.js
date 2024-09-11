import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import Home from './LandingPage/components/Home';
import { AiBot } from './Aibot/AiBot';
import Navbar from './components/Navbar';
import Faq from './LandingPage/components/Faq'
import PageNotFound from './components/PageNotFound'
import Sidebar1 from "./Dashboard/components/Sidebar1";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/aibot" element={<AiBot/>}/>
        <Route path="aibot" element={<AiBot />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='faq' element={<Faq/>}/>
        <Route path='/profile' element={<Sidebar1/>}/>
      </Routes>
    </>
  );
}

export default App;
