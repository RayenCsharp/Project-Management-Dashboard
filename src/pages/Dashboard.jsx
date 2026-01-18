import AddProjectModal from '../components/AddProjectModal.jsx'
import Navbar from '../components/Navbar.jsx'
import StatCard from '../components/StatCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { useState } from 'react'

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    const addProject = (newProject) => {
        setProjects((prev) => [...prev, { 
            id: Date.now(),
            name: newProject.projectName,
            description: newProject.projectDescription,
            status: newProject.projectStatus
        }]);
    }

    return (
        <>
            <Navbar onAddProject={() => setIsModalOpen(true)} />
            {isModalOpen && <AddProjectModal onClose={() => setIsModalOpen(false)} onAddProject={addProject} />}
            <main className="p-6 bg-gray-100 min-h-screen">
                <div>
                    <h2 className="text-2xl font-bold mt-6 mb-4 px-6">Welcome to your Dashboard</h2>
                    <p className="text-gray-600 px-6">Here you can manage your projects and track their progress.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-6 justify-items-center'>
                    <StatCard title="Total Projects" stat={projects.length} />
                    <StatCard title="Ongoing Projects" stat={projects.filter(p => p.status === "In Progress").length} />
                    <StatCard title="Completed Projects" stat={projects.filter(p => p.status === "Completed").length} />
                </div>
                <div className="mt-8 px-6">
                    <h2 className="text-2xl font-bold mt-6 mb-4">Recent Projects</h2>
                    {projects.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center py-16 bg-white rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">
                            No projects yet
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Create your first project to start tracking progress.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Add your first project
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
                </div>
            </main>
        </>
    )
}
export default Dashboard;