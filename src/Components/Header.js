import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }

    // List of section IDs to track
    const sections = ['development', 'about', 'projects', 'skills', 'learning', 'contact'];

    let currentSection = '';
    
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();

        // Check if the section is within the viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          currentSection = section;
        }
      }
    });

    // Update the active section based on the scroll position
    setActiveSection(currentSection);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
      setMenuOpen(false); // Ensure menu is closed on larger screens
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on load
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={scrolling ? 'scrolled' : ''}>
      <nav>
        {/* Regular navigation for larger screens */}
        {!isSmallScreen && (
          <ul>
            {['development', 'about', 'projects', 'skills', 'learning', 'contact'].map(
              (section) => (
                <li key={section} className={activeSection === section ? 'active' : ''}>
                  <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
                </li>
              )
            )}
          </ul>
        )}

        {/* Hamburger menu for smaller screens */}
        {isSmallScreen && (
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}

        {/* Dropdown menu for small screens */}
        {isSmallScreen && menuOpen && (
          <ul className="dropdown-menu">
            {['development', 'about', 'projects', 'skills', 'learning', 'contact'].map(
              (section) => (
                <li key={section} className={activeSection === section ? 'active' : ''}>
                  <a href={`#${section}`} onClick={() => setMenuOpen(false)}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
