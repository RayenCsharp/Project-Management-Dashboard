import './App.css'
import { useState } from 'react'
import AddProjectModal from './components/AddProjectModal.jsx'
import Navbar from './components/Navbar.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import fakeProject from './data/projects.js'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {/* <Navbar onAddProject={() => setIsModalOpen(true)} />
      {isModalOpen && <AddProjectModal onClose={() => setIsModalOpen(false)} /> } */}
      <ProjectCard project={fakeProject}/>
    </>
  )
}

export default App
