import './App.css'
import {  useState, useEffect } from 'react'
import { Routes, Route, useLocation} from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Projects from './pages/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import AddProjectModal from './components/AddProjectModal.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/projects/");
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));}, [projects]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addProject = (newProject) => {
    setProjects((prev) => [...prev, { 
        id: Date.now(),
        name: newProject.projectName,
        description: newProject.projectDescription,
        status: newProject.projectStatus,
        createdAt: new Date().toLocaleDateString("en-CA"),
        tasks: []
      }]
    );
  }
  const getProjectStatusFromTasks = (tasks) => {
    if (tasks.length === 0) return "Planned"
    const completedTasks = tasks.filter(task => task.completed).length
    if (completedTasks === tasks.length) return "Completed"
    return "In Progress"
  }
  const addTask = (projectId, newTaskTitle) => {
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false
    }
  setProjects((prev) => prev.map(project => {
    if (projectId !== project.id) return project
    const updatedTasks = [...project.tasks, newTask]
    return {
      ...project,
      tasks: updatedTasks,
      status: getProjectStatusFromTasks(updatedTasks)
    } 
  }))
  }
  const deleteProject = (projectId) => {
    setProjects(prev =>prev.filter(project => project.id !== projectId))
  }
  const editProject = (projectId, updatedData) => {
    setProjects(prev => prev.map(project => project.id === projectId 
      ? {
        ...project,
        ...updatedData,
        createdAt: project.createdAt
      }
      : project
    ))
  }
  const toggleTask = (projectId, taskId) => {
    setProjects((prev) => prev.map(project => 
      {
        if (project.id !== projectId) return project
        const updatedTasks = project.tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task)
        return {
          ...project,
          tasks: updatedTasks,
          status: getProjectStatusFromTasks(updatedTasks)
        }
      }
    ))
  }
  const deleteTask = (projectId, taskId) => {
    setProjects(prev => prev.map(project =>
      {
        if (project.id !== projectId) return project
        const updatedTasks = project.tasks.filter(task => task.id !== taskId)
        return {
          ...project,
          tasks: updatedTasks,
          status: getProjectStatusFromTasks(updatedTasks)
        }
      }))
  }
  return (
    <div className="min-h-screen bg-gray-100">
      {!hideNavbar && <Navbar onAddProject={() => setIsModalOpen(true)}/>}
      {isModalOpen && <AddProjectModal onClose={() => setIsModalOpen(false)} onAddProject={addProject} />}
      <Routes>
        <Route 
          path="/" 
          element={<Dashboard projects={projects} addProject={addProject} onDelete={deleteProject}/>} 
        />
        <Route 
          path="/projects" 
          element={
            <Projects 
              projects={projects} 
              addProject={addProject}
              onDelete={deleteProject}
            />
          } 
        />
        <Route path="/projects/:id" element={<ProjectDetails projects={projects} addTask={addTask} toggleTask={toggleTask} deleteTask={deleteTask} editProject={editProject}/>} />
      </Routes>
    </div>
  )
}

export default App
