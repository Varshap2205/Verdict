<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth/Auth";
import Home from "./LandingPage/components/Home";

import AiBot from "./Aibot/components/AiBot";

//import Faq from "./LandingPage/components/Faq";
import PageNotFound from "./components/PageNotFound";

import Faq from "./LandingPage/components/Faq";

=======
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Auth from './Auth/User';
import Home from './LandingPage/components/Home';
import { AiBot } from './Aibot/AiBot';
import Faq from './LandingPage/components/Faq'
import PageNotFound from './components/PageNotFound'
>>>>>>> 9e4ba2a3c2116c43c64012567b013f2549e7ced3
import Sidebar1 from "./Dashboard/components/Sidebar1";
<<<<<<< HEAD
import Page from './Auth/Page';
import Loyer from './Auth/Loyer';


=======
import Profile from "./Dashboard/components/Profile";
>>>>>>> f3f47e74c2ea891568857a0cc058cfe5f5d3cb12
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path='/login' element={<Auth/>}/>
        
        <Route path="/auth" element={<Page />} >
          <Route path='user' element={<Auth/>}/>
          <Route path='loyer' element={<Loyer/>}/>
        </Route>

=======
        <Route path="/login" element={<Auth />} />
<<<<<<< HEAD
        <Route path="/aibot" element={<AiBot />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="faq" element={<Faq />} />
        <Route path="/profile" element={<Sidebar1 />} />
        <Route path="/profile1" element={<Profile />} />
=======
>>>>>>> f3f47e74c2ea891568857a0cc058cfe5f5d3cb12
        <Route path="/aibot" element={<AiBot/>}/>
        <Route path="aibot" element={<AiBot />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='faq' element={<Faq/>}/>
        <Route path='/profile' element={<Sidebar1/>}/>
>>>>>>> 9e4ba2a3c2116c43c64012567b013f2549e7ced3
      </Routes>
    </>
  );
}

export default App;
