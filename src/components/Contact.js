import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 7em 2em;
  background: #000000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.div`
  text-align: center;
  margin-bottom: 3em;

  h2 {
    color: #be7dff;
    font-size: 2.5em;
  }

  h1 {
    color: #c0c0c0;
    font-size: 1.2em;
    margin-top: 0.5em;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  color: #c0c0c0;

  label {
    margin-bottom: 0.5em;
  }

  input, textarea {
    margin-bottom: 1.5em;
    padding: 0.75em;
    border: none;
    border-radius: 5px;
    background: #444;
    color: #fff;
    font-size: 1em;
  }

  button {
    padding: 0.75em;
    border: none;
    border-radius: 5px;
    background: #be7dff;
    color: #fff;
    font-size: 1.2em;
    cursor: pointer;
  }
`;

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
    <Section id="contact">
      <Heading>
        <h2>Contact Me</h2>
        <h1>Below are the details to reach out to me!</h1>
      </Heading>
      
      <ContentContainer>
        <FormContainer onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
          <p>{responseMessage}</p>
        </FormContainer>
      </ContentContainer>
    </Section>
  );
};

export default Contact;
