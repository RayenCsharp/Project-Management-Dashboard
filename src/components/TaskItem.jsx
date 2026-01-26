const TaskItem = ({ task, toggleTask, deleteTask }) => {
    return (
        <div className="flex items-center space-x-2 p-2 shadow-md border rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100" onClick={toggleTask}>
            <input type="checkbox" checked={task.completed} readOnly/>
            <span className={task.completed ? "ml-2 text-green-500" : "ml-2 text-red-500"}>{task.title}</span>
            <button onClick={(e) => { e.stopPropagation(); deleteTask(); }} className="ml-auto bg-gray-300 p-1.5 rounded-lg text-blue-500 hover:text-red-500 cursor-pointer">X</button>
        </div>
    )
}

export default TaskItem;