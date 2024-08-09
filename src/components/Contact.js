import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 7em;
  background: #333;
  min-height: 100vh;
`;

const Contact = () => {
  return (
    <Section id="contact">
      <h2>Contact</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </Section>
  );
}

export default Contact;
