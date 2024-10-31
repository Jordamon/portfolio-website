import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now access form data in the formData object
    console.log(formData);
    // Here, you can send the form data to your server or API for email processing
  };

  return (
    <div>
      <div className="contact-page">
      <div className="video-container">
      </div>
      <div className="intro-text contact-text">
        <h1>CONTACT</h1>
        </div>
      <div className="contact-container">
          <form onSubmit={handleSubmit}>
            <h3 className=''>GET IN TOUCH</h3>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email id"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className='explore-btn' type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
