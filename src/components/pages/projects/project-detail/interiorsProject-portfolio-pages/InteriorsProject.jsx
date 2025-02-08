import React from 'react';
import ProjectCard from '../../projectCard';
import interiorsScreenshot1 from '../../screenshots/interiors-screenshot/Screenshot 2024-02-15 at 21.12.47.webp';
import interiorsScreenshot2 from '../../screenshots/interiors-screenshot/Screenshot 2024-02-15 at 21.13.43.webp';
import interiorsScreenshot3 from '../../screenshots/interiors-screenshot/Screenshot 2024-02-15 at 21.13.19.webp';
import interiorsScreenshot4 from '../../screenshots/interiors-screenshot/Screenshot 2024-02-15 at 21.13.07.webp';
import './InteriorsProject.css';

const InteriorsProject = () => {
  const interiorsData = [
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'Project Summary',
      imgSrc: interiorsScreenshot1,
      alt: 'Screenshot 1',
      to: 'https://jordamoninteriors.netlify.app/',
      customClass: 'int1',
    },
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'Project Summary',
      imgSrc: interiorsScreenshot2,
      alt: 'Screenshot 2',
      to: 'https://jordamoninteriors.netlify.app/',
      customClass: 'int2',
    },
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'Project Summary',
      imgSrc: interiorsScreenshot3,
      alt: 'Screenshot 3',
      to: 'https://jordamoninteriors.netlify.app/',
      customClass: 'int3',
    },
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'Project Summary',
      imgSrc: interiorsScreenshot4,
      alt: 'Screenshot 4',
      to: 'https://jordamoninteriors.netlify.app/',
      customClass: 'int4',
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
      <div className="interiors-project-container-highlight">
        {interiorsData.map((project, index) => (
          <a href="https://jordamoninteriors.netlify.app/" 
          target='_blank' 
          rel="noopener noreferrer">
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            imgSrc={project.imgSrc}
            alt={project.alt}
            to={project.to}
            className={`moveit individual-project individual-item ${project.customClass}`}
            reverse={index % 2 !== 0} // Alternate reverse for odd/even items
          />
          </a>
        ))}

        {/* Button Section */}
        <div className="button-container intBtn">
          <a
            href="https://jordamoninteriors.netlify.app/"
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

export default InteriorsProject;
