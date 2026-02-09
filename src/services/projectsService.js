import { api } from "./api";

// GET all projects
export const getProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};

// CREATE project
export const createProject = async (project) => {
  const response = await api.post("/projects", project);
  return response.data;
};

// UPDATE project
export const updateProject = async (id, updatedData) => {
  const response = await api.put(`/projects/${id}`, updatedData);
  return response.data;
};

// DELETE project
export const deleteProjectApi = async (id) => {
  await api.delete(`/projects/${id}`);
};
