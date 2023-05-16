import Project from "../components/Project/Project.jsx";
import { projects } from "../helpers/projectList.js";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => (
            <Project
              key={index} /* в нормальных проектах так не делать */
              title={project.title}
              img={project.img}
              index={index}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
