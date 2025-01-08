import React, { useEffect, useState } from 'react';
import './Skills.css'; // Ensure you have this for custom styles

const skills = [
  { name: 'JavaScript', description: 'Solid understanding of JavaScript, including its core concepts like variables, functions, and control structures, and how to apply them in web development.' },
  { name: 'React', description: 'Experience building dynamic, responsive web applications with React, leveraging hooks, components, and state management for efficient UI rendering.' },
  { name: 'SQL & EF', description: 'Knowledge of SQL for querying databases and experience with Entity Framework for building backend services and working with relational data.' },
  { name: 'CSS/HTML', description: 'Strong foundation in HTML5 and CSS3, enabling the creation of accessible, well-structured web pages with a focus on responsive design principles.' },
  { name: 'Git', description: 'Proficient in using Git for version control, collaborating with teams on GitHub, and managing workflows with pull requests and branching strategies.' },
  { name: 'Blazor', description: 'Familiar with Blazor for building modern web apps using C# instead of JavaScript, with a focus on component-based architecture and interactivity.' },
  { name: 'WordPress', description: 'Hands-on experience developing websites using WordPress, including theme customization, plugin integration, and content management.' },
  { name: 'APIs', description: 'Understanding of RESTful APIs and experience integrating third-party services into web applications to enhance functionality and data exchange.' },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in the viewport
    );

    const section = document.getElementById('skills');
    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        {/* Add Image Above the Skills Section */}
        <div className="skills-image-container">
          <img src="/Images/Skills.avif" alt="Skills Visual" className="skills-image" />
        </div>

        <div className="flex-container">
          {skills.map((skill, index) => (
            <div
              className={`skill-card ${isVisible ? 'visible' : ''}`}
              key={index}
              style={{ transitionDelay: `${index * 0.3}s` }} // Adjust delay here
            >
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
