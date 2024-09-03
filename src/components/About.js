import React from 'react';
import './About.css'; // Import the CSS file
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
  DiDjango,
} from 'react-icons/di';
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiPython,
  SiFlutter,
  SiSelenium,
} from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';
import pratikIcon from '../assets/images/Pratik_icon.png';

const techData = [
  { icon: <DiReact />, name: 'React' },
  { icon: <DiNodejs />, name: 'Node.js' },
  { icon: <DiJavascript1 />, name: 'JavaScript' },
  { icon: <DiMongodb />, name: 'MongoDB' },
  { icon: <SiFlutter />, name: 'Flutter' },
  { icon: <DiGit />, name: 'Git' },
  { icon: <DiPython />, name: 'Python' },
  { icon: <DiJava />, name: 'Java' },
  { icon: <SiSelenium />, name: 'Selenium' },
  { icon: <CgCPlusPlus />, name: 'C++' },
];

const servicesData = [
  { icon: <DiReact />, name: 'Full Stack Development' },
  { icon: <SiSelenium />, name: 'Software Testing' },
  { icon: <SiFlutter />, name: 'Android Development' },
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="left-side">
          <img src={pratikIcon} alt="Pratik Rodi" />
        </div>
        <div className="right-side">
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
              <ImPointRight /> Treking
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking  
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </div>
        <div className="div1">
          <h3>Tech Stack</h3>
          <div className="tech-list">
            {techData.map((tech, index) => (
              <div className="tech-item" key={index}>
                <div className="icon">{tech.icon}</div>
                <div className="name">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="div2">
          <h3>Services</h3>
          <div className="service-list">
            {servicesData.map((service, index) => (
              <div className="service-item" key={index}>
                <div className="icon">{service.icon}</div>
                <div className="name">{service.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
