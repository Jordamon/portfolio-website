import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Sidebar.css';

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="icons-container">
        <div className="icon icon-wiggle">
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="icon icon-wiggle">
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <div className="icon icon-wiggle">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  )
}

export default sidebar
