import React, { useEffect, useState } from 'react';
import './Contact.css'; // Ensure this file includes your updated styles

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
    
      <p className={isVisible ? 'fade-in' : ''}>
        Feel free to reach out through my profiles by using the buttons below.
      </p>
      

      {/* Social Media Links with icons */}
      <div className="contact-buttons">

        {/* GitHub Button with Icon */}
        <div className="contact-button-container">
          <i className="fab fa-github contact-icon"></i> {/* GitHub Icon */}
          <a href="https://github.com/DanHult88" target="_blank" rel="noopener noreferrer" className="contact-button">GitHub</a>
        </div>

        {/* Email Button with Letter Icon */}
        <div className="contact-button-container">
          <i className="fas fa-envelope contact-icon"></i> {/* Email Icon */}
          <a href="mailto:dan.hult@hotmail.com" className="contact-button">Email</a>
        </div>

        {/* LinkedIn Button with Icon */}
        <div className="contact-button-container">
          <i className="fab fa-linkedin contact-icon"></i> {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/dan-hult/" target="_blank" rel="noopener noreferrer" className="contact-button">LinkedIn</a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
