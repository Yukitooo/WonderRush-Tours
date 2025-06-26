import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Packages from './pages/Packages';
import Picture from './components/Picutre';
import Places from './components/Places';
import Bangkok from './pages/Bangkok';
import Pattaya from './pages/Pattaya';
import Ratchaburi from './components/Ratchaburi';
import Kanchanaburi from './components/Kanchanaburi';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            
            <Picture />
            <Header />
            
          </>} 
        />
        <Route path="/home" element={
          <>
            
            <Picture />
            <Header />
            
          </>} 
        />
        <Route path="/packages" element={<Packages />} />
        <Route path="/bangkok" element={<Bangkok/>} />
        <Route path="/pattaya" element={<Pattaya/>}></Route>
        <Route path="/ratchaburi" element={<Ratchaburi/>}></Route>
        <Route path="/Kanchanaburi" element={<Kanchanaburi/>}></Route>
        {/* Add more routes for other pages as you create them */}
      </Routes>
    </Router>
  );
}

export default App;