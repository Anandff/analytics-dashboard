function StatCard({ title, value, color }) {
  return (
    <div className="bg-gradient-to-r from-white to-slate-50 p-5 rounded-xl shadow hover:shadow-xl transition duration-300">

      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </p>

    </div>
  );
}

export default StatCard;