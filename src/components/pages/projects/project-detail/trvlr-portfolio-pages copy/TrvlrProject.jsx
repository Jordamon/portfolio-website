import React from 'react';
import {Link} from 'react-router-dom';
import trvlrScreenshot1 from '../../screenshots/trvlr-screenshot/Screenshot 2024-02-15 at 21.11.00.webp';
import trvlrScreenshot4 from '../../screenshots/trvlr-screenshot/Screenshot 2024-02-15 at 21.11.38.webp';
import trvlrScreenshot3 from '../../screenshots/trvlr-screenshot/Screenshot 2024-02-15 at 21.11.51.webp';
import trvlrScreenshot2 from '../../screenshots/trvlr-screenshot/Screenshot 2024-02-15 at 21.12.02.webp';
import './TrvlrProject.css';

const TrvlrProject = () => {
  return (
    <div className="projects-highlight">
      <div className="background-container-projects">
      </div>
      <div className="portfolio-title-highlight">
          <h1>PROJECT PORTFOLIO</h1>
      </div>
      <div className='projects-container-highlight'>
        <div className='moveit individual-project-highlight t1'>
          <div className="move-it-homepage-img-highlight"><Link to="/MoveIt"><img src={trvlrScreenshot1} alt="Screenshot 1" /></Link></div>
          <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
        </div>
        <div className='moveit individual-project-highlight t2'>
        <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
          <div className="move-it-homepage-img right-project"><Link to="/MoveIt"><img src={trvlrScreenshot2} alt="Screenshot 1" /></Link></div>
          </div>
        <div className='moveit individual-project-highlight t3'>
          <div className="move-it-homepage-img"><Link to="/MoveIt"><img src={trvlrScreenshot3} alt="Screenshot 1" /></Link></div>
          <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
          </div>
        <div className='moveit individual-project-highlight t4'>
          <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
          <div className="move-it-homepage-img right-project"><Link to="/MoveIt"><img src={trvlrScreenshot4} alt="Screenshot 1" /></Link></div>
        </div>
        <div className="button-container frosted-container trvlrBtn">
          <a href="https://jordamontrvlr.netlify.app/" target='blank' rel="noopener noreferrer" className='explore-btn'>Try out this site!</a>
        </div>
    
    </div>
    </div>
  )
}

export default TrvlrProject
