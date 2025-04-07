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
    <div className="home-container">
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
