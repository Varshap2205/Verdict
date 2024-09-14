<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth/User";
import Home from "./LandingPage/components/Home";

import AiBot from "./Aibot/components/AiBot";

//import Faq from "./LandingPage/components/Faq";
import PageNotFound from "./components/PageNotFound";

import Faq from "./LandingPage/components/Faq";

import Sidebar1 from "./Dashboard/components/Sidebar1";

import Page from "./Auth/Page";
import Loyer from "./Auth/Loyer";
import EditProfile from "./Dashboard/components/EditProfile";
import Profile from "./Dashboard/components/Profile";

=======
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './Auth/User';
import Home from './LandingPage/components/Home';
import  AiBot  from "./Aibot/components/AiBot"
import Faq from './LandingPage/components/Faq';
import PageNotFound from './components/PageNotFound';
import Sidebar1 from "./Dashboard/components/Sidebar1";
import Profile from "./Dashboard/components/Profile";
import Page from './Auth/Page';
import Loyer from './Auth/Loyer';

>>>>>>> 6b76de218a14d250ee8e8c624f4a3956c4cd02a9
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
<<<<<<< HEAD
        <Route path="/auth" element={<Page />}>
          <Route path="user" element={<Auth />} />
          <Route path="loyer" element={<Loyer />} />
        </Route>

=======
        
        {/* Nested route structure under /auth */}
        <Route path="/auth" element={<Page />} >
          <Route path="user" element={<Auth />} />
          <Route path="loyer" element={<Loyer />} />
        </Route>
        
>>>>>>> 6b76de218a14d250ee8e8c624f4a3956c4cd02a9
        <Route path="/aibot" element={<AiBot />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/profile" element={<Sidebar1 />} />
        <Route path="/profile1" element={<Profile />} />
<<<<<<< HEAD
        <Route path="/Edit" element={<EditProfile />} />
=======
        
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<PageNotFound />} />
>>>>>>> 6b76de218a14d250ee8e8c624f4a3956c4cd02a9
      </Routes>
    </>
  );
}

export default App;
