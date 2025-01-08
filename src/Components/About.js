import React from 'react';
import './About.css'; // Keep using the existing About.css

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        {/* Self-portrait Image Above the Heading */}
        <div className="selfportrait-container">
          <img src="/Images/Aboutme.png" alt="About Me" className="selfportrait-image" />
        </div>

        {/* Wrap paragraphs in "about-card" divs */}
        <div className="about-card">
          <p>
            I'm Dan, a former chef who made the leap into web development and am now fully immersed in this exciting field. I've always been fascinated by the World Wide Web and the intricate art of coding, which allows me to design and build unique digital spaces that are both visually appealing and user-friendly.
            <p>So,</p>
            there's much more to a person than words can capture, but to give you a glimpse into who I am, here are some of my interests and hobbies:
          </p>
        </div>

         
         <div className="flex-container">
          <div className="image-container">
            <img src="/Images/Studyingabstract.png" alt="About Me" className="about-image" />
          </div>
          <ul className="list-container">
            <li>Working Out</li>
            <li>Cooking</li>
            <li>Coding</li>
            <li>Sports</li>
            <li>Technology</li>
          </ul>
          <ul className="list-container">
            <li>Traveling</li>
            <li>Family</li>
            <li>Music</li>
            <li>Series</li>
            <li>Gaming</li>
          </ul>
        </div>

        <h2>Education</h2>

        <div className="about-card">
          <p>
            I began my journey as a web developer in 2022 and earned my degree in web development by June 2024. To further expand my skills, I am currently pursuing an additional course in Azure and cloud development, which I am set to complete by the end of 2024.
          <p> Also,</p> I am currently seeking new opportunities to apply my skills and contribute to innovative projects.</p>
        </div>

       
      </div>
    </section>
  );
};

export default About;
