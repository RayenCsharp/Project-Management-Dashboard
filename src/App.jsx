import './App.css'
import { useState } from 'react'
import Dashboard from './pages/Dashboard.jsx';

function App() {
  const [projects, setProjects] = useState([
    {
        id: 1,
        name: "Website Redesign",
        description: "Redesign the corporate website to improve UX.",
        status: "In Progress",
    },
    {
        id: 2,
        name: "Mobile App Development",
        description: "Develop a mobile app for e-commerce.",
        status: "Planned",
    },
    {
        id: 3,
        name: "Marketing Campaign",
        description: "Launch a summer marketing campaign.",
        status: "Completed",
    },
    ]);
  return (
    <>
      <Dashboard projects={projects} setProjects={setProjects} />
    </>
  )
}

export default App
