import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../button/Button.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faSquareJs, faNodeJs, faPython, faGithub, 
  faReact, faAngular, faVuejs, faPhp 
} from '@fortawesome/free-brands-svg-icons';
import { faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';
import profilePicture from '../../../images/IMG_9712.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="background-container"></div>
      
      {/* Introduction Text Section */}
      <div className="intro-text">
        <h1>JORDAN HUNT</h1>
        <h2>Web Development Portfolio</h2>
      </div>

      {/* Profile and Skills Section */}
      <div className="languages">
        {/* Profile Container */}
        <div className="profile-container frosted-container">
          <Link to='/about'>
            <img src={profilePicture} alt="Profile of Jordan Hunt" />
          </Link>

          <div className="col">
            <h3>Hi! My name is Jordan and I'm a web developer from Essex, UK.</h3>
            <div className="button-container">
              <Button name='About me' path='/about' />
              <Button name='Explore Portfolio' path='/projects' />
            </div>
          </div>
        </div>

        {/* Core Languages Section */}
        <div className="skills">
          <div className="main frosted-container">
            <h2 className='title'>Here are my core languages:</h2>
            <div className="core-languages">
              <div className="html language-details">
                <div className="icon icon-wiggle2">
                  <FontAwesomeIcon icon={faHtml5} />
                </div>
                <p>HTML</p>
              </div>
              <div className="css language-details">
                <div className="icon icon-wiggle2">
                  <FontAwesomeIcon icon={faCss3Alt} />
                </div>
                <p>CSS</p>
              </div>
              <div className="javascript language-details">
                <div className="icon icon-wiggle2">
                  <FontAwesomeIcon icon={faSquareJs} />
                </div>
                <p>JavaScript</p>
              </div>
            </div>
          </div>

          {/* Other Languages Section */}
          <div className="other frosted-container">
            <h2 className='title'>And here are some others that I have experience in:</h2>
            <div className="other-languages">
              <div className="node JS language-details">
                <div className="icon icon-wiggle2">
                  <FontAwesomeIcon icon={faNodeJs} />
                </div>
                <p>Node.js</p>
              </div>
              <div className="sql language-details">
                <div className="icon icon-wiggle2">
                  <FontAwesomeIcon icon={faDatabase} />
                </div>
                <p>SQL</p>
              </div>
              <div className="python language-details">
                <div className="icon icon-wiggle2">
                  <FontAwesomeIcon icon={faPython} />
                </div>
                <p>Python</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Technologies Section */}
        <div className="skills">
          <div className="main frosted-container">
            <h2 className='title'>Other technologies that I can use include:</h2>
            <div className="other-languages">
              <div className="github language-details">
                <div className="icon icon-wiggle">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
                <p>GitHub</p>
              </div>
              <div className="react language-details">
                <div className="icon icon-wiggle2">
                  <FontAwesomeIcon icon={faReact} />
                </div>
                <p>React</p>
              </div>
              <div className="api language-details">
                <div className="icon icon-wiggle2">
                  <FontAwesomeIcon icon={faServer} />
                </div>
                <p>APIs</p>
              </div>
            </div>
          </div>

          {/* Learning Technologies Section */}
          <div className="other frosted-container">
            <h2 className='title'>I am now looking to study:</h2>
            <div className="other-languages">
              <div className="angular language-details">
                <div className="icon icon-wiggle">
                  <FontAwesomeIcon icon={faAngular} />
                </div>
                <p>Angular</p>
              </div>
              <div className="vue language-details">
                <div className="icon icon-wiggle2">
                  <FontAwesomeIcon icon={faVuejs} />
                </div>
                <p>Vue.js</p>
              </div>
              <div className="php language-details">
                <div className="icon icon-wiggle2">
                  <FontAwesomeIcon icon={faPhp} />
                </div>
                <p>PHP</p>
              </div>
            </div>
          </div>
        </div>
        {/* Button to Explore Portfolio */}
      <div className='button-container'><Button className='link-to-projects explore-btn' name='Explore Portfolio' path='/projects' /></div>
      </div>
    </div>
  );
}

export default Home;
