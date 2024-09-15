import React from "react";
import { Route, Routes } from "react-router-dom";

import Auth from "./Auth/User";
import Home from "./LandingPage/components/Home";
import AiBot from "./Aibot/components/AiBot";
import Faq from "./LandingPage/components/Faq";
import PageNotFound from "./components/PageNotFound";
import Profile from "./Dashboard/components/Profile";
import Page from "./Auth/Page";
import Lawyer from "./Auth/Lawyer";
import EditProfile from "./Dashboard/components/EditProfile";
import ProfilePage from "./Dashboard/ProfilePage";
import HTU from '../src/HTU/HowToUSe'
import Blog from "./Blog/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Auth />} />
        {/* Nested route structure under /auth */}
        <Route path="/auth" element={<Page />}>
          <Route path="user" element={<Auth />} />
          <Route path="lawyer" element={<Lawyer />} />
        </Route>

        <Route path="/edit" element={<EditProfile />} />
        <Route path='howitworks' element={<HTU />} />
        <Route path='/blog' element={<Blog />} />
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </>
  );
}

export default App;