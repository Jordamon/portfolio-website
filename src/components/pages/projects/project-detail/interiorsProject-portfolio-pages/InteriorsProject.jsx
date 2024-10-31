import React from 'react';
import {Link} from 'react-router-dom';
import interiorsScreenshot1 from '../../../../../images/interiors-screenshot/Screenshot 2024-02-15 at 21.12.47.png';
import interiorsScreenshot4 from '../../../../../images/interiors-screenshot/Screenshot 2024-02-15 at 21.13.07.png';
import interiorsScreenshot3 from '../../../../../images/interiors-screenshot/Screenshot 2024-02-15 at 21.13.19.png';
import interiorsScreenshot2 from '../../../../../images/interiors-screenshot/Screenshot 2024-02-15 at 21.13.43.png';
import './InteriorsProject.css';

const InteriorsProject = () => {
  return (
    <div className="projects-highlight">
      <div className="background-container">
      </div>
      <div className="portfolio-title-highlight">
          <h1>PROJECT PORTFOLIO</h1>
      </div>
      <div className='projects-container-highlight'>
        <div className='moveit individual-project-highlight m1'>
          <div className="move-it-homepage-img-highlight"><Link to="/MoveIt"><img src={interiorsScreenshot1} alt="Screenshot 1" /></Link></div>
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
          <div className="move-it-homepage-img right-project"><Link to="/MoveIt"><img src={interiorsScreenshot2} alt="Screenshot 1" /></Link></div>
          </div>
        <div className='moveit individual-project-highlight m3'>
          <div className="move-it-homepage-img"><Link to="/MoveIt"><img src={interiorsScreenshot3} alt="Screenshot 1" /></Link></div>
          <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
          </div>
        <div className='moveit individual-project-highlight m4'>
          <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
          <div className="move-it-homepage-img right-project"><Link to="/MoveIt"><img src={interiorsScreenshot4} alt="Screenshot 1" /></Link></div>
        </div>

    
    </div>
    </div>
  )
}

export default InteriorsProject
