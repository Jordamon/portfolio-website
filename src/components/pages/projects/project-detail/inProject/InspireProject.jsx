import React from 'react';
import ProjectCard from '../../projectCard';
import inspireScreenshot1 from '../../screenshots/inspire-screenshot/Screenshot 2024-02-15 at 21.09.07.webp';
import inspireScreenshot2 from '../../screenshots/inspire-screenshot/Screenshot 2024-02-15 at 21.09.21.webp';
import './InspireProject.css';

const InspireProject = () => {
  const inspireData = [
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'This project demonstrates a modern e-commerce website designed for a fictional gym-wear brand, featuring a responsive layout and interactive features.',
      imgSrc: inspireScreenshot1,
      alt: 'Screenshot of MoveIt Gym-wear Homepage',
      to: '/MoveIt', // Adjust the route as needed
    },
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'Explore a professional and user-friendly design tailored for seamless shopping experiences, showcasing product galleries, cart functionalities, and more.',
      imgSrc: inspireScreenshot2,
      alt: 'Alternate view of MoveIt Gym-wear Homepage',
      to: '/MoveIt', // Adjust the route as needed
    },
  ];

  return (
    <div className="projects-highlight">
      {/* Background Section */}
      <div className="background-container"></div>

      {/* Title Section */}
      <div className="portfolio-title-highlight">
        <h1>PROJECT PORTFOLIO</h1>
      </div>

      {/* Projects Section */}
      <div className="projects-container individual-item">
        {inspireData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            imgSrc={project.imgSrc}
            alt={project.alt}
            to={project.to}
            className={`individual-project i${index + 1}`}
            reverse={index % 2 !== 0} // Alternate reverse for odd/even items
          />
        ))}

        {/* Button Section */}
        <div className="button-container inspireBtn">
          <a
            href="https://inspire-no-one.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="explore-btn btn"
          >
            Try out this site!
          </a>
        </div>
      </div>
    </div>
  );
};

export default InspireProject;
