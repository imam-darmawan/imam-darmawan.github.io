import { create } from "zustand";

export default create((set) => ({
  filterKeyword: "all",
  setFilterKeyword: (keyword) => set(() => ({ filterKeyword: keyword })),

  selectedProject: undefined,
  setSelectedProject: (project) => set(() => ({ selectedProject: project })),
}));
