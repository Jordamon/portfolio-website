import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're importing this

const Button = ({ name, path }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="frosted-container">
      <Link to={path}>
        <button onClick={scrollToTop} className="explore-btn">
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Button;
