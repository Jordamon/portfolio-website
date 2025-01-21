import React from 'react';
import ProjectCard from '../../projectCard';
import trvlrScreenshot1 from '../../screenshots/trvlr-screenshot/Screenshot 2024-02-15 at 21.11.00.webp';
import trvlrScreenshot2 from '../../screenshots/trvlr-screenshot/Screenshot 2024-02-15 at 21.12.02.webp';
import trvlrScreenshot3 from '../../screenshots/trvlr-screenshot/Screenshot 2024-02-15 at 21.11.51.webp';
import trvlrScreenshot4 from '../../screenshots/trvlr-screenshot/Screenshot 2024-02-15 at 21.11.38.webp';
import './TrvlrProject.css';

const TrvlrProject = () => {
  const trvlrData = [
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'Project Summary',
      imgSrc: trvlrScreenshot1,
      alt: 'Screenshot 1',
      to: 'https://jordamontrvlr.netlify.app/',
      customClass: 't1',
    },
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'Project Summary',
      imgSrc: trvlrScreenshot2,
      alt: 'Screenshot 2',
      to: 'https://jordamontrvlr.netlify.app/',
      customClass: 't2',
    },
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'Project Summary',
      imgSrc: trvlrScreenshot3,
      alt: 'Screenshot 3',
      to: 'https://jordamontrvlr.netlify.app/',
      customClass: 't3',
    },
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'Project Summary',
      imgSrc: trvlrScreenshot4,
      alt: 'Screenshot 4',
      to: 'https://jordamontrvlr.netlify.app/',
      customClass: 't4',
    },
  ];

  return (
    <div className="projects-highlight">
      {/* Background Section */}
      <div className="background-container-projects"></div>

      {/* Title Section */}
      <div className="portfolio-title-highlight">
        <h1>PROJECT PORTFOLIO</h1>
      </div>

      {/* Projects Section */}
      <div className="projects-container-highlight">
        {trvlrData.map((project, index) => (
          <a href="https://jordamontrvlr.netlify.app/" 
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
      </div>

      {/* Button Section */}
      <div className="button-container trvlrBtn">
        <a
          href="https://jordamontrvlr.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="explore-btn btn"
        >
          Try out this site!
        </a>
      </div>
    </div>
  );
};

export default TrvlrProject;
