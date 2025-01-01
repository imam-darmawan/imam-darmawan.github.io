import Button from "./Button";
import Tabs from "./Tabs";
import Boxicons from "../assets/icons/Boxicons";
import useProjectsStore from "../context/projects-store";
import { create } from "zustand";
import { clsx } from "clsx";

const initialState = { screenMode: "desktop", isInfoOpen: true };

const useProjectPreviewStore = create((set) => ({
  ...initialState,
  setScreenMode: (screen) => set({ screenMode: screen }),
  setIsInfoOpen: (v) => set({ isInfoOpen: v }),
  reset: () => set(initialState),
}));

const Header = () => {
  const { selectedProject, setSelectedProject } = useProjectsStore();
  const { screenMode, setScreenMode, setIsInfoOpen, reset } =
    useProjectPreviewStore();

  return (
    <div className="flex h-[2.875rem] items-center px-6 max-sm:px-0">
      <div className="flex-1">
        <Button
          label="<- Back"
          onClick={() => {
            document.body.style.overflowY = "scroll";
            setSelectedProject(undefined);
            reset();
          }}
        />
      </div>

      <div className="w-32 max-md:hidden">
        <Tabs
          list={["desktop", "mobile"]}
          iconOnly
          activeTab={screenMode}
          onTabClick={setScreenMode}
        />
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        {(selectedProject.description || selectedProject.libs) && (
          <Button
            label="Info"
            icon={<Boxicons name="info" className="h-4 w-4" />}
            hasTooltip
            onClick={() => setIsInfoOpen(true)}
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
          label="Visit Project ->"
          url={selectedProject.url}
          type="primary"
        />
      </div>
    </div>
  );
};

const Information = () => {
  const { selectedProject } = useProjectsStore();
  const { isInfoOpen, setIsInfoOpen } = useProjectPreviewStore();

  const handleClickOutside = () => {
    setIsInfoOpen(false);
  };

  return (
    (selectedProject.description || selectedProject.libs) &&
    isInfoOpen && (
      <div
        className="absolute inset-0 z-10 flex items-center justify-center bg-stone-900/80 p-6"
        onClick={handleClickOutside}
      >
        <div
          className="relative w-96 rounded-3xl bg-stone-100 px-10 py-8"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-lg font-bold">{selectedProject.title}</h3>

          {selectedProject.description && (
            <p
              className="mt-3 text-sm font-normal text-stone-800 [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: selectedProject.description }}
            ></p>
          )}

          {selectedProject.libs && (
            <div className="mt-8">
              <h4 className="font-bold">Notable Technologies</h4>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {selectedProject.libs.map((lib) => (
                  <li
                    key={lib}
                    className="rounded-full border border-stone-300 px-3.5 py-[0.344rem] capitalize"
                  >
                    {lib}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button
            label="Close information"
            icon={<Boxicons name="x" className="h-4 w-4" />}
            className="absolute right-4 top-4"
            onClick={() => {
              setIsInfoOpen(false);
            }}
          />
        </div>
      </div>
    )
  );
};

const FakeBrowser = () => {
  const { selectedProject } = useProjectsStore();
  const { screenMode } = useProjectPreviewStore();

  return (
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
  );
};

const ProjectPreview = () => {
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-stone-100 p-3">
      <Header />
      <Information />
      <FakeBrowser />
    </div>
  );
};

export default ProjectPreview;
