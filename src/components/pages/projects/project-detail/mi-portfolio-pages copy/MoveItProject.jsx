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
      title: 'Move It E-Commerce Homepage',
      text: 'A modern, fully responsive e-commerce homepage designed for a seamless user experience. Features clean UI/UX principles and intuitive navigation for easy product discovery.',
      imgSrc: moveitScreenshot1,
      alt: 'Screenshot of the Move It e-commerce homepage',
      to: 'https://moveitv2.netlify.app/'
    },
    {
      title: 'Dynamic Products Page',
      text: 'A dynamically generated product listing page using JavaScript. Includes filtering options to enhance user experience and improve product discoverability.',
      imgSrc: moveitScreenshot2,
      alt: 'Screenshot of the Move It products page',
      to: 'https://moveitv2.netlify.app/'
    },
    {
      title: 'Interactive Single Product Page',
      text: 'A fully dynamic product details page featuring dropdowns for size selection, multiple product images that change on selection, and an "Add to Cart" function that stores data in local storage for persistence.',
      imgSrc: moveitScreenshot3,
      alt: 'Screenshot of the Move It single product page',
      to: 'https://moveitv2.netlify.app/'
    },
    {
      title: 'Account & Payment Integration',
      text: 'A responsive website with basic user authentication and login functionality. Integrated with Stripe for secure payment processing. Includes a contact form that sends user messages via email.',
      imgSrc: moveitScreenshot4,
      alt: 'Screenshot of the Move It account page',
      to: 'https://moveitv2.netlify.app/'
    },
  ];
  

  return (
    <div className="projects-highlight">
      <div className="background-container-projects-move-it" />
      <div className="portfolio-title">
        <h1>PROJECT PORTFOLIO</h1>
      </div>
      <div className="moveit-projects-container-highlight">
        {moveItData.map((project, index) => (
          <a href="https://moveitv2.netlify.app/" 
          target='_blank' 
          rel="noopener noreferrer">
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            imgSrc={project.imgSrc}
            alt={project.alt}
            className={`individual-project-highlight individual-item m${index + 1}`}
            reverse={index % 2 !== 0} // Alternate reverse for odd/even items
          />
          </a>
        ))}
        </div>
        <div className="button-container moveItBtn">
          <a
            href="https://moveitv2.netlify.app/"
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

export default MoveItProject;
