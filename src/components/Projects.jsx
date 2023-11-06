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
    image: image1,
    deployedLink: "https://sanjeeththarmarajah.github.io/movie-bookings/",
    githubLink: "https://github.com/2023inception",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is a project",
    image: image2,
    deployedLink: "https://github.com/Golnaz8/Wealth-Tracker",
    githubLink: "https://github.com/2023inception",
  },
  {
    id: 3,
    title: "Assignment",
    description: "This is an assignment",
    image: image3,
    deployedLink: "https://2023inception.github.io/passwordgeneratorCH3/",
    githubLink: "https://github.com/2023inception/passwordgeneratorCH3",
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
