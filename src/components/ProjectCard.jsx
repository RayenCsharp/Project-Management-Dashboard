const ProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-100 shadow-md rounded-lg p-6 w-full max-w-sm flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-800">{project.name}</h2>
                {project.status === "Completed" ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Completed</span>
                ) : project.status === "In Progress" ? (
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">In Progress</span>
                ) : (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">Not Started</span>
                )}
            </div>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer self-end">View Details</button>
        </div>
    )
}
export default ProjectCard