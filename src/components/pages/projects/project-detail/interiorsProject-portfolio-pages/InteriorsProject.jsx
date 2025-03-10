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
      title: 'Interior Design Styles Showcase',
      text: 'A static website designed to highlight aesthetic principles in interior design while demonstrating fundamental HTML and CSS for layout and styling.',
      imgSrc: interiorsScreenshot1,
      alt: 'Screenshot of the Interior Design Styles website homepage',
      to: 'https://jordamoninteriors.netlify.app/',
      customClass: 'int1',
    },
    {
      title: 'Elegant and Readable Design',
      text: 'This project focuses on presenting information in a visually appealing and structured way, emphasizing typography, spacing, and layout for clarity.',
      imgSrc: interiorsScreenshot2,
      alt: 'Screenshot showcasing content layout and typography',
      to: 'https://jordamoninteriors.netlify.app/',
      customClass: 'int2',
    },
    {
      title: 'User-Friendly Footer Design',
      text: 'A well-structured footer enhances user experience by providing easy access to contact details and essential links, improving website navigation.',
      imgSrc: interiorsScreenshot3,
      alt: 'Screenshot of the footer section with contact and navigation links',
      to: 'https://jordamoninteriors.netlify.app/',
      customClass: 'int3',
    },
    {
      title: 'Code-Based Styling and Custom Backgrounds',
      text: 'All visual elements, including the custom background and page styling, were created using pure CSS, demonstrating the power of in-code design techniques.',
      imgSrc: interiorsScreenshot4,
      alt: 'Screenshot highlighting custom CSS styling and backgrounds',
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
        </div>

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
  );
};

export default InteriorsProject;
