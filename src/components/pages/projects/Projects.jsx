import React from 'react';
import ProjectCard from './projectCard';
import moveItHomepage from './screenshots/moveit-screenshot/Screenshot 2024-11-22 at 14.55.32.webp';
import trvlrHomepage from './screenshots/trvlr-screenshot/Screenshot 2024-02-15 at 21.11.00.webp';
import interiorHomepage from './screenshots/interiors-screenshot/Screenshot 2024-02-15 at 21.12.47.webp';
import inspireHomepage from './screenshots/inspire-screenshot/Screenshot 2024-02-15 at 21.09.07.webp';
import reigniteHomepage from './screenshots/reignite-screenshot/Screenshot 2024-11-20 at 11.08.00.webp';
import './Projects.css';

const projectData = [
  {
    title: 'Move It Gym-wear E-commerce Website',
    imgSrc: moveItHomepage,
    to: '/MoveIt',
    text: 'An e-commerce platform showcasing gym-wear, featuring user-friendly navigation, product filtering, and a responsive design.',
    alt: 'Screenshot of Move It homepage',
  },
  {
    title: 'Inspire Blog Platform',
    imgSrc: inspireHomepage,
    to: '/inspire',
    text: 'A blogging platform to share motivational articles with a sleek and minimalistic design.',
    alt: 'Screenshot of Inspire Blog homepage',
  },
  {
    title: 'Reignite Construction Website',
    imgSrc: reigniteHomepage,
    to: '/reignite',
    text: 'A professional static website for a construction company, focused on credibility and customer engagement.',
    alt: 'Screenshot of Reignite Construction homepage',
  },
  {
    title: 'Trvlr Travel Booking App',
    imgSrc: trvlrHomepage,
    to: '/trvlr',
    text: 'A dynamic travel booking platform with interactive features for planning trips and booking accommodations.',
    alt: 'Screenshot of Trvlr Travel Booking homepage',
  },
  {
    title: 'Interior Design Showcase Website',
    imgSrc: interiorHomepage,
    to: '/interiors',
    text: 'A portfolio site for an interior design firm, highlighting projects and offering easy contact functionality. Laptop screen size only.',
    alt: 'Screenshot of Interior Design homepage',
  }
];

const Projects = () => {
  return (
    <div className="projects background-container-projects">
      <div className="portfolio-title">
        <h1>PROJECT PORTFOLIO</h1>
      </div>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard
            key={project.to} // Unique key for each project
            title={project.title}
            imgSrc={project.imgSrc}
            to={project.to}
            text={project.text}
            alt={project.alt}
            reverse={index % 2 !== 0} // Alternate reverse for odd/even items
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
