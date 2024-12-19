import React from 'react';
import { motion } from 'framer-motion'
import './Home.css';

const LanguageSection = ({ title, languages }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
  <div className="language-section frosted-container individual-item">
    <h2 className="title">{title}</h2>
    <div className="language-list">
      {languages.map(({ name, icon }) => (
        <div key={name} className="language-card">
          <div className="icon">
            {icon}
          </div>
          <p>{name}</p>
        </div>
      ))}
    </div>
  </div>
  </motion.div>
);

export default LanguageSection;
