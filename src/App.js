import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth/User";
import Home from "./LandingPage/components/Home";
import AiBot from "./Aibot/components/AiBot";
<<<<<<< HEAD

=======
import Faq from "./LandingPage/components/Faq";
>>>>>>> dd8c64bc67166627be9e7e330ab168078f676f5d
import PageNotFound from "./components/PageNotFound";

import Profile from "./Dashboard/components/Profile";
import Page from "./Auth/Page";
import Loyer from "./Auth/Loyer";
import EditProfile from "./Dashboard/components/EditProfile";
import ProfilePage from "./Dashboard/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
<<<<<<< HEAD

=======
        
        {/* Nested route structure under /auth */}
>>>>>>> dd8c64bc67166627be9e7e330ab168078f676f5d
        <Route path="/auth" element={<Page />}>
          <Route path="user" element={<Auth />} />
          <Route path="loyer" element={<Loyer />} />
        </Route>

<<<<<<< HEAD
        {/* Nested route structure under /auth */}
        <Route path="/auth" element={<Page />}>
          <Route path="user" element={<Auth />} />
          <Route path="loyer" element={<Loyer />} />
        </Route>

=======
>>>>>>> dd8c64bc67166627be9e7e330ab168078f676f5d
        <Route path="/aibot" element={<AiBot />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/profile1" element={<Profile />} />
<<<<<<< HEAD
        <Route path="*" element={<PageNotFound />} />
        <Route path="/Edit" element={<EditProfile />} />

        {/* Catch-all route for 404 errors */}
=======
        <Route path="/edit" element={<EditProfile />} />

        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<PageNotFound />} />
>>>>>>> dd8c64bc67166627be9e7e330ab168078f676f5d
      </Routes>
    </>
  );
}

export default App;
