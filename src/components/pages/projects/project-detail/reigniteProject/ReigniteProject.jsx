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
      title: 'Reignite Construction Company Website',
      text: 'A simple yet professional static website designed to establish credibility for a newly launched construction company. Built with clean HTML and CSS, it provides essential business information.',
      imgSrc: reigniteScreenshot1,
      alt: 'Screenshot of the Reignite Construction homepage',
      to: 'https://reigniteconstruction.netlify.app/',
      customClass: 'r1',
    },
    {
      title: 'About Us Page',
      text: 'A dedicated "About Us" section that presents the company’s mission, values, and expertise in a clear and engaging format to build trust with visitors.',
      imgSrc: reigniteScreenshot2,
      alt: 'Screenshot of the About Us page',
      to: 'https://reigniteconstruction.netlify.app/',
      customClass: 'r2',
    },
    {
      title: 'Contact Form',
      text: 'A simple and accessible contact form that allows potential clients to easily reach out to the company. Designed for clarity and ease of use.',
      imgSrc: reigniteScreenshot4,
      alt: 'Screenshot of the Contact Us page',
      to: 'https://reigniteconstruction.netlify.app/',
      customClass: 'r3',
    },
    {
      title: 'Blog Section (Coming Soon)',
      text: 'A placeholder for the company’s upcoming blog, where they will share updates, insights, and industry knowledge to engage with their audience.',
      imgSrc: reigniteScreenshot3,
      alt: 'Screenshot of the blog coming soon page',
      to: 'https://reigniteconstruction.netlify.app/',
      customClass: 'r4',
    },
  ];
  

  return (
    <div className="projects-highlight">
      {/* Background Sections */}
      <div className="background-container-projects-reignite"></div>
      {/* Title Section */}
      <div className="portfolio-title-highlight">
        <h1>PROJECT PORTFOLIO</h1>
      </div>

      {/* Projects Section */}
      <div className="reignite-projects-container-highlight">
        {reigniteData.map((project, index) => (
          <a href="https://reigniteconstruction.netlify.app/" 
          target='_blank' 
          rel="noopener noreferrer">
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            imgSrc={project.imgSrc}
            alt={project.alt}
            to={project.to}
            className={`individual-project individual-item ${project.customClass}`}
            reverse={index % 2 !== 0} // Alternate reverse for odd/even items
          />
          </a>
        ))}
        </div>

        {/* Button Section */}
        <div className="button-container rBtn">
          <a
            href="https://reigniteconstruction.netlify.app/"
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

export default ReigniteProject;
