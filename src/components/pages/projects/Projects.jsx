import React from 'react';
import {Link} from 'react-router-dom';
import moveItHomepage from './screenshots/moveit-screenshot/moveItHomepage.png';
import trvlrHomepage from './screenshots/trvlr-screenshot/Screenshot 2024-02-15 at 21.11.00.png';
import interiorHomepage from './screenshots/interiors-screenshot/Screenshot 2024-02-15 at 21.12.47.png';
import inspireHomepage from './screenshots/inspire-screenshot/Screenshot 2024-02-15 at 21.09.07.png';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects background-container-projects">
      <div className="portfolio-title">
          <h1>PROJECT PORTFOLIO</h1>
      </div>
      <div className='projects-container'>
        <div className='moveit individual-project'>
          <div className="move-it-homepage-img"><Link to="/MoveIt"><img src={moveItHomepage} alt="Screenshot 1" /></Link></div>
          <div className="project-text">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
        </div>
        <div className='moveit individual-project'>
        <div className="project-text">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
          <div className="move-it-homepage-img right-project"><Link to="/trvlr"><img src={trvlrHomepage} alt="Screenshot 1" /></Link></div>
          </div>
        <div className='moveit individual-project'>
          <div className="move-it-homepage-img"><Link to="/inspire"><img src={inspireHomepage} alt="Screenshot 1" /></Link></div>
          <div className="project-text">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
          </div>
        <div className='moveit individual-project'>
          <div className="project-text">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
          <div className="move-it-homepage-img right-project"><Link to="/interiors"><img src={interiorHomepage} alt="Screenshot 1" /></Link></div>
        </div>
        <div className='moveit individual-project'>
        <div className="move-it-homepage-img"><Link to="/inspire"><img src={inspireHomepage} alt="Screenshot 1" /></Link></div>
          <div className="project-text">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
          </div>
    
    </div>
    </div>
  )
}

export default Projects
