import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";

const useProjects = () => {
  const context = useContext(ProjectsContext);

  if (!context) {
    throw new Error("useProjects must be used inside ProjectsProvider");
  }

  return context;
};

export default useProjects;
