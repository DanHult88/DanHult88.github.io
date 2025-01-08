// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Import the CSS file for styling

const projects = [
  {
    name: 'Project One',
    description: `An e-commerce platform developed using React and Sanity as a headless CMS. 
    Features include dynamic product listings, a cart system, and responsive design. This project taught me how to integrate a CMS for real-time content management.`,
    link: 'https://github.com/DanHult88/FreddesElektronik'
  },
  {
    name: 'Project Two',
    description: `A weather application that fetches real-time weather data from an API. 
    Users can search for cities and view current temperature, conditions, and forecasts. This project strengthened my skills and understanding of API integration and error handling.`,
    link: 'https://github.com/DanHult88/Weatherapp'
  },
  {
    name: 'Project Three',
    description: `An e-commerce platform developed in C#. It includes basic features such as product management, order processing, and user authentication. 
    This was an early exploration of MVC architecture and backend programming.`,
    link: 'https://github.com/DanHult88/Ecommerce'
  },
  {
    name: 'Project Four',
    description: `A library management system built in C# with a SQL database backend. 
    Features include the ability to manage books, borrowers, and check-out history. This project focused on database design and CRUD operations.`,
    link: 'https://github.com/DanHult88/Library'
  },
  {
    name: 'Project Five',
    description: `A CRUD application for blogs called Bloggy, built using C#. 
    Users can create, read, update, and delete blog posts, with a clean and user-friendly interface. It helped me refine my understanding of CRUD principles and user input validation.`,
    link: 'https://github.com/DanHult88/Bloggy-CRUD'
  },
  {
    name: 'Project Six',
    description: `An earlier version of my portfolio website created using only HTML, CSS and Bootstrap. 
    It highlights my initial journey into web development and showcases a responsive layout built without JavaScript.`,
    link: 'https://github.com/DanHult88/portfolio3'

  }
];
const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2> Other projects</h2>
        <div className="flex-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <p>View on GitHub</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
