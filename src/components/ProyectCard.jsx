import "../styles/ProyectCard.css";

const ProjectCard = ({ imageUrl, title, description }) => {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={imageUrl} alt="Project screenshot" />
      </div>
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
