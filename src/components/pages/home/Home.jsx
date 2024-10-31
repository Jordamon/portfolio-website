import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs,faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import profilePicture from '../../../images/IMG_9712.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className='home-page'>
      <div className="background-container">
      </div>
      <div className="intro-text">
        <h1>JORDAN HUNT</h1>
        <h2>Web Development Portfolio</h2>
        </div>
      <div className="languages">
        <div className="profile-container">
        <Link to='/about'>
          <img src={profilePicture} alt="Profile of Jordan Hunt" />
        </Link>

          <div className="col">
          <h3>Hi! My name is Jordan and I'm a web developer from Essex, UK.</h3>
          <div className="button-container">
          <Link to='/about'><button className='explore-btn'>About me</button></Link>
          <Link to='/projects'><button className='explore-btn'>Explore Portfolio</button></Link>
          </div>
          </div>
        </div>
        <div className="main">
          <h2 className='title'>Here are my core languages:</h2>
          <div className="core-languages">
            <div className="html language-details">
              <div className="icon icon-wiggle2">
                <FontAwesomeIcon icon={faHtml5} />
              </div>
              <p>html</p>
            </div>
            <div className="css language-details">
              <div className="icon icon-wiggle2">
              <FontAwesomeIcon icon={faCss3Alt} />
              </div>
              <p>css</p>
            </div>
            <div className="javascript language-details">
              <div className="icon icon-wiggle2">
                <FontAwesomeIcon icon={faSquareJs} />
              </div>
              <p>javascript</p>
            </div>
          </div>
        </div>
        <div className="other">
          <h2 className='title'>And here are some others that I have experience in:</h2>
          <div className="other-languages">
            <div className="node JS language-details">
              <div className="icon icon-wiggle2">
                <FontAwesomeIcon icon={faNodeJs} />
              </div>
              <p>node JS</p>
            </div>
            <div className="sql language-details">
              <div className="icon icon-wiggle2">
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <p>sql</p>
            </div>
            <div className="python language-details">
              <div className="icon icon-wiggle2">
                <FontAwesomeIcon icon={faPython} />
              </div>
              <p>python</p>
            </div>
          </div>
        </div>
      </div>
      <div className="link-to-projects">
        <h3>Click below to see my work!</h3>
        <Link to='/projects'><button className='explore-btn'>Explore Portfolio</button></Link>
      </div>
    </div>
  );
}

export default Home;
