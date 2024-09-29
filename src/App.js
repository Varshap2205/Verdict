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
import AprovalPage from './Auth/AprovalPage'
import { FirebaseProvider } from "./Firebase/FireBase";
import ComingSoon from "./Dashboard/components/ComingSoon";

function App() {
  return (
    <>
    <FirebaseProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Auth/>}/>
        
        <Route path="/approval" element={<AprovalPage/>}/>

        {/* Nested route structure under /auth */}
        <Route path="/auth" element={<Page />}>
          <Route path="user" element={<Auth />} />
          <Route path="Lawyer" element={<Lawyer />} />
        </Route>
        <Route path="/aibot" element={<AiBot />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile1" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path='howitworks' element={<HTU/>}/>
        <Route path="/login" element={<Auth />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/comingsoon" element={<ComingSoon/>}/>
      </Routes>
      </FirebaseProvider>
    </>
  );
}

export default App;