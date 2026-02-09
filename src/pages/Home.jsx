import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-4">
            Welcome to Project Manager
        </h1>

        <p className="text-gray-600 text-center max-w-lg mb-6">
            Organize your projects, track progress, and manage tasks efficiently.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer " onClick={() => navigate(`/dashboard`)}>Lets Start</button>
        </div>
    );
}

export default Home;
