import React from "react";
import '../styles/Navbar.css';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
				<img src={Logo} alt="Logo" className="logo"/>
      </div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre mí</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Portafolio</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
