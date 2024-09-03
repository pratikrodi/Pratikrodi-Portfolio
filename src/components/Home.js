import React from 'react';
import './Home.css';  // Import the new CSS file
import pratikIcon from '../assets/images/Pratik_icon.png';
import Type from './Type';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiFillRedEnvelope } from 'react-icons/ai';
import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="section" id="home">
      <div className="content-wrapper">
        <div className="content">
          <h1>
            Hi..!
            <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
          </h1>
          <h2>I'm Pratik Rodi</h2>
          <h3>
            <Type /> {/* Use the Type component for the typewriter effect */}
          </h3>
          <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
            I am Good in classics like ReactJs, Python, Javascript and Java.
            My field of Interest's are building new Software Technologies.
            Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and 
            Frameworks like React.js</p>
        </div>
        <div className="image-container">
          <img src={pratikIcon} alt="Pratik Rodi" />
        </div>
      </div>
    
      <h3 style={{ textAlign: "center", color: "#bcbcbc", fontSize: "2em", marginBottom:"-0.1em" }}>Find Me On</h3>
      <p>
        Feel free to <span className="purple">connect </span>with me
      </p>
      <ul className="social-links">
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
        <li>
          <a href="mailto:prateekrodi@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Home;
