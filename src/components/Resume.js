import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

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

  p {
    color: #c0c0c0;
    font-size: 1.2em;
    margin: auto;
    max-width: 800px;
    line-height: 1.6;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1em;
      padding: 0 1em;
    }
  }
`;

const Heading = styled.h1`
  color: #be7dff;
  font-size: 2.3em;
  font-weight: 500;
  text-align: center;
  margin-top: 2em;  /* Adjust spacing as needed */
  margin-bottom: 1em;  /* Space below the heading */
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 3em;  /* Adjust padding as needed */
`;

const CardWrapper2 = styled(Col)`
  padding: 20px;
  height: 27em;
  width: 20em;
  margin: 1em;  /* Adjust margin to ensure spacing between cards */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardWrapper = styled(Col)`
  padding: 20px;
  height: auto;
  width: 50em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const StyledCard = styled(Card)`
  &.card-view {
    padding: 20px;
    background-color: #000000;
    border-radius: 10px;
    color: white;
    box-shadow: 0 4px 5px 3px rgba(119, 53, 136, 0.459);
    transition: all 0.5s ease 0s;
    height: 100%;

    &:hover {
      transform: scale(1.02);
      overflow: hidden;
      box-shadow: 0 4px 4px 5px rgba(129, 72, 144, 0.561);
    }
  }
`;

const Title = styled(Card.Title)`
  font-size: 1.8em;
  color: #be7dff;
  margin-bottom: 1em;
  text-align: center;
`;

const Description = styled(Card.Text)`
  font-size: 1.2em;
  color: #c0c0c0;
  text-align: justify;
  margin-bottom: 1em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ProjectCard = ({ title, description1, description2, description3, description4, description5, demoLink, isBlog }) => {
  return (
    <StyledCard className="card-view">
      <Card.Body>
        <Title>{title}</Title>
        <Description>{description1}</Description>
        <Description>{description2}</Description>
        <Description>{description3}</Description>
        <Description>{description4}</Description>
        <Description>{description5}</Description>
        
        {!isBlog && demoLink && (
          <ButtonWrapper>
            <Button variant="primary" href={demoLink} target="_blank">
              <CgWebsite /> &nbsp;{"Demo"}
            </Button>
          </ButtonWrapper>
        )}
      </Card.Body>
    </StyledCard>
  );
};

const Resume = () => {
  return (
    <Section id="resume">
      <h2>Resume</h2>
      <p>
        I am pursuing an MSc in Statistics from MIT WPU, Pune and hold a BSc in Statistics, 
        Computer Science, and Mathematics from Hislop College, Nagpur. I have hands-on experience 
        in Python, machine learning, deep learning, SQL databases. My portfolio includes data science 
        projects showcasing practical skills. During my 6+ months internship, I managed and analyzed 
        real-world data, enhancing my problem-solving abilities. I also bring strong communication and 
        teamwork skills. I'm eager to contribute to data-driven initiatives and make a meaningful impact in data science.
      </p>
      
      <Container>
        <Heading>My Internship</Heading>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <CardWrapper md={4} className="card">
            <ProjectCard
              title="Paarsh Infotech Pvt. Ltd."
              description1="Mastered the company’s proprietary web development platform, achieving maximum proficiency."
              description2="Engineered scalable web applications using the MERN stack (MongoDB, Express.js, ReactJS, Node.js), optimizing server load handling."
              description3="Reduced page load times by 10%, enhancing user experience and retaining more users."
              description4="Completed a comprehensive web development training program, logging 20+ hours of instruction and exercises."
              description5="Analyzed 30+ customer records, deriving insights to improve application performance and user satisfaction."
            />
          </CardWrapper>
        </Row>
      </Container>

<div><Heading>Education</Heading></div>
      <StyledContainer>
        
        <CardWrapper2 md={5} className="card">
          <ProjectCard
            title="Sinhgad Institute Of Management, Pune"
            description1="MCA-Master's in Computer Application"
            description2="Specialization in Software Development and Software Testing."
            description3="Coursework included Advanced Statistical Methods, Machine Learning, and Data Mining."
            description4="Graduating in 2024"
            description5="GPA: 8.06/10"
          />
        </CardWrapper2>
        <CardWrapper2 md={5} className="card">
          <ProjectCard
            title="Hislop College, Nagpur"
            description1="BSc in Physics, Computer Science, and Mathematics"
            description2="Studied core subjects including Probability Theory, Statistical Inference, and Mathematical Analysis."
            description3="Graduated in 2022"
            description4="GPA: 7.6/10"
            description5=""
          />
        </CardWrapper2>
      </StyledContainer>
    </Section>
  );
};

export default Resume;
