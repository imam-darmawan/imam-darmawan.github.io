import PropTypes from "prop-types";
import useProjectsStore from "../context/projects-store";
import { useState } from "react";
import { clsx } from "clsx";
import Button from "../components/Button";
import Boxicons from "../assets/icons/Boxicons";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <img
        src={project.images[0]}
        alt={project.category}
        className="h-full w-full object-cover"
        loading="lazy"
      />

      <div className="invisible absolute inset-0 flex items-center justify-center bg-stone-900/80 opacity-0 transition group-hover:visible group-hover:opacity-100">
        <p className="rounded-full bg-stone-100 px-3.5 py-[0.344rem] capitalize">
          {project.category}
        </p>
      </div>

      <button className="absolute inset-0" onClick={onClick}>
        <span className="inline-block h-0 w-0 overflow-hidden">
          See Project
        </span>
      </button>
    </div>
  );
};

const ProjectPreview = () => {
  const { selectedProject, setSelectedProject } = useProjectsStore();
  const [focusedImage, setFocusedImage] = useState(0);

  const handleSlide = (e, direction) => {
    e.stopPropagation();

    const nextImage = focusedImage + direction;

    if (nextImage === selectedProject.images.length) {
      setFocusedImage(0);
    } else if (nextImage < 0) {
      setFocusedImage(selectedProject.images.length - 1);
    } else {
      setFocusedImage(nextImage);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    document.body.style.overflowY = "auto";
    setSelectedProject(undefined);
  };

  return (
    <div
      className="fixed inset-0 z-10 flex flex-col gap-3 bg-stone-900/80 p-8"
      onClick={handleClose}
    >
      {/* Focused image */}
      <div className="relative flex-1" aria-hidden="true">
        <img
          src={selectedProject.images[focusedImage]}
          className="absolute h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Images */}
      <div
        className="mx-auto flex h-7 w-fit max-w-full gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {selectedProject.images.map((image, idx) => (
          <img
            key={image}
            src={image}
            alt={selectedProject.category}
            className={clsx(
              "relative z-10 aspect-[4/3] h-full cursor-pointer rounded-full object-cover opacity-50 transition hover:opacity-100",
              idx === focusedImage && "border-2 border-stone-100 !opacity-100",
            )}
            loading="lazy"
            onClick={() => setFocusedImage(idx)}
          />
        ))}
      </div>

      {/* Controls */}
      <Button
        label="Close"
        icon={<Boxicons name="x" className="h-5 w-5" />}
        className="absolute right-0 top-0 px-5 py-5 text-stone-100"
        onClick={handleClose}
      />

      <Button
        label="Prev"
        icon={<Boxicons name="left-arrow-alt" className="h-4 w-4" />}
        type="secondary"
        size="small"
        className="absolute left-6 top-1/2 -translate-y-1/2 !px-2.5"
        onClick={(e) => handleSlide(e, -1)}
      />

      <Button
        label="Next"
        icon={<Boxicons name="right-arrow-alt" className="h-4 w-4" />}
        type="secondary"
        size="small"
        className="absolute right-6 top-1/2 -translate-y-1/2 !px-2.5"
        onClick={(e) => handleSlide(e, 1)}
      />
    </div>
  );
};

const ProjectsGallery = ({ projects }) => {
  const { selectedProject, setSelectedProject } = useProjectsStore();

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.images[0]}
            project={project}
            onClick={() => {
              document.body.style.overflowY = "hidden";
              setSelectedProject(project);
            }}
          />
        ))}
      </div>

      {selectedProject && <ProjectPreview />}
    </div>
  );
};

const schema = PropTypes.shape({
  category: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
});

ProjectCard.propTypes = {
  project: schema,
  onClick: PropTypes.func,
};

ProjectPreview.propTypes = {
  project: schema,
};

ProjectsGallery.propTypes = {
  projects: PropTypes.arrayOf(schema),
};

export default ProjectsGallery;
