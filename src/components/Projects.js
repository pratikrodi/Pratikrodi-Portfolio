import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 7em 2em;
  background: #000000;
  min-height: 100vh;

  h2 {
    color: #be7dff;
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 1em;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    color: #c0c0c0;
    font-size: 1.2em;
    margin: 0.5em 0;
    padding: 1em;
    background: #444;
    border-radius: 8px;
    width: 100%;
    max-width: 600px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1em;
      padding: 0.8em;
    }
  }
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
