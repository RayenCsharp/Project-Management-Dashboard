import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TaskItem from "../components/TaskItem";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";
const ProjectDetails = ({ projects, addTask, toggleTask }) => {
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const handleAddTask = () => {
        if (!newTaskTitle.trim()) {
            setNewTaskTitle("");
            return;
        };

        addTask(project.id, newTaskTitle);
        setNewTaskTitle("");
    };

    const navigate = useNavigate();
    const { id } = useParams();
    const project = projects.find(p => p.id === Number(id));
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
            <div className="flex items-center gap-4 mb-6">
                <button
                className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
                onClick={() => navigate(-1)}
            >← Back</button>
            <h2 className="text-2xl font-bold px-6">Project Details</h2>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <h1 className="text-3xl font-bold text-gray-800">{project.name}</h1>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold 
                        ${project.status === "Completed" ? "bg-green-500 text-white px-2 py-1 rounded-full text-xs" : 
                          project.status === "In Progress" ? "bg-blue-500 text-white px-2 py-1 rounded-full text-xs" : "bg-yellow-500 text-white px-2 py-1 rounded-full text-xs"}`}>
                        {project.status}
                    </span>
                </div>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-500">
                    Created on: <span className="font-medium">{project.createdAt.toLocaleDateString()}</span>
                </p>
            </div>
            <h3 className="text-xl font-bold mt-6 mb-2">Progress</h3>
            <div className="mt-2 justify-items-center">
                <ProgressBar value={tasksProgress(project.tasks)} />
            </div>
            <div className="mt-8">
                <div className="flex justify-between items-center p-3 mb-4">
                    <h3 className="text-xl font-bold mb-4">Tasks</h3>
                    <input type="text" placeholder="New Task?" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} className="border rounded-md bg-gray-100 p-2 focus:ring-blue-600 focus:ring-2 focus:outline-none"/>
                    <button className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition cursor-pointer" onClick={handleAddTask}>Add Task</button>
                </div>
                {project.tasks.length === 0 ? (
                    <p className="text-gray-600">No tasks available for this project.</p>
                ) : (
                    <div className="space-y-2">
                        {project.tasks.map(task => (
                            <TaskItem key={task.id} task={task} toggleTask = {() => toggleTask(project.id, task.id)}/>
                        ))}
                    </div>
                )}
            </div>
        </div>       
    )
}
export default ProjectDetails;