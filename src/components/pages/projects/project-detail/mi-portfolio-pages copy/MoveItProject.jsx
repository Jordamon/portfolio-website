import React from 'react';
import {Link} from 'react-router-dom';
import moveitScreenshot1 from '../../screenshots/moveit-screenshot/moveitv2.netlify.app_.webp';
import moveitScreenshot4 from '../../screenshots/moveit-screenshot/moveitv2.netlify.app_account.webp';
import moveitScreenshot3 from '../../screenshots/moveit-screenshot/localhost_3001_product_product6.webp';
import moveitScreenshot2 from '../../screenshots/moveit-screenshot/localhost_3001_products (4).webp';
import './MoveItProject.css';

const MoveItProject = () => {
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
          <div className="move-it-homepage-img-highlight"><Link to="/MoveIt"><img src={moveitScreenshot1} alt="Screenshot 1" /></Link></div>
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
          <div className="move-it-homepage-img right-project"><Link to="/MoveIt"><img src={moveitScreenshot2} alt="Screenshot 1" /></Link></div>
          </div>
        <div className='individual-project-highlight m3'>
          <div className="move-it-homepage-img"><Link to="/MoveIt"><img src={moveitScreenshot3} alt="Screenshot 1" /></Link></div>
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
          <div className="move-it-homepage-img right-project"><Link to="/MoveIt"><img src={moveitScreenshot4} alt="Screenshot 1" /></Link></div>
        </div>
        <div className="button-container frosted-container moveItBtn">
          <a href="https://moveitv2.netlify.app/" target='blank' rel="noopener noreferrer" className='explore-btn'>Try out this site!</a>
        </div>
    
    </div>
    </div>
  )
}

export default MoveItProject
