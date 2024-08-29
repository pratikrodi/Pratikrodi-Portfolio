import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { FaBars, FaTimes, FaHome, FaUser, FaFileAlt, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';  // Import icons

// Keyframes for animations
const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Global styles including font-family
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000;
  padding: 1em 2em;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  animation: ${slideIn} 0.5s ease-out;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    padding: 0.5em 1em;
  }
`;

const NavLeft = styled.div`
  color: white;
  font-size: 1.5em;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
  margin-right:2em;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavRight = styled.div`
  display: flex;
  gap: 1em;
  margin-right: 5em;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: #333;
    padding: 1em;
    border-radius: 0.5em;
    margin-right: 1em;
    z-index: 1000;
    gap: 0.5em;
    width: 80%;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  padding: 0.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;

  &:hover {
    color: #be7dff;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #be7dff;
    transition: width 0.3s ease-in-out;
  }

  &:hover:before {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 0.3em;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Nav>
        <NavLeft>Pratik Rodi</NavLeft>
        <HamburgerIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </HamburgerIcon>
        <NavRight open={isOpen}>
          <NavLink to="home" smooth={true} duration={1000} onClick={toggleMenu}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="about" smooth={true} duration={1000} onClick={toggleMenu}>
            <FaUser /> About
          </NavLink>
          <NavLink to="resume" smooth={true} duration={1000} onClick={toggleMenu}>
            <FaFileAlt /> Resume
          </NavLink>
          <NavLink to="projects" smooth={true} duration={1000} onClick={toggleMenu}>
            <FaProjectDiagram /> Projects
          </NavLink>
          <NavLink to="contact" smooth={true} duration={1000} onClick={toggleMenu}>
            <FaEnvelope /> Contact
          </NavLink>
        </NavRight>
      </Nav>
    </>
  );
}

export default Header;
