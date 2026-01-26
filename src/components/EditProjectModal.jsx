import { useState } from "react";

const EditProjectModal = ({ project, onClose, onEditProject }) => {
    const [projectName, setProjectName] = useState(project.name);
    const [projectDescription, setProjectDescription] = useState(project.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!projectName || !projectDescription) return;
        onEditProject(
            project.id,
            {
                name: projectName,
                description: projectDescription,
            }
        )
        resetForm()
        onClose()
    }

    const resetForm = () => {
        setProjectName("");
        setProjectDescription("");
    }

  return (
    <div className="fixed bg-black/50 inset-0 flex items-center justify-center z-50" onClick={() => { onClose(); resetForm(); }}>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md" onClick={(e) => {e.stopPropagation()}}>
            <h2 className="text-xl font-semibold mb-4">Edit Project</h2>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <input className="w-full border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="Project name" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
                    <textarea className="w-full border rounded-lg p-2 h-24 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Project description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}></textarea>
                </div>
                <div className="flex justify-end items-center gap-3 mt-4">
                    <button className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-100" type="button" onClick={() => { onClose(); resetForm(); }}>Cancel</button>
                    <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white cursor-pointer disabled:bg-red-500 disabled:cursor-not-allowed" type="submit" disabled={!projectName || !projectDescription}>{(!projectName || !projectDescription) ? "Fill required fields" : "Edit Project"}</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default EditProjectModal;
