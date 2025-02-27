import React from 'react';
import ProjectCard from '../../projectCard';
import inspireScreenshot1 from '../../screenshots/inspire-screenshot/Screenshot 2024-02-15 at 21.09.07.webp';
import inspireScreenshot2 from '../../screenshots/inspire-screenshot/Screenshot 2024-02-15 at 21.09.21.webp';
import './InspireProject.css';

const InspireProject = () => {
  const inspireData = [
    {
      title: 'Inspirational Nonsense Generator',
      text: 'A fun JavaScript project that dynamically generates humorous, nonsensical quotes using arrays, string manipulation, and randomized functions. Built with vanilla JavaScript, HTML, and CSS to demonstrate dynamic content generation and DOM updates.',
      imgSrc: inspireScreenshot1,
      alt: 'Screenshot of the Inspirational Nonsense Generator interface',
      to: 'https://inspire-no-one.netlify.app/',
    },
    {
      title: 'Minimalistic & Interactive Design',
      text: 'Designed with a clean UI and optimized JavaScript code, this project showcases event-driven programming, efficient DOM manipulation, and simple yet effective styling to enhance user experience.',
      imgSrc: inspireScreenshot2,
      alt: 'Alternative view of the Inspirational Nonsense Generator interface',
      to: 'https://inspire-no-one.netlify.app/',
    },
  ];
  
  

  return (
    <div className="inspire">
    <div className="projects-highlight">
      {/* Background Section */}
      <div className="background-container"></div>

      {/* Title Section */}
      <div className="portfolio-title-highlight">
        <h1>PROJECT PORTFOLIO</h1>
      </div>

      {/* Projects Section */}
      <div className="projects-container ">
        {inspireData.map((project, index) => (
          <a href="https://inspire-no-one.netlify.app/" 
          target='_blank' 
          rel="noopener noreferrer">
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            imgSrc={project.imgSrc}
            alt={project.alt}
            className={`individual-project i${index + 1}`}
            reverse={index % 2 !== 0} // Alternate reverse for odd/even items
          />
          </a>
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
    </div>
  );
};

export default InspireProject;
