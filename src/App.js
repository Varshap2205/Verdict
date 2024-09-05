
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import Home from './LandingPage/components/Home';
import { AiBot } from './Aibot/AiBot';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="aibot" element={<AiBot/>}/>
      </Routes>
    </>
  );
}

export default App;
