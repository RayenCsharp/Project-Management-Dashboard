const StatCard = ({ title, stat }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-48 flex flex-col items-start">
            <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
            <h1 className="text-3xl font-bold mt-1">{stat}</h1>
        </div>
    )
}

export default StatCard;