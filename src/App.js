import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './LandingPage/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
