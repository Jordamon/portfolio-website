import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navbar'>
      <nav>
        <div className='navbar-toggle' onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`navbarList ${showMenu ? 'show' : ''}`}>
          <li className='listItem'>
            <Link to='/' onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className='listItem'>
            <Link to='/projects' onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li className='listItem'>
            <Link to='/about' onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className='listItem'>
            <Link to='/contact' onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
