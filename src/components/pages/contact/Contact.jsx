import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Email validation
    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address.');
      setIsSubmitting(false); // Reset submitting state
      return;
    }
  
    // Phone number validation
    if (!/^\d+$/.test(formData.phone)) {
      alert('Please enter a valid phone number.');
      setIsSubmitting(false); // Reset submitting state
      return;
    }
  
    // Simulate API call
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false); // Reset submitting state
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    }, 2000);

    console.log(formData);
  };

  return (
      <div className="background-container">
      <div className="contact-title">
        <h1>CONTACT</h1>
        </div>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
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
        <h2>Fill out the form or use one of the form of contact below: </h2>
        <h3> Phone: 012345678</h3>
        <h3> Email: 123456789@12345.com</h3>
        </div>
        </div>
     </motion.div>
      </div>
  );
};

export default Contact;
