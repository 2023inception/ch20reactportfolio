import { Link } from "react-router-dom";
import "./Project.css";

function Project({ project }) {
  return (
    <div className="project-container">
      <h2 className="project-title">{project.title}</h2>
      <div className="image-container">
        <img
          className="project-image"
          src={project.image}
          alt={project.title}
        />
        <div className="more-info-container">
          <p className="project-description">{project.description}</p>
          <Link to={`/projects/${project.id}`} className="more-info-button">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
