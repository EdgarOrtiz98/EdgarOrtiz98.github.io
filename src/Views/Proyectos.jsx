import Navbar from "../components/Navbar.jsx";
import "../styles/Proyectos.css";
import CardProyect from "../components/ProyectCard.jsx";
// imagenes de proyectos
import JuegoIngles from "../assets/images/Proyect-JuegoIngles.png";
import CriptoCoin from "../assets/images/Proyect-CriptoCoin.png";
import BuyStudy from "../assets/images/Proyect-BuyStudy.png";
// iconos de tecnologias de desarrollo
import html from "../assets/Tech-Icons/html5-original.svg";
import css from "../assets/Tech-Icons/css3-original.svg";
import javascript from "../assets/Tech-Icons/javascript-original.svg";
import python from "../assets/Tech-Icons/python-original.svg";
import react from "../assets/Tech-Icons/react-original.svg";
import kotlin from "../assets/Tech-Icons/kotlin-original.svg";
import firebase from "../assets/Tech-Icons/firebase-plain.svg";
import xml from "../assets/Tech-Icons/xml-original.svg";
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
          title="CryptoCoin Explorer"
          description="Es una aplicación intuitiva que muestra datos esenciales del mercado de criptomonedas en tiempo real, incluyendo precios, cambios porcentuales y capitalización de mercado. Diseñada para inversores y entusiastas, permite filtrar por moneda fiduciaria y ofrece una vista clara de los activos más relevantes del mercado. (Implementa un API)"
          imageUrl={CriptoCoin}
          technologies={[
            { name: "Html", icon: html },
            { name: "Css", icon: css },
            { name: "JavaScript", icon: javascript },
            { name: "React", icon: react },
          ]}
        />
        <CardProyect
          title="ColoresApp"
          description="Esta aplicación permite a los usuarios explorar una amplia gama de colores, proporcionando información detallada sobre cada uno. Los usuarios pueden buscar colores específicos, ver sus códigos hexadecimales y RGB, y obtener sugerencias de paletas de colores complementarias. Ideal para diseñadores y entusiastas del color."
          imageUrl="/screenshot-contact.jpg"
          technologies={[
            { name: "Html", icon: html },
            { name: "Css", icon: css },
            { name: "JavaScript", icon: javascript },
            { name: "React", icon: react },
          ]}
        />
        <CardProyect
          title="BuyStudy"
          description="Es una aplicación web que permite a los usuarios gestionar sus finanzas personales/escolares de manera efectiva. Los usuarios pueden registrar ingresos y gastos, visualizar sus transacciones y establecer presupuestos mensuales. La aplicación proporciona una visión clara de la situación financiera del usuario, ayudando a tomar decisiones informadas."
          imageUrl={BuyStudy}
          technologies={[
            { name: "Kotlin", icon: kotlin },
            { name: "Xml", icon: xml },
            { name: "Firebase", icon: firebase },
          ]}
        />
      </div>
    </>
  );
}
export default Proyectos;
