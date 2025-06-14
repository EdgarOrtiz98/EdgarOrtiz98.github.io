import Navbar from "../components/Navbar.jsx";
import "../styles/Proyectos.css";
import CardProyect from "../components/ProyectCard.jsx";
import ProjectsContainer from "../components/ProjectsContainer";
// imagenes de proyectos
import JuegoIngles from "../assets/images/Proyect-JuegoIngles.png";
import CriptoCoin from "../assets/images/Proyect-CriptoCoin.png";
import BuyStudy from "../assets/images/Proyect-BuyStudy.png";
import Gallix from "../assets/images/Proyect-Gallix.png";
import CarritoRescate from "../assets/images/Proyect-CarritoRescate.png";
// iconos de tecnologias de desarrollo
import html from "../assets/Tech-Icons/html5-original.svg";
import css from "../assets/Tech-Icons/css3-original.svg";
import javascript from "../assets/Tech-Icons/javascript-original.svg";
import python from "../assets/Tech-Icons/python-original.svg";
import react from "../assets/Tech-Icons/react-original.svg";
import kotlin from "../assets/Tech-Icons/kotlin-original.svg";
import firebase from "../assets/Tech-Icons/firebase-plain.svg";
import xml from "../assets/Tech-Icons/xml-original.svg";
import php from "../assets/Tech-Icons/php-original.svg";
import mysql from "../assets/Tech-Icons/mysql-original.svg";
import cplusplus from "../assets/Tech-Icons/cplusplus-original.svg";
import arduino from "../assets/Tech-Icons/arduino-original.svg";
// import nodejs from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
// import java from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
// import laravel from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg";
// import mongodb from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg";
// import git from "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";

function Proyectos() {
  return (
    <>
      <Navbar />
      <ProjectsContainer>
        <div className="card-container">
          <CardProyect
            priority={7}
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
            priority={8}
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
            priority={8}
            title="ColoresApp - Generador de Paletas de Colores"
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
            priority={10}
            title="BuyStudy - Gestión Financiera"
            description="Es una aplicación web que permite a los usuarios gestionar sus finanzas personales/escolares de manera efectiva. Los usuarios pueden registrar ingresos y gastos, visualizar sus transacciones y establecer presupuestos mensuales. La aplicación proporciona una visión clara de la situación financiera del usuario, ayudando a tomar decisiones informadas."
            imageUrl={BuyStudy}
            technologies={[
              { name: "Kotlin", icon: kotlin },
              { name: "Xml", icon: xml },
              { name: "Firebase", icon: firebase },
            ]}
          />
          <CardProyect
            priority={10}
            title="Gallix - Gestión Avícola"
            description="Aplicación web para la gestión integral de una granja avícola, que permite administrar registros de aves, control de gastos, ventas, clientes y empleados. Incluye módulos para seguimiento de procesos de crianza, catálogo de productos y sistema de comentarios."
            imageUrl={Gallix}
            technologies={[
              { name: "Html", icon: html },
              { name: "Css", icon: css },
              { name: "JavaScript", icon: javascript },
              { name: "PHP", icon: php },
              { name: "MySQL", icon: mysql },
              { name: "Firebase", icon: firebase },
            ]}
          />
          <CardProyect
            priority={10}
            title="Carrito de rescate"
            description="Sistema de rescate controlado remotamente mediante IoT, equipado con cámara de 180°, reconocimiento de objetos, iluminación integrada y transmisión en tiempo real. Diseñado para asistir en operaciones de rescate en zonas de desastre manteniendo a los socorristas en ubicaciones seguras."
            imageUrl={CarritoRescate}
            technologies={[
              { name: "C++", icon: cplusplus },
              { name: "Arduino", icon: arduino },
            ]}
          />
        </div>
      </ProjectsContainer>
    </>
  );
}
export default Proyectos;
