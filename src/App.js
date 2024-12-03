// import React from 'react'
import "./App.css"
import Header from './components/header/Header' ;
import Home from './components/home/Home';
import About from './components/about/About';
// import About from './components/about/About';
import Skills from './components/Skills/Skills';
import Qualification from './components/qualification/Qualification';
import Services  from './components/services/Services';
import React, { useState, useEffect } from 'react';
import PyramidLoader from './components/pyramidLoader/PyramidLoader';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time for your app content (e.g., API calls or other assets)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a set time (e.g., 3 seconds)
    }, 3000); // Adjust the time as needed
    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);
  return (
   <>
   {loading && <PyramidLoader />} {/* Show loader while loading */}
   <Header/>
   <main className='main'>
    <Home/>
    <About/>
    {/* <Skills/> */}
    <Services/>
    <Qualification/>
   </main>
   </>
  )
}

export default App
