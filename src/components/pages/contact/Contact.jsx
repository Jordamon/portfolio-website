import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Email validation
    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Phone number validation
    if (!/^\d+$/.test(formData.phone)) {
      alert('Please enter a valid phone number.');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  return (
    <div className="contact-page-container">
      <div className="contact-title">
        <h1>CONTACT</h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="contact-page">
          <div className="contact-container">
            <form onSubmit={handleSubmit} className="frosted-container">
              <h3>GET IN TOUCH</h3>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email ID"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              ></textarea>
              <button className="explore-btn btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
          <div className="ways-to-contact frosted-container">
            <h4>Fill out the form or use one of the methods of contact below:</h4><br></br>
            <p>
              <FontAwesomeIcon icon={faPhone} /> 012345678
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> 123456789@12345.com
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
