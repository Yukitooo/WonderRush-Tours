import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Packages from './pages/packages';
import Picture from './components/Picutre';

function App() {
  return (
    <>
    
      <Navbar />
      <Picture />
      <Header />
    </>
  )
}

export default App