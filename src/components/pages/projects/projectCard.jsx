import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, imgSrc, to, text, alt, className, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      classname="motion-div"
    >
      <div className={`moveit individual-project individual-item ${reverse ? 'reverse' : 'left'} ${className}`}>
        <div className="move-it-homepage-img">
          <Link to={to}>
            <img src={imgSrc} alt={alt || 'Project preview'} />
          </Link>
        </div>
        <div className="project-text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Prop Validation
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired, // Title is required
  imgSrc: PropTypes.string.isRequired, // Image source is required
  to: PropTypes.string.isRequired, // Link target is required
  text: PropTypes.string, // Description text is optional
  alt: PropTypes.string, // Alt text is optional
  className: PropTypes.string, // Additional class name for customization
  reverse: PropTypes.bool, // Whether to reverse the layout
};

// Default Props
ProjectCard.defaultProps = {
  text: '',
  alt: 'Project image',
  className: '', // Default to no additional class
  reverse: false, // Default layout is not reversed
};

export default ProjectCard;
