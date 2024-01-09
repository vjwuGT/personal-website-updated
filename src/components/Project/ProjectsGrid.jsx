import React from "react";
import Project from "./Project";

import "./ProjectsGrid.css";

function ProjectsGrid({ projects }) {
  return (
    <div>
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsGrid;
