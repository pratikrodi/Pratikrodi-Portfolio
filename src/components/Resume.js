import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 7em;
  background: #333;
  min-height: 100vh;
`;

const Resume = () => {
  return (
    <Section id="resume">
      <h2>Resume</h2>
      <p>Details about your professional experience.</p>
    </Section>
  );
}

export default Resume;
