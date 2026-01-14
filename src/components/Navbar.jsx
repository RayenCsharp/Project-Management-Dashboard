const Navbar = ({ onAddProject }) => {
    return (
        <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-sm cursor-default">   
            <h1 className="text-2xl font-bold text-blue-500">ProjectManager</h1>
            <div className="flex justify-between items-center gap-6">
                <a className="hover:text-blue-600" href="#">Dashboard</a>
                <a className="hover:text-blue-600" href="#">Projects</a>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={onAddProject}>Add Project</button>
        </nav>
    );
};

export default Navbar;