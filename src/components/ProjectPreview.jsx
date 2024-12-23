import { useState } from "react";
import { clsx } from "clsx";
import Button from "../components/Button";
import Tabs from "../components/Tabs";
import Boxicons from "../assets/icons/Boxicons";
import useProjectsStore from "../context/projects-store";

const ProjectPreview = () => {
  const [screenMode, setScreenMode] = useState("desktop");
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const { selectedProject, setSelectedProject } = useProjectsStore();

  return (
    <div className={clsx("flex h-full w-full flex-col gap-3 bg-stone-100 p-3")}>
      {/* Header */}
      <div className="flex h-[2.875rem] items-center px-6 max-sm:px-0">
        <div className="flex-1">
          <Button
            label="<- Back"
            onClick={() => {
              document.body.style.overflowY = "scroll";
              setSelectedProject(undefined);
            }}
          />
        </div>

        <div>
          <div className="w-32 max-md:hidden">
            <Tabs
              list={["desktop", "mobile"]}
              activeTab={screenMode}
              onTabClick={setScreenMode}
              iconOnly
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          {selectedProject.description && (
            <Button
              label="Info"
              icon={<Boxicons name="info" className="h-4 w-4" />}
              onClick={() => setIsDescriptionOpen(true)}
              hasTooltip
            />
          )}

          {selectedProject.source && (
            <Button
              label="</> Source"
              url={selectedProject.source}
              type="secondary"
            />
          )}

          <Button
            label="Fullpage ->"
            url={selectedProject.url}
            type="primary"
          />
        </div>
      </div>

      {/* Project Description */}
      {selectedProject.description && (
        <div
          className={clsx(
            "absolute inset-0 z-10 flex items-center justify-center bg-stone-900/90 p-6",
            !isDescriptionOpen && "hidden",
          )}
        >
          <div className="relative w-96 rounded-3xl bg-stone-100 px-8 py-6">
            <p
              className="[&_a]:underline"
              dangerouslySetInnerHTML={{ __html: selectedProject.description }}
            ></p>

            <Button
              label="Close Project Description"
              icon={<Boxicons name="x" className="h-4 w-4" />}
              onClick={() => setIsDescriptionOpen(false)}
              className="absolute right-4 top-4"
            />
          </div>
        </div>
      )}

      {/* Fake browser */}
      <div
        className={clsx(
          "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-xl border border-stone-300 shadow-xl transition-all duration-1000",
          screenMode === "mobile" ? "max-w-96" : "max-w-full",
        )}
      >
        <div
          className="flex gap-1.5 border-b border-stone-300 p-2"
          aria-hidden="true"
        >
          {Array(3)
            .fill()
            .map((v, i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-stone-400"
              ></div>
            ))}
        </div>

        <iframe src={selectedProject.url} className="flex-1"></iframe>
      </div>
    </div>
  );
};

export default ProjectPreview;
