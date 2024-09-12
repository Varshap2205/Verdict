import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Auth from './Auth/User';
import Home from './LandingPage/components/Home';
import { AiBot } from './Aibot/AiBot';
import Faq from './LandingPage/components/Faq'
import PageNotFound from './components/PageNotFound'
import Sidebar1 from "./Dashboard/components/Sidebar1";
import Page from './Auth/Page';
import Loyer from './Auth/Loyer';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Auth/>}/>
        
        <Route path="/auth" element={<Page />} >
          <Route path='user' element={<Auth/>}/>
          <Route path='loyer' element={<Loyer/>}/>
        </Route>

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
