const TaskItem = ({ task, toggleTask, deleteTask }) => {
    return (
        <div className="flex items-center gap-3 p-3 border rounded-lg bg-white hover:bg-gray-50 transition cursor-pointer" onClick={toggleTask}>
            <input type="checkbox" checked={task.completed} readOnly className="cursor-pointer"/>
            <span className={`flex-1 ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}>{task.title}</span>
            <button onClick={(e) => { e.stopPropagation(); deleteTask(); }} className="p-1.5 rounded hover:bg-red-100 text-gray-400 hover:text-red-500 transition">✕</button>
        </div>
    )
}

export default TaskItem;