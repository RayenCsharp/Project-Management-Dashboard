import { createContext, useState, useEffect } from "react"
import { getProjects, createProject, deleteProjectApi, updateProject } from "../services/projectsService"

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects()
                setProjects(data)
            } catch (err) {
                setError("Failed to fetch projects")
            } finally {
                setLoading(false)
            }
            }

            fetchProjects()
    }, [])

    const getProjectStatusFromTasks = (tasks) => {
        if (tasks.length === 0) return "Planned"
        const completedTasks = tasks.filter(task => task.completed).length
        if (completedTasks === tasks.length) return "Completed"
        return "In Progress"
    }

    const addProject = async (newProject) => {
        const projectToSave = {
        name: newProject.projectName,
        description: newProject.projectDescription,
        status: newProject.projectStatus,
        createdAt: new Date().toISOString().split("T")[0],
        tasks: []
        }

        const savedProject = await createProject(projectToSave)
        setProjects(prev => [...prev, savedProject])
    }

    const deleteProject = async (projectId) => {
        await deleteProjectApi(projectId)
        setProjects(prev => prev.filter(project => project.id !== projectId))
    }

    const addTask = async (projectId, newTaskTitle) => {
        const project = projects.find(p => p.id === projectId);
        const newTask = {
            id: Date.now(),
            title: newTaskTitle,
            completed: false
        };
        const updatedTasks = [...project.tasks, newTask];
        const updatedProject = {
            ...project,
            tasks: updatedTasks,
            status: getProjectStatusFromTasks(updatedTasks)
        };
        const savedProject = await updateProject(projectId, updatedProject);
        setProjects(prev =>
            prev.map(p => p.id === projectId ? savedProject : p)
        );
    };
    const editProject = async (projectId, updatedData) => {
        const project = projects.find(p => p.id === projectId);
        const updatedProject = {
            ...project,
            ...updatedData
        }
        const savedProject = await updateProject(projectId, updatedProject);
        setProjects(prev => prev.map(p => p.id === projectId ? savedProject : p));
    };

    const toggleTask = async (projectId, taskId) => {
        const project = projects.find(p => p.id === projectId)
        const updatedTasks = project.tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task)
        const updatedProject = {
            ...project,
            tasks: updatedTasks,
            status: getProjectStatusFromTasks(updatedTasks)
        };
        const savedProject = await updateProject(projectId, updatedProject)
        setProjects(prev => prev.map(p => p.id === projectId ? savedProject : p))
    };

    const deleteTask = async (projectId, taskId) => {
        const project = projects.find(p => p.id === projectId)
        const updatedTasks = project.tasks.filter(task => task.id !== taskId)
        const updatedProject = {
            ...project,
            tasks: updatedTasks,
            status: getProjectStatusFromTasks(updatedTasks)
        };
        const savedProject = await updateProject(projectId, updatedProject)
        setProjects(prev => prev.map(p => p.id === projectId ? savedProject : p))
    };

    const updateStatus = async (projectId, newStatus) => {
        const id = String(projectId); // Ensure ID is a string for comparison
        const existingProject = projects.find(p => p.id === id);
        if (!existingProject) {
            console.error("Project not found for ID:", id);
            return;
        }

        const updatedProject = {
            ...existingProject,
            status: newStatus
        };

        const savedProject = await updateProject(id, updatedProject);
        
        setProjects(prev => {
            return prev.map(p => p.id === id ? savedProject : p);
        });
    }

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        loading,
        error,
        addProject,
        deleteProject,
        addTask,
        editProject,
        toggleTask,
        deleteTask,
        updateStatus
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
