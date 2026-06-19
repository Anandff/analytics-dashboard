function StatCard({
  title,
  value,
  color,
  change,
  trend,
  changeAmount,
}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2
        className={`text-4xl font-bold mt-3 ${color} transition-all duration-500 animate-pulse`}
      >
        {value}
      </h2>

      <div className="mt-2">
        <span
          className={`text-sm font-medium ${
            trend === "up"
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {trend === "up" ? "↑" : "↓"} {changeAmount}
        </span>
      </div>

      <p className="text-green-400 text-sm mt-2">
        {change} this month
      </p>

      <div className="mt-3">
        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
          ● Live
        </span>
      </div>

    </div>
  );
}

export default StatCard;