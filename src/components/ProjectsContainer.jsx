import React from "react";
import CardProyect from "./ProyectCard.jsx";

const ProjectsContainer = ({ children }) => {
  // Encontrar el div con clase card-container
  const container = React.Children.toArray(children).find(
    child => React.isValidElement(child) && 
            child.props.className === "card-container"
  );

  if (!container) {
    return <div className="projects-container">{children}</div>;
  }

  // Ordenar los CardProyect dentro del container
  const sortedCards = React.Children.toArray(container.props.children)
    .filter(child => React.isValidElement(child) && child.type === CardProyect)
    .sort((a, b) => (b.props.priority || 0) - (a.props.priority || 0));

  // Clonar el container con los hijos ordenados
  const sortedContainer = React.cloneElement(container, {
    children: sortedCards
  });

  return <div className="projects-container">{sortedContainer}</div>;
};

export default ProjectsContainer;