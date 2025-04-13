import React, { useState } from "react";
import '../styles/Navbar.css';
import Logo from '../assets/images/Logo.png';
import '../assets/fontello/fontello.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo"/>
      </div>

      <button 
        className="menu-toggle" 
        onClick={toggleMenu}
        aria-label="Toggle menu">
        <i className="icon-menu"></i>
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/#home">Inicio</a></li>
        <li><a href="/#about">Sobre mí</a></li>
        <li><a href="/#contact">Contacto</a></li>
        {/* <li><a href="#">Portafolio</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;