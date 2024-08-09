import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 7em;
  background: #333;
  min-height: 100vh;
`;

const About = () => {
  return (
    <Section id="about">
      <h2>About Me</h2>
      <p>Write a brief introduction about yourself.</p>
    </Section>
  );
}

export default About;
