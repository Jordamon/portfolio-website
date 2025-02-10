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
      title: 'TRVLR React App',
      text: 'A modern travel website built with React, designed to showcase destinations and travel services with a sleek, interactive user experience.',
      imgSrc: trvlrScreenshot1,
      alt: 'Screenshot of the TRVLR React App homepage',
      to: 'https://jordamontrvlr.netlify.app/',
      customClass: 't1',
    },
    {
      title: 'Striking Visual Design',
      text: 'Features powerful, high-quality background images combined with contrasting text to create a bold and memorable first impression.',
      imgSrc: trvlrScreenshot2,
      alt: 'Screenshot showcasing TRVLR’s design elements',
      to: 'https://jordamontrvlr.netlify.app/',
      customClass: 't2',
    },
    {
      title: 'Fully Responsive Layout & Detailed Footer',
      text: 'Designed for all screen sizes with a well-structured footer containing essential information, ensuring easy navigation and accessibility.',
      imgSrc: trvlrScreenshot3,
      alt: 'Screenshot of the TRVLR website’s footer and responsive design',
      to: 'https://jordamontrvlr.netlify.app/',
      customClass: 't3',
    },
    {
      title: 'Reusable React Components',
      text: 'Built using modular and reusable React components to generate dynamic content, ensuring clean, efficient, and scalable code.',
      imgSrc: trvlrScreenshot4,
      alt: 'Screenshot of the dynamically generated travel cards',
      to: 'https://jordamontrvlr.netlify.app/',
      customClass: 't4',
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
      <div className="trvlr-projects-container-highlight">
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
