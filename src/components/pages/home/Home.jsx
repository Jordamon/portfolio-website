import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LanguageSection from './LanguageSection';
import profilePicture from '../../../images/IMG_9712.jpg';
import { coreLanguages, otherLanguages, technologies, learningTechnologies } from './Data.js';
import './Home.css';

const Home = () => (
  <div className="home-page">
    <div className="background-container"></div>
    
    <div className="intro-text">
      <h1>JORDAN HUNT</h1>
      <h2>Web Development Portfolio</h2>
    </div>
    
    <div className="languages">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="profile-container frosted-container individual-item"
    >
      <div className="col-1">
        <Link to='/about'>
          <img src={profilePicture} alt="Profile of Jordan Hunt" />
        </Link>
      </div>
        <div className="col">
          <h3 className='h3-intro'>Hi! My name is Jordan and I'm a web developer from Essex, UK.</h3>
          <div className="button-container">
            <Link to='/about' className='link-to-projects small-btn btn'>About me</Link>
            <Link to='/projects' className='link-to-projects small-btn btn'>Explore Portfolio</Link>
          </div>
        </div>
      </motion.div>

      {/* Render Language Sections */}
      <div className="skills">
      <div className='lang-card'><LanguageSection title="Here are my core languages:" languages={coreLanguages} /></div>
      <div className='lang-card'><LanguageSection title="I have some experience in:" languages={otherLanguages} /></div>
      </div>
      <div className="skills">
      <div className='lang-card'><LanguageSection title="Tech that I can use:" languages={technologies} /></div>
      <div className='lang-card'><LanguageSection title="I am now looking to study:" languages={learningTechnologies} /></div>
      </div>
    </div>

    <div className='button-container'>
      <Link className='link-to-projects explore-btn btn' to='/projects'>Explore Portfolio</Link>
    </div>
  </div>
);

export default Home;
