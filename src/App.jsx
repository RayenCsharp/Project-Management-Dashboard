import './App.css'
import { useState } from 'react'
import AddProjectModal from './components/AddProjectModal.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Navbar onAddProject={() => setIsModalOpen(true)} />
       {isModalOpen && <AddProjectModal onClose={() => setIsModalOpen(false)} /> }
    </>
  )
}

export default App
