const TaskItem = ({ task, toggleTask }) => {
    return (
        <div className="flex items-center space-x-2 p-2 shadow-md border rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100" onClick={toggleTask}>
            <input type="checkbox" checked={task.completed} readOnly/>
            <span className={task.completed ? "ml-2 text-green-500" : "ml-2 text-red-500"}>{task.title}</span>
        </div>
    )
}

export default TaskItem;