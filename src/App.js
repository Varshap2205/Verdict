

import Auth from "./Auth/User";
import Home from "./LandingPage/components/Home";

import AiBot from "./Aibot/components/AiBot";

//import Faq from "./LandingPage/components/Faq";
import PageNotFound from "./components/PageNotFound";

import Faq from "./LandingPage/components/Faq";

import React from 'react';
import { Route,Routes } from 'react-router-dom';


import Sidebar1 from "./Dashboard/components/Sidebar1";

import Page from './Auth/Page';
import Loyer from './Auth/Loyer';
import Blog from './Blog/Blog'
import HowItWorks from './HTU/HowToUSe'

import Profile from "./Dashboard/components/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        
        
        <Route path="/auth" element={<Page />} >
          <Route path='user' element={<Auth/>}/>
          <Route path='loyer' element={<Loyer/>}/>
        </Route>

        <Route path="/login" element={<Auth />} />
        <Route path="/aibot" element={<AiBot />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="faq" element={<Faq />} />
        <Route path="/profile" element={<Sidebar1 />} />
        <Route path="/profile1" element={<Profile />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/howitworks" element={<HowItWorks/>}/>
        

        

      </Routes>
    </>
  );
}

export default App;
