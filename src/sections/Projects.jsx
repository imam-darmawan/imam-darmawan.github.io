import useAppStore from "../context/app-store";
import author from "../data/author";
import clsx from "clsx";
import Button from "../components/Button";
import PropTypes from "prop-types";
import useProjectsStore from "../context/projects-store";
import ProjectPreview from "../components/ProjectPreview";

const Filter = () => {
  const { selectedRole } = useAppStore();
  const { filterKeyword, setFilterKeyword } = useProjectsStore();

  const categories = [
    ...new Set(
      author.roles[selectedRole].projects.reduce(
        (accumulator, project) => {
          if (project.category) return accumulator.concat(project.category);
          return accumulator;
        },
        ["all"],
      ),
    ),
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => {
        const isChecked = category === filterKeyword;

        return (
          <Button
            key={category}
            label={category}
            type="secondary"
            size="small"
            className={clsx(
              "capitalize",
              isChecked && "border-stone-400 bg-stone-200",
            )}
            onClick={() => setFilterKeyword(category)}
          />
        );
      })}
    </div>
  );
};

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

const Projects = () => {
  const { selectedRole } = useAppStore();
  const { filterKeyword, selectedProject, setSelectedProject } =
    useProjectsStore();

  const filteredProjects =
    filterKeyword === "all"
      ? author.roles[selectedRole].projects
      : author.roles[selectedRole].projects.filter(
          (project) => project.category === filterKeyword,
        );

  return (
    <div className="mt-20">
      <h2 className="text-center text-lg font-bold">Projects</h2>

      <div className="mt-4">
        <Filter />
      </div>

      <div className="mt-8">
        {filteredProjects.map((project) => (
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
        <div className={clsx("fixed inset-0 z-10")}>
          <ProjectPreview
            project={selectedProject}
            setProject={setSelectedProject}
          />
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.number,
    category: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.string,
    libs: PropTypes.arrayOf(PropTypes.string),
  }),
  onClick: PropTypes.func,
};

export default Projects;
