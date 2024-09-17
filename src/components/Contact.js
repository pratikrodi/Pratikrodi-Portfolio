import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      setResponseMessage('Failed to send message.');
    }
  };

  return (
    <section id="contact">
      <div className="heading">
        <h2>Contact Me</h2>
        <h1>Below are the details to reach out to me!</h1>
      </div>

      <div className="content-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
          <p>{responseMessage}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
