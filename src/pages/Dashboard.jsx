import { useNavigate } from 'react-router-dom'
import AddProjectModal from '../components/AddProjectModal.jsx'
import StatCard from '../components/StatCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { useState } from 'react'

const Dashboard = ({ projects, addProject, onDelete}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            {isModalOpen && <AddProjectModal onClose={() => setIsModalOpen(false)} onAddProject={addProject} />}
            <main className="p-6">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {projects.slice(-3).reverse().map((project) => (
                            <ProjectCard key={project.id} project={project} onDelete={onDelete}/>
                        ))}
                        {
                            projects.length > 3 && (
                            <div className="col-span-full text-center mt-4">
                                <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 cursor-pointer" onClick={() => navigate('/projects')}>
                                    View All Projects
                                </button>
                            </div>
                        )}
                    </div>
                )}
                </div>
            </main>
        </div>
    )
}
export default Dashboard;