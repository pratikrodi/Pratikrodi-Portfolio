import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 7em;
  background: #333;
  min-height: 100vh;
`;

const Projects = () => {
  return (
    <Section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </Section>
  );
}

export default Projects;
