import React from 'react';
import styled, { keyframes } from 'styled-components';
import pratikIcon from '../assets/images/Pratik_icon.png';
import Type from './Type';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

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

const waveAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

// Styled components
const Section = styled.section`
  padding:em;
  background: #000000;
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1em;
  }

  p {
  color:#c0c0c0;
  margin-bottom: -1em;
  }

  span {
  color: #be7dff;
  }

`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Content = styled.div`
  text-align: left;
  animation: ${fadeIn} 1s ease-out;
  padding: 2em;
  max-width: 50%;

  h1 {
    font-size: 2em;
    color: white;
    margin-top: 3em;

    @media (max-width: 768px) {
      font-size: 1.5em;
    }
  }

  h2 {
    font-size: 3em;
    color: white;
    margin-bottom: 0.5em;
    animation: ${slideIn} 1s ease-out;

    @media (max-width: 768px) {
      font-size: 2em;
    }
  }

  h3 {
    font-size: 2em;
    color: #be7dff;
    margin-top: 1em;

    @media (max-width: 768px) {
      font-size: 1.5em;
    }
  }

  p {
    font-size: 1.2em;
    color: #bcbcbc;
    line-height: 1.6;
    animation: ${fadeIn} 1.5s ease-out;
    margin-top: 2em;

    @media (max-width: 768px) {
      font-size: 1em;
    }
  }
`;

const Wave = styled.span`
  display: inline-block;
  transform-origin: 70% 70%;
  animation: ${waveAnimation} 2.1s infinite;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const ImageContainer = styled.div`
  max-width: 300px;
  animation: ${fadeIn} 1s ease-out;
  margin-left: 4em;

  img {
    width: 100%;
    margin-top: 3em;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 80%;
    margin-top: 2em;
  }
`;


const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin-top: 2em;

  li {
    margin: 0 1em;

    a {
      color: #bcbcbc;
      font-size: 2em;
      transition: color 0.3s ease;

      &:hover {
        color: #be7dff;
      }
    }
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <ContentWrapper>
        <Content>
          <h1>
            Hi..!
            <Wave role="img" aria-labelledby="wave">👋🏻</Wave>
          </h1>
          <h2>I'm Pratik Rodi</h2>
          <h3>
            <Type /> {/* Use the Type component for the typewriter effect */}
          </h3>
          <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
            I am fluent in classics like C++, Javascript and Go.
            My field of Interest's are building new  Web Technologies and Products and also in areas related to Blockchain.
            Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and 
            Frameworks  like React.js and Next.js</p>
          
        </Content>
        <ImageContainer>
          <img src={pratikIcon} alt="Pratik Rodi" />
        </ImageContainer>
      </ContentWrapper>
    
      <h3 style={{ textAlign: "center", color: "#bcbcbc", fontSize: "2em", marginBottom:"-0.1em" }}>Find Me On</h3>
      <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
      <SocialLinks>
        
        <li>
          <a href="https://github.com/pratikrodi" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://wa.me/919767597682" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/pratik-rodi-a75760247/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/pr.prateek?igsh=dHdiYThtd244YjU0" target="_blank" rel="noreferrer">
            <AiFillInstagram />
          </a>
        </li>
      </SocialLinks>
    </Section>
  );
};

export default Home;
