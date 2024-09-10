import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth/Auth";
import Home from "./LandingPage/components/Home";
import AiBot from "./Aibot/components/AiBot";

import Faq from "./LandingPage/components/Faq";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/aibot" element={<AiBot />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
