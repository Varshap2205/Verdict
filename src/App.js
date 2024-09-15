import React from "react";
import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Auth/>}/>
        
        <Route path="/auth" element={<Page />} >
          <Route path='user' element={<Auth/>}/>
          <Route path='lawyer' element={<Lawyer/>}/>
        </Route>

        <Route path="/approval" element={<AprovalPage/>}/>
        
        <Route path="/login" element={<Auth />} />
        <Route path="/aibot" element={<AiBot />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="faq" element={<Faq />} />
        <Route path="/profile" element={<Sidebar1 />} />
        <Route path="/profile1" element={<Profile />} />
        <Route path="/aibot" element={<AiBot/>}/>
        <Route path="aibot" element={<AiBot />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='faq' element={<Faq/>}/>
        <Route path='/profile' element={<Sidebar1/>}/>
      </Routes>
    </>
  );
}

export default App;
