import React from 'react';
import {Link} from 'react-router-dom';
import moveitScreenshot1 from '/Users/jordanhunt/Desktop/Web Dev Portfolio Projects/portfolio-website/src/images/moveit-screenshot/localhost_3001_.png';
import moveitScreenshot4 from '/Users/jordanhunt/Desktop/Web Dev Portfolio Projects/portfolio-website/src/images/moveit-screenshot/localhost_3001_product_product6.png';
import moveitScreenshot3 from '/Users/jordanhunt/Desktop/Web Dev Portfolio Projects/portfolio-website/src/images/moveit-screenshot/localhost_3001_product_product6 (1).png';
import moveitScreenshot2 from '/Users/jordanhunt/Desktop/Web Dev Portfolio Projects/portfolio-website/src/images/moveit-screenshot/localhost_3001_products (4).png';
import './MoveItProject.css';

const MoveItProject = () => {
  return (
    <div className="projects-highlight">
      <div className="background-container">
      </div>
      <div className="portfolio-title-highlight">
          <h1>PROJECT PORTFOLIO</h1>
      </div>
      <div className='projects-container-highlight'>
        <div className='moveit individual-project-highlight m1'>
          <div className="move-it-homepage-img-highlight"><Link to="/MoveIt"><img src={moveitScreenshot1} alt="Screenshot 1" /></Link></div>
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
          <div className="move-it-homepage-img right-project"><Link to="/MoveIt"><img src={moveitScreenshot2} alt="Screenshot 1" /></Link></div>
          </div>
        <div className='moveit individual-project-highlight m3'>
          <div className="move-it-homepage-img"><Link to="/MoveIt"><img src={moveitScreenshot3} alt="Screenshot 1" /></Link></div>
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
          <div className="move-it-homepage-img right-project"><Link to="/MoveIt"><img src={moveitScreenshot4} alt="Screenshot 1" /></Link></div>
        </div>

    
    </div>
    </div>
  )
}

export default MoveItProject
