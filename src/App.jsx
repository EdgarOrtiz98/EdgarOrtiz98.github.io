import { useState } from "react";
import "./styles/App.css";
import "./styles/Home.css";
import "./styles/About.css";
import "./styles/Contact.css";
import Navbar from "./components/Navbar.jsx";
import SkillCard from "./components/SkillCard.jsx";
import edgarImg from "./assets/images/EdgarDev.png";
import GithubIcon from "./assets/images/github-icon.svg";
import FacebookIcon from "./assets/images/facebook-icon.svg";
import InstagramIcon from "./assets/images/instagram-Icon.svg";
import YoutubeIcon from "./assets/images/youtube-icon.svg";

function App() {
  return (
    <>
      <Navbar />
      {/* Sección de inicio */}
      <div className="home-container" id="home">
        <div className="home-text-section">
          <h1 className="home-title">
            DESARROLLADOR <br />
            DE <span className="highlight">SOFTWARE</span>
          </h1>
          <h2 className="home-subtitle">EDGAR ORTIZ CHICO</h2>
          <p className="home-description">
            Creando Soluciones Innovadoras <br /> Para Desafíos Complejos
          </p>
          <div className="skills-wrapper">
            <SkillCard icon="</>" title="Programación" />
            <SkillCard icon="IA" title="Inteligencia Artificial" />
            <SkillCard icon="UX" title="Experiencia de Usuario" />
          </div>
        </div>
        <div className="home-image-section">
          <img src={edgarImg} alt="Edgar Ortiz Chico" className="home-image" />
        </div>
      </div>

      {/* seccion de sobre mí */}
      <div className="about-content" id="about">
        <div className="about-image">
          <img src={edgarImg} alt="Edgar Ortiz Chico" className="about-img" />
        </div>
        <div className="about-text">
          <h2>SOBRE MI</h2>
          <div className="about-details">
            <p>
              Mi nombre es <strong>Edgar Ortiz Chico</strong>
            </p>
            <p>
              Soy un <strong>Desarrollador de Software Multiplataforma</strong>{" "}
              originario de Tabasco, México. Cuento con experiencia en diversos
              proyectos y materias universitarias, lo que me ha permitido
              adquirir una sólida base técnica y creativa.
            </p>
            <p>
              <strong>Mi objetivo</strong> es descifrarme constantemente en
              nuevos entornos, aprender de cada experiencia, mejorar mis
              habilidades y aportar valor mediante soluciones innovadoras y
              eficaces. Estoy comprometido con el crecimiento continuo y la
              colaboración en proyectos que generen un impacto positivo.
            </p>
          </div>
          <div className="cv-options">
            <a
              href="/path-to-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              Ver CV
            </a>
            <a
              href="/path-to-cv.pdf"
              download="CV_Edgar_Ortiz.pdf"
              className="download-btn"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
      
      {/* Sección de contacto */}
      <div className="contact-content" id="contact">
        <h2 className="contact-title">Contactame </h2>
        <div className="contact-details">
          <div className="contact-text">
        <h3>¡Hablemos!</h3>
        </div>
        <div className="contact-text">
          <p>
            Si tienes alguna pregunta, inquietud o simplemente quieres
            charlar, no dudes en ponerte en contacto conmigo. Estoy aquí para
            ayudarte y colaborar en proyectos interesantes.
          </p>
        </div>
          <div className="contact-form">
            <a href="mailto:edchicort@gmail.com">
              <button className="email-btn">
                Enviame un correo
              </button>
            </a>
            </div>
          </div>
            <h3>Sígueme en:</h3>
          <div className="social-container">
  {/* GitHub */}
  <div className="tooltip github-tooltip">
    <a href="https://github.com/tuusuario" target="_blank" rel="noopener">
      <button className="github-btn">
        <img src={GithubIcon} alt="GitHub" className="social-icon"/>
        GitHub
      </button>
      <span className="tooltiptext">Visita mi GitHub</span>
    </a>
  </div>

  {/* Facebook */}
  <div className="tooltip facebook-tooltip">
    <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener">
      <button className="facebook-btn">
        <img src={FacebookIcon} alt="Facebook" className="social-icon"/>
        Facebook
      </button>
      <span className="tooltiptext">Sígueme en Facebook</span>
    </a>
  </div>

  {/* Instagram */}
  <div className="tooltip instagram-tooltip">
    <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener">
      <button className="instagram-btn">
        <img src={InstagramIcon} alt="Instagram" className="social-icon"/>
        Instagram
      </button>
      <span className="tooltiptext">Mis fotos en Instagram</span>
    </a>
  </div>

  {/* YouTube */}
  <div className="tooltip youtube-tooltip">
    <a href="https://youtube.com/tuusuario" target="_blank" rel="noopener">
      <button className="youtube-btn">
        <img src={YoutubeIcon} alt="YouTube" className="social-icon"/>
        YouTube
      </button>
      <span className="tooltiptext">Suscríbete en YouTube</span>
    </a>
  </div>
</div>
      </div>

      {/* Sección de footer */}
      <footer className="footer">
          <p>
            © 2025 Edgar Ortiz Chico. Todos los derechos reservados.
          </p>
      </footer>
    </>
  );
}
export default App;
