import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const ProjectCard = ({ project, onDelete }) => {
    const tasksProgress = (tasks) => {
        const totalTasks = tasks.length
        if (totalTasks === 0) return 0
        const completedTasks = tasks.filter(task => task.completed === true).length
        const progress = Math.round(completedTasks / totalTasks * 100);
        return progress
    }
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100 shadow-md rounded-lg p-6 w-full max-w-sm flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-800">{project.name}</h2>
                {project.status === "Completed" ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Completed</span>
                ) : project.status === "In Progress" ? (
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">In Progress</span>
                ) : (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">Planned</span>
                )}
            </div>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-sm text-gray-500 mb-6">Created on: {project.createdAt}</p>
            <ProgressBar value={tasksProgress(project.tasks)}/>
            <div className="mt-4 flex items-center justify-between">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer" onClick={() => onDelete(project.id)}>Delete</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer " onClick={() => navigate(`/projects/${project.id}`)}>View Details</button>
            </div>
        </div>
    )
}
export default ProjectCard