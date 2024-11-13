import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-page background-container-projects">
      <div className="about-title">
        <h1>ABOUT</h1>
      </div>
      <div className="about-container">
        <div className="projects-container">
          <div className="moveit individual-about">
            <div className="about-img">
              <img src={require('../../../images/me/me4.JPG')} alt="me" />
            </div>
            <div className="about-text">
              <h2>Intro</h2>
              <p>I'm a web developer with two years of experience, including a year of freelance work creating websites for small businesses. I specialize in front-end development using HTML, CSS, JavaScript, and React, and have foundational knowledge of SQL and Python. Having completed front-end courses on Mimo and Codecademy, I am eager to expand my expertise and contribute to impactful projects within a dynamic team.</p>
            </div>
          </div>
          <div className="moveit individual-about">
            <div className="about-text">
              <h2>Experience</h2>
              <p>One of my recent projects was building a static website for Reignite Construction, a new company looking to establish credibility and engage with customers. The site I created helped them build a professional online presence and improve customer communication.</p>
            </div>
            <div className="about-img">
              <img src={require('../../../images/me/me3.JPG')} alt="me" />
            </div>
          </div>
          <div className="moveit individual-about">
            <div className="about-img">
              <img src={require('../../../images/me/me2.jpg')} alt="me" />
            </div>
            <div className="about-text">
              <h2>Passion</h2>
              <p>Though my passion for coding is recent, I’ve always been drawn to creative pursuits. With a degree in music focused on electronic production, I’ve blended technical skills with creativity throughout my career. I consider myself both methodical and creative, and front-end development allows me to combine these elements to create functional, visually engaging websites.</p>
            </div>
          </div>
          <div className="moveit individual-about">
            <div className="about-text">
              <h2>Development</h2>
              <p>I’m committed to continuous learning to stay current with industry trends and technologies. My previous experience managing teams and handling legal and financial responsibilities has taught me the value of collaboration and accountability. I’m excited to bring my technical expertise, creativity, and practical teamwork to a company where I can continue to learn and grow even further.</p>
            </div>
            <div className="about-img">
              <img src={require('../../../images/me/me1.JPG')} alt="me" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
