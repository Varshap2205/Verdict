import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth/Auth";
import Home from "./LandingPage/components/Home";

import AiBot from "./Aibot/components/AiBot";

//import Faq from "./LandingPage/components/Faq";
import PageNotFound from "./components/PageNotFound";

import Faq from "./LandingPage/components/Faq";

import Sidebar1 from "./Dashboard/components/Sidebar1";
import Profile from "./Dashboard/components/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/aibot" element={<AiBot />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="faq" element={<Faq />} />
        <Route path="/profile" element={<Sidebar1 />} />
        <Route path="/profile1" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
