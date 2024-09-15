import React from "react";
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import AiBot from "./Aibot/components/AiBot";
import Auth from './Auth/User';
import Home from './LandingPage/components/Home';
import Faq from './LandingPage/components/Faq'
import PageNotFound from './components/PageNotFound'
import Sidebar1 from "./Dashboard/components/Sidebar1";
import Page from './Auth/Page';
import Lawyer from './Auth/Lawyer';
import Profile from "./Dashboard/components/Profile";
import AprovalPage from "./Auth/AprovalPage";
=======
import Auth from "./Auth/User";
import Home from "./LandingPage/components/Home";
import AiBot from "./Aibot/components/AiBot";
import Faq from "./LandingPage/components/Faq";
import PageNotFound from "./components/PageNotFound";
import Profile from "./Dashboard/components/Profile";
import Page from "./Auth/Page";
import Loyer from "./Auth/Loyer";
import EditProfile from "./Dashboard/components/EditProfile";
import ProfilePage from "./Dashboard/ProfilePage";
import HTU from '../src/HTU/HowToUSe'
<<<<<<< HEAD
import Blog from "../src/Blog/Blog"
=======
>>>>>>> 34f8b314fa7b32cbfde416495bf5539ae1e3b178
>>>>>>> 5afc8d62e7fbfaf34c031f22acabc5a63b44a49a

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path='/login' element={<Auth/>}/>
        
        <Route path="/auth" element={<Page />} >
          <Route path='user' element={<Auth/>}/>
          <Route path='lawyer' element={<Lawyer/>}/>
        </Route>

        <Route path="/approval" element={<AprovalPage/>}/>
        
        <Route path="/login" element={<Auth />} />
=======
        <Route path="/login" element={<Auth />} />
        {/* Nested route structure under /auth */}
        <Route path="/auth" element={<Page />}>
          <Route path="user" element={<Auth />} />
          <Route path="loyer" element={<Loyer />} />
        </Route>
<<<<<<< HEAD
=======

>>>>>>> 34f8b314fa7b32cbfde416495bf5539ae1e3b178
>>>>>>> 5afc8d62e7fbfaf34c031f22acabc5a63b44a49a
        <Route path="/aibot" element={<AiBot />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile1" element={<Profile />} />
<<<<<<< HEAD
        <Route path="/aibot" element={<AiBot/>}/>
        <Route path="aibot" element={<AiBot />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='faq' element={<Faq/>}/>
        <Route path='/profile' element={<Sidebar1/>}/>
=======
        <Route path="/edit" element={<EditProfile />} />
        <Route path='howitworks' element={<HTU/>}/>
        <Route path='/blog' element={<Blog/>} />
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<PageNotFound />} />
>>>>>>> 34f8b314fa7b32cbfde416495bf5539ae1e3b178
      </Routes>
    </>
  );
}

export default App;
