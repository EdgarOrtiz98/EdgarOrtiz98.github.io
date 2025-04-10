import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Navbar from './components/Navbar.jsx'
import SkillCard from './components/SkillCard.jsx'
import edgarImg from './assets/images/EdgarDev.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className="home-container" id='home'>
      <div className="home-text-section">
        <h1 className="home-title">
          DESARROLLADOR <br/>DE <span className="highlight">SOFTWARE</span>
        </h1>
        <h2 className="home-subtitle">EDGAR ORTIZ CHICO</h2>
        <p className="home-description">
          Creando Soluciones Innovadoras <br /> Para Desafíos Complejos
        </p>
        <div className="skills-wrapper">
          <SkillCard icon="</>" title="Programación"/>
          <SkillCard icon="IA" title="Inteligencia Artificial"/>
          <SkillCard icon="UX" title="Experiencia de Usuario"/>
        </div>
      </div>
      <div className="home-image-section">
        <img src={edgarImg} alt="Edgar Ortiz Chico" className="home-image" />
      </div>
    </div>
    <div className="about-container" id='about'>
      <div className="about-text-section">
        <h1 className="about-title">SOBRE MÍ</h1>
        <p className="about-description">
          Soy un apasionado desarrollador de software con experiencia en la creación de soluciones innovadoras para desafíos complejos. Mi enfoque se centra en la programación, la inteligencia artificial y la experiencia de usuario.
        </p>
        <p className="about-description">
          Me encanta aprender y explorar nuevas tecnologías, y siempre estoy buscando formas de mejorar mis habilidades y conocimientos.
        </p>
        <p className="about-description">
          Estoy emocionado por la oportunidad de contribuir a proyectos desafiantes y colaborar con equipos talentosos.
        </p>
        <p className="about-description">
          ¡Gracias por visitar mi portafolio!
        </p>
      </div>
      {/* <div className="about-image-section">
        <img src={edgarImg} alt="Edgar Ortiz Chico" className="about-image" />    
      </div> */}
    </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
