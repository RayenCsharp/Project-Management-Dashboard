import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProjectDetails = ({ projects }) => {
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
    return (
         <div className="p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
                <button
                className="gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition"
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
        </div>
                            
    )
}
export default ProjectDetails;