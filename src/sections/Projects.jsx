import useAppStore from "../context/app-store";
import author from "../data/author";
import clsx from "clsx";
import Button from "../components/Button";
import useProjectsStore from "../context/projects-store";
import ProjectsList from "./ProjectsList";
import ProjectsGallery from "./ProjectsGallery";

const Filter = () => {
  const { selectedRole } = useAppStore();
  const { filterKeyword, setFilterKeyword } = useProjectsStore();

  const categories = [
    ...new Set(
      author.roles[selectedRole].projects.list.reduce(
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

const Projects = () => {
  const { selectedRole } = useAppStore();
  const { filterKeyword } = useProjectsStore();

  const filteredProjects =
    filterKeyword === "all"
      ? author.roles[selectedRole].projects.list
      : author.roles[selectedRole].projects.list.filter(
          (project) => project.category === filterKeyword,
        );

  let projectsToShow;

  switch (author.roles[selectedRole].projects.type) {
    case "list":
      projectsToShow = <ProjectsList projects={filteredProjects} />;
      break;
    case "gallery":
      projectsToShow = <ProjectsGallery projects={filteredProjects} />;
      break;
  }

  return (
    filteredProjects.length !== 0 && (
      <div className="mt-20">
        <h2 className="text-center text-lg font-bold">Projects</h2>

        <div className="mt-4">
          <Filter />
        </div>

        <div className="mt-8">{projectsToShow}</div>
      </div>
    )
  );
};

export default Projects;
