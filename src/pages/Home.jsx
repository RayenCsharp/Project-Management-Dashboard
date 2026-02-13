import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    let features = [
        {
            icon: "📁",
            title: "Project Organization",
            description: "Organize your projects with intuitive boards and cards."
        },
        {
            icon: "✅",
            title: "Task Management",
            description: "Create, assign, and track tasks with ease."
        },
        {
            icon: "📊",
            title: "Progress Tracking",
            description: "Visualize your project progress."
        },
        {
            icon: "🌟",
            title: "Stay Productive",
            description: "Boost your productivity and achieve your goals."
        }
    ]
    return (
        <div>
            <div className="p-6 min-h-screen flex flex-col items-center justify-center bg-white">
                <div className="text-center max-w-3xl">
                    <h1 className="text-5xl font-bold mb-2 text-gray-800">
                        Manage Your Projects
                    </h1>
                    <h1 className="text-5xl font-bold mb-6 text-blue-600">With Ease</h1>
                    <h3 className="text-lg text-gray-500 mt-4">Take Control of your projects. Track progress, organize tasks, and achieve your goals with our intuitive project management dashboard.</h3>
                </div>
                <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-800 hover:shadow-2xl transition duration-300 cursor-pointer font-semibold" onClick={() => navigate('/dashboard')}>Get Started Now</button>
                    <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 cursor-pointer font-semibold" onClick={() => navigate('/contact')}>Contact Us</button>
                </div>
                <p className="mt-12 text-gray-500">✨ Join thousands of teams using our project management platform</p>
            </div>
            <div className="bg-gray-50 py-16 px-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Features</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {features.map(feature => (
                        <div key={feature.title} className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="text-5xl">{feature.icon}</div>
                            <h2 className="text-lg font-bold text-gray-900">{feature.title}</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-16 text-center bg-blue-500 text-white rounded-lg p-8 w-full h-auto">
                    <h1 className="text-center text-white font-bold text-3xl">Ready to get started?</h1>
                    <p className="mt-2 text-gray-100 font-semibold">Join thousands of teams using our project management platform</p>
                    <div className="flex justify-center mt-6">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer font-semibold" onClick={() => navigate('/dashboard')}>Get Started Now</button>
                    </div>
                </div>
        </div>
        
    );
}

export default Home;
