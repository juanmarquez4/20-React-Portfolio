import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

import AboutMe from './pages/Aboutme';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


// TODO: Add a comment explaining what this function is doing
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
function App() {
  return (
  <div>
    <Router>
      <Header/>
        <Routes>
        <Route
            path="/20-React-Portfolio"
            element={<AboutMe/>}
          /> 
          <Route
            path="/projects"
            element={<Project/>}
          /> 
            <Route
            path="/contact"
            element={<Contact/>}
          /> 
            <Route
            path="/resume"
            element={<Resume/>}
          /> 
        </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
