import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Projects from './pages/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import AddProjectModal from './components/AddProjectModal.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      description: "Redesign the corporate website to improve user experience and update branding.",
      status: "In Progress",
      createdAt: new Date("2026-01-20"),
      tasks: [
        { id: 1, title: "Wireframes", completed: true },
        { id: 2, title: "Mockups", completed: false }
      ]
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Develop a mobile application for our e-commerce platform to reach more customers.",
      status: "Planned",
      createdAt: new Date("2026-01-25"),
      tasks: [
        { id: 1, title: "Requirement Gathering", completed: false },
        { id: 2, title: "Prototype Design", completed: false }
      ]
    },
    {
      id: 3,
      name: "Marketing Campaign",
      description: "Launch a new marketing campaign for the summer season to boost sales.",
      status: "Completed",
      createdAt: new Date("2026-01-15"),
      tasks: [
        { id: 1, title: "Content Creation", completed: true },
        { id: 2, title: "Social Media Ads", completed: true }
      ]
    }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const addProject = (newProject) => {
            setProjects((prev) => [...prev, { 
                id: Date.now(),
                name: newProject.projectName,
                description: newProject.projectDescription,
                status: newProject.projectStatus,
                createdAt: new Date(),
                tasks: []
              }]
            );
    }
  return (
    <>
      <BrowserRouter>
          <div className="min-h-screen bg-gray-100">
            <Navbar onAddProject={() => setIsModalOpen(true)}/>
            {isModalOpen && <AddProjectModal onClose={() => setIsModalOpen(false)} onAddProject={addProject} />}
            <Routes>
              <Route 
                path="/" 
                element={<Dashboard projects={projects} setProjects={setProjects}/>} 
              />
              <Route 
                path="/projects" 
                element={
                  <Projects 
                    projects={projects} 
                    setProjects={setProjects} 
                  />
                } 
              />
              <Route path="/projects/:id" element={<ProjectDetails projects={projects} />} />
            </Routes>
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
