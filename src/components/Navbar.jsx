const Navbar = () => {
    return (
        <nav>   
            <h1 className="text-2xl font-bold">Project Management Dashboard</h1>
            <button onClick={() => {console.log("Add Project clicked")}}>Add Project</button>
        </nav>
    );
};

export default Navbar;