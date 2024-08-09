import React from 'react';
import { Link } from 'react-scroll';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

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

const linkHover = keyframes`
  from {
    color: white;
  }
  to {
    color: #f39c12;
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
  background: #333;
  padding: 2em;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  animation: ${slideIn} 0.5s ease-out;
  font-family: 'Montserrat', sans-serif; /* Font for the header */
`;

const NavLeft = styled.div`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
`;

const NavRight = styled.div`
  display: flex;
  gap: 1em;
  margin-right: 5em;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  padding: 0.5em;
  font-family: 'Roboto', sans-serif; /* Font for the links */

  &:hover {
    color: #f39c12;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #f39c12;
    transition: width 0.3s ease-in-out;
  }

  &:hover:before {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <NavLeft>Portfolio</NavLeft>
        <NavRight>
          <NavLink to="home" smooth={true} duration={1000}>Home</NavLink>
          <NavLink to="about" smooth={true} duration={1000}>About</NavLink>
          <NavLink to="resume" smooth={true} duration={1000}>Resume</NavLink>
          <NavLink to="projects" smooth={true} duration={1000}>Projects</NavLink>
          <NavLink to="contact" smooth={true} duration={1000}>Contact</NavLink>
        </NavRight>
      </Nav>
    </>
  );
}

export default Header;
