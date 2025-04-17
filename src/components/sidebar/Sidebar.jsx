import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="icons-container">
        <div className="icon icon-wiggle">
        <a href="https://github.com/Jordamon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>        
          </div>
        <div className="icon icon-wiggle">
          <a href="mailto:jordanhuntwebdev@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
          </a>
        </div>        
        <div className="icon icon-wiggle">
        <a href="https://www.instagram.com/jordamon_/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          </div>       
      </div>
    </div>
  )
}

export default sidebar
