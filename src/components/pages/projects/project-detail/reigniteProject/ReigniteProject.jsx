import React from 'react';
import ProjectCard from '../../projectCard';
import reigniteScreenshot1 from '../../screenshots/reignite-screenshot/reigniteconstruction.netlify.app_.webp';
import reigniteScreenshot2 from '../../screenshots/reignite-screenshot/reigniteconstruction.netlify.app_aboutus.webp';
import reigniteScreenshot3 from '../../screenshots/reignite-screenshot/reigniteconstruction.netlify.app_blog.webp';
import reigniteScreenshot4 from '../../screenshots/reignite-screenshot/reigniteconstruction.netlify.app_contact.webp';
import './ReigniteProject.css';

const ReigniteProject = () => {
  const reigniteData = [
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'Project Summary',
      imgSrc: reigniteScreenshot1,
      alt: 'Screenshot 1',
      to: '/MoveIt',
      customClass: 'r1',
    },
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'Project Summary',
      imgSrc: reigniteScreenshot2,
      alt: 'Screenshot 2',
      to: '/MoveIt',
      customClass: 'r2',
    },
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'Project Summary',
      imgSrc: reigniteScreenshot4,
      alt: 'Screenshot 3',
      to: '/MoveIt',
      customClass: 'r3',
    },
    {
      title: 'Move it Gym-wear E-commerce Website',
      text: 'Project Summary',
      imgSrc: reigniteScreenshot3,
      alt: 'Screenshot 4',
      to: '/MoveIt',
      customClass: 'r4',
    },
  ];

  return (
    <div className="projects-highlight">
      {/* Background Sections */}
      <div className="background-container-projects-move-it"></div>
      {/* Title Section */}
      <div className="portfolio-title-highlight">
        <h1>PROJECT PORTFOLIO</h1>
      </div>

      {/* Projects Section */}
      <div className="moveit-projects-container-highlight">
        {reigniteData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            imgSrc={project.imgSrc}
            alt={project.alt}
            to={project.to}
            className={`individual-project ${project.customClass}`}
            reverse={index % 2 !== 0} // Alternate reverse for odd/even items
          />
        ))}
        </div>

        {/* Button Section */}
        <div className="button-container rBtn">
          <a
            href="https://moveitv2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="explore-btn"
          >
            Try out this site!
          </a>
        </div>
      </div>
  );
};

export default ReigniteProject;
