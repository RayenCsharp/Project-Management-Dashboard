const ProgressBar = ({ value }) => {
    const getColor = (value) => {
        if (value === 100) return "bg-green-500";
        if (value >= 50) return "bg-blue-500";
        return "bg-yellow-500";
    };
  return (
    <div className="w-full z-10">
      <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div className={`h-full transition-all duration-300 ${getColor(value)}`} style={{ width: `${value}%` }}/>
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-blac">{value}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
