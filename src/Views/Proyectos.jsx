import Navbar from "../components/Navbar.jsx";
import "../styles/Proyectos.css";
import CardProyect from "../components/ProyectCard.jsx";

function Proyectos() {
  return (
    <>
      <Navbar />
      <div className="card-container">
        <CardProyect
          title="Proyecto 1"
          description="Descripción del proyecto 1"
          imageUrl="/screenshot-about.jpg"
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
