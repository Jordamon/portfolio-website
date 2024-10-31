import React from 'react';
import {Link} from 'react-router-dom';
import inspireScreenshot1 from '../../../../../images/inspire-screenshot/Screenshot 2024-02-15 at 21.09.07.png';
import inspireScreenshot2 from '../../../../../images/inspire-screenshot/Screenshot 2024-02-15 at 21.09.21.png';
import './InspireProject.css';

const InspireProject = () => {
  return (
    <div className="projects-highlight">
      <div className="background-container">
      </div>
      <div className="portfolio-title-highlight">
          <h1>PROJECT PORTFOLIO</h1>
      </div>
      <div className='projects-container-highlight'>
        <div className='moveit individual-project-highlight m1'>
          <div className="move-it-homepage-img-highlight"><Link to="/MoveIt"><img src={inspireScreenshot1} alt="Screenshot 1" /></Link></div>
          <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
        </div>
        <div className='moveit individual-project-highlight m2'>
        <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
          <div className="move-it-homepage-img right-project"><Link to="/MoveIt"><img src={inspireScreenshot2} alt="Screenshot 1" /></Link></div>
          </div>
    </div>
    </div>
  )
}

export default InspireProject
