import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import './Resume.css'; // Import the CSS file

const ProjectCard = ({ title, description1, description2, description3, description4, description5, demoLink, isBlog }) => {
  return (
    <Card className="styled-card card-view">
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">{description1}</Card.Text>
        <Card.Text className="card-text">{description2}</Card.Text>
        <Card.Text className="card-text">{description3}</Card.Text>
        <Card.Text className="card-text">{description4}</Card.Text>
        <Card.Text className="card-text">{description5}</Card.Text>
        
        {!isBlog && demoLink && (
          <div className="button-wrapper">
            <Button variant="primary" href={demoLink} target="_blank">
              <CgWebsite /> &nbsp;{"Demo"}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        I Have Completed an MCA Post-graduate deegree from Sinhgad Institute Of Management Pune and hold a BSc in
        Computer Science, Physics and Mathematics from Hislop College, Nagpur. I have hands-on experience 
        in ReactJS, Python, Flutter, MongoDB, MySQL databases.
        I'm eager to contribute My Software Development as Well as Software Testing initiatives and make a meaningful impact in Development.
      </p>
      
      <Container>
        <h1 className="heading">My Internship</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="card-wrapper">
            <ProjectCard
              title="Paarsh Infotech Pvt. Ltd."
              description1="Mastered the company’s proprietary web development platform, achieving maximum proficiency."
              description2="Engineered scalable web applications using the MERN stack (MongoDB, Express.js, ReactJS, Node.js), optimizing server load handling."
              description3="Reduced page load times by 10%, enhancing user experience and retaining more users."
              description4="Completed a comprehensive web development training program, logging 20+ hours of instruction and exercises."
              description5="Analyzed 30+ customer records, deriving insights to improve application performance and user satisfaction."
            />
          </Col>
        </Row>
      </Container>

      <div><h1 className="heading">Education</h1></div>
      <div className="styled-container">
        <Col md={5} className="card-wrapper2">
          <ProjectCard
            title="Sinhgad Institute Of Management, Pune"
            description1="MCA-Master's in Computer Application"
            description2="Specialization in Software Development and Software Testing."
            description3="Coursework included Advanced Statistical Methods, Machine Learning, and Data Mining."
            description4="Graduating in 2024"
            description5="GPA: 8.06/10"
          />
        </Col>
        <Col md={5} className="card-wrapper2">
          <ProjectCard
            title="Hislop College, Nagpur"
            description1="BSc in Physics, Computer Science, and Mathematics"
            description2="Studied core subjects including Probability Theory, Statistical Inference, and Mathematical Analysis."
            description3="Graduated in 2022"
            description4="GPA: 7.6/10"
            description5=""
          />
        </Col>
      </div>
    </section>
  );
};

export default Resume;
