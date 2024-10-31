import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="logo-container">
        <div className="logo icon-wiggle">
          <Link to='/'>
          <h1>JH</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default sidebar
