import "../styles/ProyectCard.css";

const ProjectCard = ({ imageUrl, title, description, technologies = [] }) => {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={imageUrl} alt="Project screenshot" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <h4 className="card-technologies-title">Tecnologías usadas:</h4>
        <div className="card-technologies">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <img src={tech.icon} alt={tech.name} className="tech-icon" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
