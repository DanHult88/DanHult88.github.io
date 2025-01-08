import React, { useEffect, useState, useRef } from 'react';
import './Learning.css';

const Learning = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const learningRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = learningRef.current.indexOf(entry.target);
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    learningRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (learningRef.current) {
        learningRef.current.forEach((item) => observer.unobserve(item));
      }
    };
  }, [visibleItems]);

  return (
    <section id="learning" className="learning-section">
      <div className="learning-container">
      
        <div className="learning-header-image">
          {/* Add any relevant image */}
          
        </div>

        <h2>My Developer Growth: Exploring New Skills and Practices</h2>
        <br></br>
        

        <div className="learning-content">
          {/* Content Blocks */}
          {[
            {
              title: 'Emerging Technologies',
              imgSrc: '/Images/computer.png',
              description:
                'Continuously exploring new and emerging technologies in web development, such as new frameworks, libraries, and tools. This includes keeping an eye on the latest trends in front-end and back-end technologies.',
            },
            {
              title: 'Industry Best Practices',
              imgSrc: '/Images/develop.png',
              description:
                'Focusing on understanding and implementing industry best practices in code quality, testing, performance optimization, and security to ensure that I write efficient, maintainable, and secure code.',
            },
            {
              title: 'Continuous Learning',
              imgSrc: '/Images/bar.png',
              description:
                'Engaging with online courses, tutorials, blogs, and developer communities to stay up-to-date on the latest techniques and tools in software development. Whether it’s mastering a new framework or understanding new design patterns, I am always learning.',
            },
            {
              title: 'Networking and Community Engagement',
              imgSrc: '/Images/data.png',
              description:
                'Actively participating in developer communities, forums, and events (both online and offline) to connect with other professionals, learn from others’ experiences, and stay informed about the latest developments in the tech world.',
            },
          ].map((block, index) => (
            <div
              className={`learning-text ${visibleItems.includes(index) ? 'fade-in' : ''}`}
              key={index}
              ref={(el) => (learningRef.current[index] = el)}
            >
              <div className="learning-image">
                <img src={block.imgSrc} alt={block.title} />
              </div>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;
