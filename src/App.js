// src/App.js
import React from 'react';
import Header from './Components/Header'; 
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects'; 
import Carousel from './Components/Carousel'; 
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Development from './Components/Development'; // Import the new section
import Learning from './Components/Learning'; // Import the Learning component
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './App.css'; // You can keep this for other styles

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Hero /> 
        <Development /> 
        <About />
        <Carousel />
        <Projects />
        <Skills />
        <Learning /> 
        <Contact />
        <Footer />
       
      </div>
    </div>
  );
};

export default App;
