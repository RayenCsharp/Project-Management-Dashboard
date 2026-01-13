const AddProjectModal = () => {
  return (
    <div className="fixed bg-black/50 inset-0 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
            <form>
                <div className="space-y-4">
                    <input className="w-full border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="Project name" />
                    <textarea className="w-full border rounded-lg p-2 h-24 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Project description"></textarea>
                    <select className="w-full border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
                        <option>Planned</option>
                        <option>In Progress</option>
                        <option selected>Completed</option>
                    </select>
                </div>
                <div className="flex justify-end items-center gap-3 mt-4">
                    <button className="px-4 py-2 border rounded-lg" type="button">Cancel</button>
                    <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white" type="submit">Add Project</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddProjectModal;
