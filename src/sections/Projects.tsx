import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard";

const { selected, other } = projects;

function Projects() {
  return (
    <div className="relative isolate px-3" id="work">
      <div className="row mx-auto max-w-1xl lg:px-8.  m-0  px-8 md:px-20 lg:px-20 ">
        <h5 className="text-left text-xs ">Selected Work</h5>

        <div className="pt-5 grid lg:grid-cols-3 text-left md:grid-cols-2">
          {selected.map((work, index) => (
            <ProjectCard
              work={work}
              key={index}
              index={index}
              height={`h-120`}
              style=""
            />
          ))}
        </div>
      </div>

      <div className="row mx-auto max-w-1xl mt-20 lg:px-8. m-0  px-8 md:px-20 lg:px-20">
        <h5 className="text-left text-xs">Other Work</h5>

        <div className="pt-5 grid md:grid-cols-2 lg:grid-cols-4  text-left">
          {other.map((work, index) => (
            <ProjectCard
              work={work}
              key={index}
              index={index + 5}
              height={`h-60`}
              style={`py-0 lg:py-3`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
