import React from 'react';
import {Link} from 'react-router-dom';
import reigniteScreenshot1 from '../../screenshots/reignite-screenshot/reigniteconstruction.netlify.app_.png';
import reigniteScreenshot2 from '../../screenshots/reignite-screenshot/reigniteconstruction.netlify.app_aboutus.png';
import reigniteScreenshot3 from '../../screenshots/reignite-screenshot/reigniteconstruction.netlify.app_blog.png';
import reigniteScreenshot4 from '../../screenshots/reignite-screenshot/reigniteconstruction.netlify.app_contact.png';
import './ReigniteProject.css';

const ReigniteProject = () => {
  return (
    <div className="projects-highlight">
      <div className="background-container-projects">
      </div>
      <div className="background-container-projects2">
      </div>
      <div className="background-container-projects3">
      </div>
      <hr class="red-line"></hr>
      <div className="portfolio-title-highlight">
          <h1>PROJECT PORTFOLIO</h1>
      </div>
      <div className='moveit-projects-container-highlight'>
        <div className='individual-project-highlight m1'>
          <div className="move-it-homepage-img-highlight"><Link to="/MoveIt"><img src={reigniteScreenshot1} alt="Screenshot 1" /></Link></div>
          <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
        </div>
        <div className='individual-project-highlight m2'>
        <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
          <div className="move-it-homepage-img right-project"><Link to="/MoveIt"><img src={reigniteScreenshot2} alt="Screenshot 1" /></Link></div>
          </div>
        <div className='individual-project-highlight m3'>
          <div className="move-it-homepage-img"><Link to="/MoveIt"><img src={reigniteScreenshot4} alt="Screenshot 1" /></Link></div>
          <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
          </div>
        <div className='individual-project-highlight m4'>
          <div className="project-text-highlight">
            <h2>Move it Gym-wear E-commerce Website</h2>
            <p>Project Summary</p>
          </div>
          <div className="move-it-homepage-img right-project"><Link to="/MoveIt"><img src={reigniteScreenshot3} alt="Screenshot 1" /></Link></div>
        </div>
        <div className="button-container frosted-container moveItBtn">
          <a href="https://moveitv2.netlify.app/" target='blank' rel="noopener noreferrer" className='explore-btn'>Try out this site!</a>
        </div>
    
    </div>
    </div>
  )
}

export default ReigniteProject