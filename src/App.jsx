import './App.css'
import { useState } from 'react'
import { Routes, Route, useLocation} from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Projects from './pages/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import AddProjectModal from './components/AddProjectModal.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import Home from './pages/Home';
import Contact from './pages/Contact';




function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/projects/") || location.pathname === "/";
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
      {!hideNavbar && <Navbar onAddProject={() => setIsModalOpen(true)}/>}
      {isModalOpen && <AddProjectModal onClose={() => setIsModalOpen(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
