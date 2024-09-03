import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaEnvelope, FaPhone, FaAddressCard, FaInstagram, FaWhatsapp } from 'react-icons/fa';

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

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;

  @media (min-width: 768px) {
    margin-right: 2em;
    margin-bottom: 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1em;
  color: #be7dff;
  font-size: 2em;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #be7dff;
    }
  }

  span {
    font-size: 1.2em;
    color: #c0c0c0;
    margin-left: 0.5em;
  }
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
    transition: background 0.3s ease;

    &:hover {
      background: #be7dff;
    }
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Heading>
        <h2>Contact Me</h2>
        <h1>Below are the details to reach out to me!</h1>
      </Heading>
      
      <ContentContainer>
        <FormContainer>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </FormContainer>
      </ContentContainer>
    </Section>
  );
}

export default Contact;
