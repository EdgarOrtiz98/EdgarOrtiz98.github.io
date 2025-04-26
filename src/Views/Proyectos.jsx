import Navbar from "../components/Navbar.jsx";
import "../styles/Proyectos.css";
import CardProyect from "../components/ProyectCard.jsx";
import JuegoIngles from "../assets/images/Proyect-JuegoIngles.png";
import html from "../assets/Tech-Icons/html5-original.svg";
import css from "../assets/Tech-Icons/css3-original.svg";
import javascript from "../assets/Tech-Icons/javascript-original.svg";
import python from "../assets/Tech-Icons/python-original.svg";
// import react from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
// import nodejs from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
// import java from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
// import php from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg";
// import laravel from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg";
// import mysql from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";
// import mongodb from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg";
// import git from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";


function Proyectos() {
  return (
    <>
      <Navbar />
      <div className="card-container">
        <CardProyect
          title="Juego de Presente Perfecto (Ingles)"
          description="El juego de presente perfecto ayuda a los usuarios a mejorar su conocimiento del presente perfecto en inglés. Los jugadores deben completar las oraciones seleccionando la opción correcta. El juego incluye preguntas con respuestas positivas, negativas y de interrogación."
          imageUrl={JuegoIngles}
          technologies={[
            { name: "Html", icon: html },
            { name: "Css", icon: css },
            { name: "JavaScript", icon: javascript },
            { name: "Python", icon: python },
          ]}
        />
        <CardProyect
          title="Proyecto 2"
          description="Descripción del proyecto 2"
          imageUrl="/screenshot-home.jpg"
        />
        <CardProyect
          title="Proyecto 3"
          description="Descripción del proyecto 3"
          imageUrl="/screenshot-contact.jpg"
        />
      </div>
    </>
  );
}
export default Proyectos;
