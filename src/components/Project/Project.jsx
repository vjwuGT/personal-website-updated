import React from 'react';
import './Project.css';

function Project({ title, description, imageUrl, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project">
      <img src={imageUrl} alt={title} className="project-image"/>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default Project;
