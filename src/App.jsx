import { useState } from "react";
import "./styles/App.css";
import "./styles/Home.css";
import "./styles/About.css";
import Navbar from "./components/Navbar.jsx";
import SkillCard from "./components/SkillCard.jsx";
import edgarImg from "./assets/images/EdgarDev.png";

function App() {
  const [count, setCount] = useState(0);

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
