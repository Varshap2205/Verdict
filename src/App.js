import React from "react";
import { Route, Routes } from "react-router-dom";

import Auth from "./Auth/User";
import Home from "./LandingPage/components/Home";
import AiBot from "./Aibot/components/AiBot";
import Faq from "./LandingPage/components/Faq";
import PageNotFound from "./components/PageNotFound";
import Profile from "./Dashboard/components/Profile";
import Page from "./Auth/Page";
<<<<<<< HEAD
import Lawyer from "./Auth/Lawyer";
import EditProfile from "./Dashboard/components/EditProfile";
import ProfilePage from "./Dashboard/ProfilePage";
import HTU from '../src/HTU/HowToUSe'
import AprovalPage from './Auth/AprovalPage'
import Sidebar1 from "./Dashboard/components/Sidebar1";
=======
import Lawyer from '../src/Auth/Lawyer'
import EditProfile from "./Dashboard/components/EditProfile";
import ProfilePage from "./Dashboard/ProfilePage";
import HTU from '../src/HTU/HowToUSe'
<<<<<<< HEAD
import Blog from "./Blog/Blog";
=======
>>>>>>> 22a94d73ab5d065658829f59e33245e6df82859a


>>>>>>> f6d8113071436469953ee6b6eb77ab0d7d21018b
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
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
        <Route path="/aibot" element={<AiBot/>}/>
        <Route path="aibot" element={<AiBot />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='faq' element={<Faq/>}/>
        <Route path='/profile' element={<Sidebar1/>}/>
        <Route path="/edit" element={<EditProfile />} />
        <Route path='howitworks' element={<HTU/>}/>
=======

        <Route path="/login" element={<Auth />} />
        {/* Nested route structure under /auth */}
        <Route path="/auth" element={<Page />}>
          <Route path="user" element={<Auth />} />
          <Route path="lawyer" element={<Lawyer />} />
        </Route>
<<<<<<< HEAD
        
=======
>>>>>>> f6d8113071436469953ee6b6eb77ab0d7d21018b

>>>>>>> 22a94d73ab5d065658829f59e33245e6df82859a
        <Route path="/edit" element={<EditProfile />} />
        <Route path='howitworks' element={<HTU />} />
        <Route path='/blog' element={<Blog />} />
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<PageNotFound />} />
<<<<<<< HEAD
=======

>>>>>>> f6d8113071436469953ee6b6eb77ab0d7d21018b
      </Routes>
    </>
  );
}

export default App;