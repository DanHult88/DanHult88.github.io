import React, { useEffect, useState, useRef } from 'react';
import './Development.css'; // Ensure you have this file for custom styles

const Development = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.indexOf(entry.target);
            if (index !== -1 && !visibleSections.includes(index)) {
              setVisibleSections((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      if (sectionsRef.current) {
        sectionsRef.current.forEach((section) => observer.unobserve(section));
      }
    };
  }, [visibleSections]);

  return (
    <section id="development" className="development-section">
      <div className="development-container">
        <h2>Development Skills</h2>
        <div className="development-content">
          {/* Front-End Development */}
          <div
            className={`development-text ${
              visibleSections.includes(0) ? 'fade-in' : ''
            }`}
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <div className="development-image">
              <img src="/Images/Front-end.png" alt="Front-End Development" />
            </div>
            <h3>Front-End Development</h3>
            <p>
              Experience in front-end development using JavaScript, Blazor, HTML, and CSS to build responsive and interactive web applications.
            </p>
          </div>

          {/* Back-End Development */}
          <div
            className={`development-text ${
              visibleSections.includes(1) ? 'fade-in' : ''
            }`}
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <div className="development-image">
              <img src="/Images/Back-end.png" alt="Back-End Development" />
            </div>
            <h3>Back-End Development</h3>
            <p>
              Gained experience with C#, SQL, Entity Framework, and RESTful APIs to create efficient and scalable server-side applications.
            </p>
          </div>

          {/* Full-Stack Development */}
          <div
            className={`development-text ${
              visibleSections.includes(2) ? 'fade-in' : ''
            }`}
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <div className="development-image">
              <img src="/Images/Programing.png" alt="Full-Stack Development" />
            </div>
            <h3>Full-Stack Development</h3>
            <p>
              Developed end-to-end applications using both front-end and back-end technologies. For example, built an e-commerce site using React and Sanity.
            </p>
          </div>

          {/* Cloud Architecture (Azure) */}
          <div
            className={`development-text ${
              visibleSections.includes(3) ? 'fade-in' : ''
            }`}
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <div className="development-image">
              <img src="/Images/Cloud.png" alt="Cloud Architecture (Azure)" />
            </div>
            <h3>Cloud Architecture (Azure)</h3>
            <p>
              Experience with Microsoft Azure for building, deploying, and managing scalable cloud applications, including services like App Services, Functions, and Storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
