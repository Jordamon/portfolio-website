import React from 'react';
import AboutSection from './aboutSection/AboutSection';
import './About.css';

const About = () => {
  return (
    <div className="background-container-projects">
      <div className="about-title">
        <h1>ABOUT</h1>
      </div>
      <div className="about-container">
        <div className="projects-container">

          <AboutSection
            title="Intro"
            text="I'm a web developer with two years of experience, including a year of freelance work creating websites for small businesses. I specialize in front-end development using HTML, CSS, JavaScript, and React, and have foundational knowledge of SQL and Python. Having completed front-end courses on Mimo and Codecademy, I am eager to expand my expertise and contribute to impactful projects within a dynamic team."
            imgSrc={require('../../../images/me/me4.JPG')}
            altText="me"
          />

          <AboutSection
            title="Experience"
            text="One of my recent projects was building a static website for Reignite Construction, a new company looking to establish credibility and engage with customers. The site I created helped them build a professional online presence and improve customer communication. Please take a look at this project, among others in my portfolio."
            imgSrc={require('../../../images/me/me3.webp')}
            altText="me"
            reverse={true}
          />

          <AboutSection
            title="Passion"
            text="Though my passion for coding is recent, I’ve always been drawn to creative pursuits. With a degree in music focused on electronic production, I’ve always had an interest in the blending of technical skills with creativity. I consider myself both methodical and creative, and front-end development allows me to combine these elements to create functional, visually engaging websites."
            imgSrc={require('../../../images/me/me2.webp')}
            altText="me"
          />

          <AboutSection
            title="Development"
            text="I’m committed to continuous learning to stay current with industry trends and technologies. My previous experience managing teams and handling legal and financial responsibilities has taught me the value of collaboration and accountability. I’m excited to bring my technical expertise, creativity, and practical teamwork to a company where I can continue to learn and grow even further."
            imgSrc={require('../../../images/me/me1.webp')}
            altText="me"
            reverse={true}
          />

          <AboutSection
            title="My World"
            text="Outside of web development, I enjoy life by leading an active lifestyle, training in Brazilian Jiu Jitsu where I have achieved a silver medal at a European championship. 
            Travel is another interest of mine, and in 2022, my girlfriend and I were blessed to travel Central and South America for over 100 days. During our journey, we visited salt flats, expeditioned into the Amazon rainforest, climbed Rainbow Mountain, and surfed three different oceans. A truly inspirational experience."
            imgSrc={require('../../../images/me/me5.webp')}
            altText="me"
          />

          <AboutSection
            title="DIY Adventures"
            text="More recently I have spent a lot of time learning DIY skills and undertook an exciting (if not a bit scary) renovation project. This project has given me an even greater affinity for fixing and problem-solving. It really tested my limits—sometimes learning the easy way, sometimes the hard way. (FYI: just because a floorboard has a hole where a screw used to be, doesn't mean there definitely isn't a water pipe there now. If you drill into it, you may have a new water feature in your freshly decorated room!)"
            imgSrc={require('../../../images/me/me6.webp')}
            altText="me"
            reverse={true}
          />

        </div>
      </div>
    </div>
  );
};

export default About;