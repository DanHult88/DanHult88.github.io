// src/Components/Hero.js
import React from 'react';
import './Hero.css'; // Ensure to import the CSS file for styling

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: 'url(/Images/Hero.avif)', // Your hero image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-text">
        <h2>Hi, and welcome to my portfolio</h2>
        <p>I am Dan, a web-developer from Kalmar, Sweden.</p>
        <p>Feel free to explore my work and get in touch if you’re interested in collaborating!</p>
      </div>
    </section>
  );
};

export default Hero;
