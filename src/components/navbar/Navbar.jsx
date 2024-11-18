import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleToggleClick = () => {
    toggleMenu();
    scrollToTop();
  };

  return (
    <div className='navbar'>
      <nav>
        <div className='navbar-toggle' onClick={handleToggleClick}>
          &#9776;
        </div>
        <ul className={`navbarList ${showMenu ? 'show' : ''}`}>
          <li className='listItem'>
            <Link to='/' onClick={handleToggleClick}>
              Home
            </Link>
          </li>
          <li className='listItem'>
            <Link to='/projects' onClick={handleToggleClick}>
              Projects
            </Link>
          </li>
          <li className='listItem'>
            <Link to='/about' onClick={handleToggleClick}>
              About
            </Link>
          </li>
          <li className='listItem'>
            <Link to='/contact' onClick={handleToggleClick}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
