import { create } from "zustand";
import author from "../data/author";

export default create((set) => ({
  selectedRole: Object.keys(author.roles)[0],
  setSelectedRole: (role) => set({ selectedRole: role }),
}));
