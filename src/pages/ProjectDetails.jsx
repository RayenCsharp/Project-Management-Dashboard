import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TaskItem from "../components/TaskItem";
import ProgressBar from "../components/ProgressBar";
import EditProjectModal from "../components/EditProjectModal";
import { useState } from "react";
const ProjectDetails = ({ projects, addTask, toggleTask, deleteTask, editProject }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const navigate = useNavigate();
    const { id } = useParams();
    const project = projects.find(p => p.id === Number(id));
    
    const handleAddTask = () => {
        if (!newTaskTitle.trim()) {
            setNewTaskTitle("");
            return;
        };

        addTask(project.id, newTaskTitle);
        setNewTaskTitle("");
    };
    if (!project) {
        return (
            <div className="p-6 flex justify-center items-center h-screen">
                <p className="text-gray-600 text-lg">Project not found.</p>
            </div>
        )
    }
    const tasksProgress = (tasks) => {
        const totalTasks = tasks.length
        if (totalTasks === 0) return 0
        const completedTasks = tasks.filter(task => task.completed === true).length
        const progress = Math.round(completedTasks / totalTasks * 100);
        return progress
    }
    return (
         <div className="p-6 max-w-4xl mx-auto">
            {isModalOpen && <EditProjectModal project={project} onClose={() => setIsModalOpen(false)} onEditProject={editProject} />}
            <div className="grid grid-cols-2 mb-6 gap-4 items-center">
            <h2 className="text-2xl font-bold px-6">Project Details</h2>
            <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
                onClick={() => navigate(-1)}
            >← Back</button>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1 min-w-0">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 break-words">{project.name}</h1>
                        <p className="text-sm sm:text-base text-gray-600 mt-2 break-words">{project.description}</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-2">
                        Created on: <span className="font-medium">{project.createdAt}</span>
                        </p>
                    </div>
                    <div className="gap-3 flex flex-col items-start sm:items-end sm:gap-10 flex-shrink-0">
                        <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap
                            ${project.status === "Completed" ? "bg-green-500 text-white" : 
                              project.status === "In Progress" ? "bg-blue-500 text-white" : "bg-yellow-500 text-white"}`}>
                            {project.status}
                        </span>
                        <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-semibold">Edit</button>
                    </div>
                </div>
                
                
            </div>
            <h3 className="text-xl font-bold mt-6 mb-2">Progress</h3>
            <div className="mt-2 justify-items-center">
                <ProgressBar value={tasksProgress(project.tasks)} />
            </div>
            <div className="mt-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-4">
                    <h3 className="text-xl font-bold">Tasks</h3>
                    <input type="text" placeholder="New Task?" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} className="w-full sm:flex-1 border rounded-md bg-gray-100 p-2 focus:ring-blue-600 focus:ring-2 focus:outline-none"/>
                    <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition cursor-pointer" onClick={handleAddTask}>Add Task</button>
                </div>
                {project.tasks.length === 0 ? (
                    <p className="text-gray-600">No tasks available for this project.</p>
                ) : (
                    <div className="space-y-2">
                        {project.tasks.map(task => (
                            <TaskItem key={task.id} task={task} toggleTask={() => toggleTask(project.id, task.id)} deleteTask={() => deleteTask(project.id, task.id)}/>
                        ))}
                    </div>
                )}
            </div>
        </div>       
    )
}
export default ProjectDetails;