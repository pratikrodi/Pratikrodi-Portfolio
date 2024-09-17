import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css'; // Import the CSS file
import { FaBars, FaTimes, FaHome, FaUser, FaFileAlt, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';  // Import icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-left">Pratik Rodi</div>
        <div className="hamburger-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`nav-right ${isOpen ? 'open' : ''}`}>
          <Link to="home" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>
            <FaHome /> Home
          </Link>
          <Link to="about" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>
            <FaUser /> About
          </Link>
          <Link to="resume" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>
            <FaFileAlt /> Resume
          </Link>
          <Link to="projects" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>
            <FaProjectDiagram /> Projects
          </Link>
          <Link to="contact" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>
            <FaEnvelope /> Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
