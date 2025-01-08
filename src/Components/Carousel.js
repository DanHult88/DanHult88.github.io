// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';  // Import the Slider component from react-slick
import './Carousel.css';  // Correct import for the carousel-specific CSS

const projects = [
  {
    name: 'Project One',
    description: `An e-commerce platform developed using React and Sanity as a headless CMS. 
    Features include dynamic product listings, a cart system, and responsive design.`,
    image: '/Images/pizza.png',
    link: 'https://github.com/DanHult88/FreddesElektronik',
  },
  {
    name: 'Project Two',
    description: `A weather application that fetches real-time weather data from an API. 
    Users can search for cities and view current temperature, conditions, and forecasts.`,
    image: '/Images/todo.png',
    link: 'https://github.com/DanHult88/Weatherapp',
  },
  {
    name: 'Project Three',
    description: `An e-commerce platform developed in C#. It includes basic features such as product management, order processing, and user authentication.`,
    image: '/Images/Snake.png',
    link: 'https://github.com/DanHult88/Ecommerce',
  },
  {
    name: 'Project Four',
    description: `A library management system built in C# with a SQL database backend. Features include the ability to manage books, borrowers, and check-out history.`,
    image: '/Images/Code.png',
    link: 'https://github.com/DanHult88/Library',
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="carousel-project" className="carousel-project-section">
      <div className="carousel-project-container">
        <h2>My Showcased Projects</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.name} className="project-image" />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <p>View on GitHub</p>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
