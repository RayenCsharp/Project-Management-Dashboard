import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Projects from './pages/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import AddProjectModal from './components/AddProjectModal.jsx';

function App() {
  const [projects, setProjects] = useState([

    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const addProject = (newProject) => {
            setProjects((prev) => [...prev, { 
                id: Date.now(),
                name: newProject.projectName,
                description: newProject.projectDescription,
                status: newProject.projectStatus
              }]
            );
    }
  return (
    <>
      <BrowserRouter>
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
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
