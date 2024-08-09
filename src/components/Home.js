import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import TextTransition, { presets } from 'react-text-transition';
import pratikIcon from '../assets/images/Pratik_icon.png'; // Corrected import

// Keyframe animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Styled components
const Section = styled.section`
  padding: 2em;
  background: #333; /* Dark background */
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Content = styled.div`
  text-align: left;
  animation: ${fadeIn} 1s ease-out;
  padding: 2em;
  max-width: 50%;
  margin: auto;

  h1 {
    font-size: 2em;
    color: white;
  }

  h2 {
    font-size: 3em;
    color: white;
    margin-bottom: 0.5em;
    animation: ${slideIn} 1s ease-out;
  }

  p {
    font-size: 1.2em;
    // color: #666;
    color: #bcbcbc;
    line-height: 1.6;
    animation: ${fadeIn} 1.5s ease-out;
    margin-top: 4em;
  }
`;

const ImageContainer = styled.div`
  max-width: 300%;
  animation: ${fadeIn} 1s ease-out;
  margin-right: 4em;

  img {
    width: 100%;
    // border-radius: 10px;
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 2em;
  margin-left: 1.5em;
  padding: 0.8em 2em;
  font-size: 1em;
  color: #fff;
  background-color: #333;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f39c12;
  }
`;

// Texts for TextTransition
const TEXTS = ["Welcome to my website!", "I'm a Developer", "and a Designer."];

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((index) => (index + 1) % TEXTS.length); // Ensure index wraps around
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="home">
      <Content>
        <h1>Hi..!</h1>
        <h2>I'm Pratik Rodi</h2>
        <div className="typewriter-container">
          <h3>
            <TextTransition springConfig={presets.wobbly} style={{ color: '#f39c12', fontSize: '2em' }}>
              {TEXTS[textIndex]}{" "}
            </TextTransition>
          </h3>
        </div>
        <p>
          Hi, I'm Pratik Rodi. I'm a passionate developer with expertise in creating stunning websites and applications.
          Explore my portfolio to see some of the projects I've been working on and feel free to get in touch!
        </p>
        <Button href="https://www.linkedin.com/in/pratik-rodi-a75760247/">LinkedIn</Button>
        <Button href="#work">My Work</Button>
      </Content>
      <ImageContainer>
        <img src={pratikIcon} alt="Pratik Rodi" />
      </ImageContainer>
    </Section>
  );
}

export default Home;
