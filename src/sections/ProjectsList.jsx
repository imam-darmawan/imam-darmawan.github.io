import PropTypes from "prop-types";
import useProjectsStore from "../context/projects-store";
import ProjectPreview from "../components/ProjectPreview";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="relative flex min-h-12 items-center gap-3 border-b border-stone-300 p-3 transition-all hover:border-stone-400 hover:px-4">
      <h3 className="flex-1 font-bold">{project.title}</h3>

      <p className="capitalize text-stone-600">
        {project.category && project.category}
        {project.date && <time dateTime={project.date}> — {project.date}</time>}
      </p>

      <button className="absolute inset-0" onClick={onClick}>
        <span className="inline-block h-0 w-0 overflow-hidden">
          See Project
        </span>
      </button>
    </div>
  );
};

const ProjectsList = ({ projects }) => {
  const { selectedProject, setSelectedProject } = useProjectsStore();

  return (
    <div>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => {
              document.body.style.overflowY = "hidden";
              setSelectedProject(project);
            }}
          />
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-10">
          <ProjectPreview />
        </div>
      )}
    </div>
  );
};

const schema = PropTypes.shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.string,
  libs: PropTypes.arrayOf(PropTypes.string),
});

ProjectCard.propTypes = {
  project: schema,
  onClick: PropTypes.func,
};

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(schema),
};

export default ProjectsList;
