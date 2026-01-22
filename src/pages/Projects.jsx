import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import AddProjectModal from '../components/AddProjectModal.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

const Projects = ({ projects, setProjects }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("");

        const addProject = (newProject) => {
            setProjects((prev) => [...prev, { 
                id: Date.now(),
                name: newProject.projectName,
                description: newProject.projectDescription,
                status: newProject.projectStatus
            }]);
        }
        const filteredProjects = selectedStatus ? projects.filter(p => p.status === selectedStatus) : projects;
    return (
        <div className="min-h-screen bg-gray-100">
            {isModalOpen && <AddProjectModal onClose={() => setIsModalOpen(false)} onAddProject={addProject} />}
            <main className="p-6">
                <div className="mb-6 ">
                    <h1 className="text-2xl font-bold mb-2">All Projects</h1>
                    <p className="text-gray-600">Manage and track all your projects</p>
                    <select name="statusFilter" className={`mt-4 py-2 px-4 rounded-lg cursor-pointer transition-colors
                    ${selectedStatus ? "bg-blue-600 text-white font-semibold" : "bg-blue-500 text-white"} disabled:bg-red-500 disabled:cursor-not-allowed `} disabled={projects.length === 0} value = {selectedStatus} onChange={
                        (e) => setSelectedStatus(e.target.value)
                    }>
                        <option value="">All Statuses</option>
                        <option value="Planned">Planned</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
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
                    filteredProjects.length === 0 ? (
                        <p className="text-gray-600 mt-6">No projects match this filter.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    )
                )}
            </main>
        </div>
    )
}
export default Projects