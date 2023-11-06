import Project from "./Project";
import "./Projects.css";
import image1 from '../assets/project1.png';
import image2 from '../assets/project2.png';
import image3 from '../assets/passwordgenerator.png';


export const PROJECTS = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a project",
    image: "project1.png",
    deployedLink: "https://www.google.com",
    githubLink: "https://github.com/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is a project",
    image: "project2.png",
    deployedLink: "https://www.google.com",
    githubLink: "https://github.com/",
  },
  {
    id: 3,
    title: "Assignment",
    description: "This is an assignment",
    image: "passwordgenerator.png",
    deployedLink: "https://www.google.com",
    githubLink: "https://github.com/",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="grid-container">
        {PROJECTS.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
