import { NavLink } from "react-router-dom";

const Navbar = ({ onAddProject }) => {
    return (
        <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 bg-white shadow-sm">   
            <h1 className="text-xl font-bold text-blue-500 sm:text-2xl cursor-default">ProjectManager</h1>
            <div className="flex gap-4 sm:gap-6 text-sm sm:text-base">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>Dashboard</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>Projects</NavLink>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base py-2 px-3 sm:px-4 rounded" onClick={onAddProject}>Add Project</button>
        </nav>
    );
};

export default Navbar;