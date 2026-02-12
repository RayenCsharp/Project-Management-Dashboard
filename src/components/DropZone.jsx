const DropZone = ({ status, hoveredStatus, setHoveredStatus, onDropProject }) => {
    return (
        <div
            onDragOver={(e) => {
                e.preventDefault();
                setHoveredStatus(status);
            }}
            onDragLeave={() => setHoveredStatus(null)}
            onDrop={(e) => {
                e.preventDefault();
                const projectId = e.dataTransfer.getData("projectId");
                onDropProject(projectId, status);
                setHoveredStatus(null);
            }}
            className={`w-full h-full rounded-xl flex items-center justify-center text-white font-bold transition-all duration-200 backdrop-blur-sm border-2
            ${status === "In Progress" ? "bg-blue-500/60 hover:bg-blue-600/80 border-blue-300/50" : status === "Planned" ? "bg-yellow-500/60 hover:bg-yellow-600/80 border-yellow-300/50" : "bg-green-500/60 hover:bg-green-600/80 border-green-300/50"}
            ${hoveredStatus === status ? "scale-101 shadow-lg" : "scale-100"}`}
        >
            {status}
        </div>
    );
};

export default DropZone;
