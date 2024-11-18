import React from 'react';
import { Link } from 'react-router-dom';
import inspireScreenshot1 from '../../screenshots/inspire-screenshot/Screenshot 2024-02-15 at 21.09.07.png';
import inspireScreenshot2 from '../../screenshots/inspire-screenshot/Screenshot 2024-02-15 at 21.09.21.png';
import './InspireProject.css';

const InspireProject = () => {
  return (
    <div className="projects-highlight">
      {/* Background Section */}
      <div className="background-container"></div>

      {/* Title Section */}
      <div className="portfolio-title-highlight">
        <h1>PROJECT PORTFOLIO</h1>
      </div>

      {/* Projects Section */}
      <div className="projects-container-highlight">
        {/* Project 1 */}
        <div className="individual-project-highlight i1">
          <div className="move-it-homepage-img-highlight">
            <Link to="/MoveIt">
              <img
                src={inspireScreenshot1}
                alt="Screenshot of MoveIt Gym-wear Homepage"
              />
            </Link>
          </div>
          <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>
              This project demonstrates a modern e-commerce website designed for a fictional gym-wear brand, featuring a responsive layout and interactive features.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="individual-project-highlight i2">
          <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>
              Explore a professional and user-friendly design tailored for seamless shopping experiences, showcasing product galleries, cart functionalities, and more.
            </p>
          </div>
          <div className="move-it-homepage-img right-project">
            <Link to="/MoveIt">
              <img
                src={inspireScreenshot2}
                alt="Alternate view of MoveIt Gym-wear Homepage"
              />
            </Link>
          </div>
        </div>

        {/* Button Section */}
        <div className="button-container frosted-container inspireBtn">
          <a href="https://inspire-no-one.netlify.app/" target='blank' rel="noopener noreferrer" className='explore-btn'>Try out this site!</a>
        </div>
      </div>
    </div>
  );
};

export default InspireProject;
