import { useState } from "react";
import useAppStore from "../context/app-store";
import author from "../data/author";
import clsx from "clsx";
import Button from "../components/Button";
import PropTypes from "prop-types";
import { create } from "zustand";

const useProjectsStore = create((set) => ({
  filterKeyword: "all",
  setFilterKeyword: (keyword) => set(() => ({ filterKeyword: keyword })),
}));

const Filter = () => {
  const { selectedRole } = useAppStore();
  const { filterKeyword, setFilterKeyword } = useProjectsStore();

  const tags = [
    ...new Set(
      author.roles[selectedRole].projects.reduce(
        (accumulator, project) => {
          if (project.tags) return accumulator.concat(project.tags);

          return accumulator;
        },
        ["all"],
      ),
    ),
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {tags.map((tag) => {
        const isChecked = tag === filterKeyword;

        return (
          <Button
            key={tag}
            label={tag}
            type="secondary"
            size="small"
            className={clsx(
              "capitalize",
              isChecked && "border-stone-400 bg-stone-200",
            )}
            onClick={() => setFilterKeyword(tag)}
          />
        );
      })}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="relative flex min-h-14 items-center gap-3 border-b border-stone-300 p-3 transition-all hover:border-stone-400 hover:px-4">
      <h3 className="flex-1 font-bold">{project.title}</h3>

      <p className="capitalize text-stone-600">
        {project.category && project.category + " — "}
        {project.date && <time dateTime={project.date}>{project.date}</time>}
      </p>

      <button className="absolute inset-0">
        <span className="inline-block h-0 w-0 overflow-hidden">
          See Project
        </span>
      </button>
    </div>
  );
};

const Projects = () => {
  const { selectedRole } = useAppStore();
  const { filterKeyword } = useProjectsStore();

  const filteredProjects =
    filterKeyword === "all"
      ? author.roles[selectedRole].projects
      : author.roles[selectedRole].projects.filter((project) =>
          project.tags.includes(filterKeyword),
        );

  return (
    <div className="mt-20">
      <h2 className="text-center text-lg font-bold">Projects</h2>

      <div className="mt-4">
        <Filter />
      </div>

      <div className="mt-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.number,
    category: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Projects;
