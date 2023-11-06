import { useParams } from "react-router-dom";
import { PROJECTS } from "./Projects";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import "./ProjectPage.css";

function ProjectPage() {
  const { id } = useParams();

  const project = PROJECTS.find((project) => project.id === Number(id));

  if (!project) {
    return <div className="not-found ">Project not found</div>;
  }

  return (
    <div className="project-container">
      <h1 className="project-title">{project.title}</h1>
      <div className="image-container">
        <img
          className="project-image"
          src={project.image}
          alt={project.title}
        />
        <div className="description-container">
          <p className="project-description">{project.description}</p>
          <div className="action-buttons">
            <a href={project.deployedLink} className="action-button">
              <FiExternalLink />
              Live Demo
            </a>
            <a href={project.githubLink} className="action-button">
              <BsGithub />
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
