import React from 'react';
import '../styles/SkillCard.css'

const SkillCard = ({ icon, title, description }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3 className="skill-title">{title}</h3>
    </div>
  );
};

export default SkillCard;