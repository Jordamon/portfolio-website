import React from "react";

import { motion } from 'framer-motion';

const AboutSection = ({ title, text, imgSrc, altText, reverse }) => {
  return (
    <motion.div
      className={`moveit individual-about frosted-container ${reverse ? 'reverse' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="about-img">
        <img src={imgSrc} alt={altText} />
      </div>
      <div className="about-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </motion.div>
  );
};

  export default AboutSection;
  