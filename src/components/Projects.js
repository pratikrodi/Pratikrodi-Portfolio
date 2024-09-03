import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css'; // Import the CSS file
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ imgSrc, title, description, githubLink }) => {
  return (
    <Col md={4} className="project-card">
      <Card className="project-card-view">
        <div className="card-image">
          <Card.Img variant="top" src={imgSrc} alt="Project Image" />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {githubLink && (
            <Button variant="primary" href={githubLink} target="_blank">
              <FaGithub /> &nbsp; GitHub
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const Projects = () => {
  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        
      </Container>
      <div style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col>
          <ProjectCard
            // imgSrc={chatify}
            title="Finanza"
            description="Created robust financial advisory appointment booking system.
                        Streamlined the scheduling process for a CA firm with advisors and clients.
                        Enhanced appointment efficiency through comprehensive analysis of client needs and advisor availability.
                        Conducted user testing and gathered feedback and upgrade the system.
                        Technology Stack: MERN Stack (MongoDB, Express.js, ReactJS, Node.js).
                        "
            githubLink="https://github.com/pratikrodi/Finanza"
          
          />
          </Col>
          <Col>
          <ProjectCard
            // imgSrc={chatify}
            title="Catchy-Android"
            description="Developed an online product delivery system using Flutter Android.
                          Enabled efficient order processing and delivery tracking.
                          Contributed to 40% of the back-end development and 60% of the front-end design.
                          Increases productivity through optimized features.
                          Technology Stack: Flutter Android, Firebase."
            githubLink="https://github.com/pratikrodi/Catchy-Android"
        
          />
          </Col>
          <Col>
          <ProjectCard
            // imgSrc={chatify}
            title="Catchy_web"
            description="Designed a mobile-friendly interface to increase accessibility.
                        Generated daily Product Delivering system, enabling services like electrical, plumbing, and carpentry.
                        Improved booking efficiency and service management by contributing 40% to server-side development and 60% to UI design.
                        Increased booking competency by optimized features.
                        Technology Stack: Python-Django, PostgreSQL."
            githubLink="https://github.com/pratikrodi/Catchy-Web"
           
          />
          </Col>
        </div>
    </Container>
  );
};

export default Projects;
