import { useState } from "react";

const AddProjectModal = ({ onClose }) => {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectStatus, setProjectStatus] = useState("Planned");

  return (
    <div className="fixed bg-black/50 inset-0 flex items-center justify-center" onClick={onClose}>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md" onClick={(e) => {e.stopPropagation()}}>
            <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
            <form>
                <div className="space-y-4">
                    <input className="w-full border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="Project name" value={projectName} onChange={(e) => setProjectName(e.target.value)} required/>
                    <textarea className="w-full border rounded-lg p-2 h-24 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Project description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} required></textarea>
                    <select className="w-full border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-500" value={projectStatus} onChange={(e) => setProjectStatus(e.target.value)}>
                        <option value="Planned">Planned</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="flex justify-end items-center gap-3 mt-4">
                    <button className="px-4 py-2 border rounded-lg cursor-pointer" type="button" onClick={onClose}>Cancel</button>
                    <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white cursor-pointer" type="submit">Add Project</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddProjectModal;
