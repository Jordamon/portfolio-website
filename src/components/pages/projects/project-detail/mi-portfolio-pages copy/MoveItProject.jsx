import React from 'react';
import ProjectCard from '../../projectCard'; 
import moveitScreenshot1 from '../../screenshots/moveit-screenshot/moveitv2.netlify.app_.webp';
import moveitScreenshot4 from '../../screenshots/moveit-screenshot/moveitv2.netlify.app_account.webp';
import moveitScreenshot3 from '../../screenshots/moveit-screenshot/localhost_3001_product_product6.webp';
import moveitScreenshot2 from '../../screenshots/moveit-screenshot/localhost_3001_products (4).webp';
import './MoveItProject.css';

const MoveItProject = () => {
  const moveItData = [
    {
      title: 'Homepage',
      text: 'This is the homepage',
      imgSrc: moveitScreenshot1,
      alt: 'Homepage screenshot',
      to: '/MoveIt', // Adjust the route as needed
    },
    {
      title: 'Products Page',
      text: 'This is the products page',
      imgSrc: moveitScreenshot2,
      alt: 'Products page screenshot',
      to: '/MoveIt', // Adjust the route as needed
    },
    {
      title: 'Single Product Page',
      text: 'This is the single product page',
      imgSrc: moveitScreenshot3,
      alt: 'Single product page screenshot',
      to: '/MoveIt', // Adjust the route as needed
    },
    {
      title: 'Account Page',
      text: 'This is the account page',
      imgSrc: moveitScreenshot4,
      alt: 'Account page screenshot',
      to: '/MoveIt', // Adjust the route as needed
    },
  ];

  return (
    <div className="projects-highlight">
      <div className="background-container-projects-move-it" />
      <div className="portfolio-title-highlight">
        <h1>PROJECT PORTFOLIO</h1>
      </div>
      <div className="moveit-projects-container-highlight">
        {moveItData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            imgSrc={project.imgSrc}
            alt={project.alt}
            to={project.to}
            className={`individual-project-highlight m${index + 1}`}
            reverse={index % 2 !== 0} // Alternate reverse for odd/even items

          />
        ))}
        <div className="button-container moveItBtn">
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
    </div>
  );
};

export default MoveItProject;
