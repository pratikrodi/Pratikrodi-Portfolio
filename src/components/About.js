import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import { ImPointRight } from 'react-icons/im';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from 'react-icons/di';
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';
import pratikIcon from '../assets/images/Pratik_icon.png'; // Adjust the path as needed

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

// Styled components
const Section = styled.section`
  padding: 5em 2em;
  background: #000000; /* Dark background */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  max-width: 1200px;
  margin: auto;
  animation: ${fadeIn} 1s ease-out;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  div1 {
    h3 {
      color: #be7dff;
      font-size: 2em;
  }
   }

   div2 {
    h3 {
      color: #be7dff;
      font-size: 2em;
  }
   }
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2em;

  img {
    width: 200px;
    border-radius: 50%;
    margin-bottom: 1.5em;
  }
`;

const InfoSection = styled.div`
  color: #c0c0c0;
  margin-bottom: 2em;

  p {
    font-size: 1.3em;
    margin-bottom: 0.5em;
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const RightSide = styled.div`
  flex: 2;
  padding: 2em;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    padding: 1em;
  }

  h3 {
    font-size: 2em;
    color: #be7dff;
  }

  p {
    font-size: 1.2em;
    color: #c0c0c0;
    line-height: 1.6;
    animation: ${fadeIn} 1.5s ease-out;
    margin-top: 0.1em;
    width: 100%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      font-size: 1.1em;
      color: #fff;
      margin-bottom: 0.5em;

      strong {
        color: #fff;
      }
    }
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  color: #c0c0c0;
  margin: 10px;
  padding: 10px;
  border: 1.7px solid rgba(200, 137, 230, 0.637);
  border-radius: 5px;
  transition: all 0.4s ease;

  @media (max-width: 767px) {
    font-size: 1.2em;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(197, 115, 230, 0.883);
  }

  .icon {
    margin-right: 10px;
  }

  .name {
    font-size: 1em;
    color: #fff;
  }
`;

const ServiceList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  color: #c0c0c0;
  padding: 10px;
  border: 1.5px solid rgba(200, 137, 230, 0.637);
  border-radius: 5px;
  transition: all 0.4s ease;
  width: 100%;
  max-width: 500px;

  @media (max-width: 767px) {
    font-size: 1em;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(197, 115, 230, 0.883);
  }

  .icon {
    margin-right: 10px;
  }

  .name {
    font-size: 1em;
    color: #fff;
  }
`;

const techData = [
  { icon: <CgCPlusPlus />, name: 'C++' },
  { icon: <DiJavascript1 />, name: 'JavaScript' },
  { icon: <TbBrandGolang />, name: 'Go' },
  { icon: <DiNodejs />, name: 'Node.js' },
  { icon: <DiReact />, name: 'React' },
  { icon: <SiSolidity />, name: 'Solidity' },
  { icon: <DiMongodb />, name: 'MongoDB' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <DiGit />, name: 'Git' },
  { icon: <SiFirebase />, name: 'Firebase' },
  { icon: <SiRedis />, name: 'Redis' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <DiPython />, name: 'Python' },
  { icon: <DiJava />, name: 'Java' },
];

const servicesData = [
  { icon: <DiReact />, name: 'Web Development' },
  { icon: <DiNodejs />, name: 'Backend Development' },
  { icon: <SiFirebase />, name: 'Firebase Integration' },
  { icon: <TbBrandGolang />, name: 'API Development' },
  { icon: <DiMongodb />, name: 'Database Management' },
];

const About = () => {
  return (
    <Section id="about">
      <Container>
        <LeftSide>
          <img src={pratikIcon} alt="Pratik Rodi" />
          <InfoSection>
            <p>Name: Pratik Rodi</p>
            <p>Job Role: Software Developer</p>
            <p>Experience: 4 Month Internship Experience</p>
            <p>Address: Pune, Maharashtra, India</p>
          </InfoSection>
        </LeftSide>
        <RightSide>
          <h3>About Me</h3>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Pratik Rodi</span> from <span className="purple">Pune, Maharashtra, India.</span>
            <br />
            I am currently a software developer with a focus on creating impactful solutions. I have a strong foundation in various technologies and am always eager to learn and adapt.
            <br />
            <br />
            Apart from coding, some activities I love include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          
        </RightSide>
        <div1>
        <h3>Tech Stack</h3>
          <TechList>
            {techData.map((tech, index) => (
              <TechItem key={index}>
                <div className="icon">{tech.icon}</div>
                <div className="name">{tech.name}</div>
              </TechItem>
            ))}
          </TechList>
        </div1>
        
          <div2>
          <h3>Services</h3>
          <ServiceList>
            {servicesData.map((service, index) => (
              <ServiceItem key={index}>
                <div className="icon">{service.icon}</div>
                <div className="name">{service.name}</div>
              </ServiceItem>
            ))}
          </ServiceList>
            </div2>
      </Container>
    </Section>
  );
}

export default About;
