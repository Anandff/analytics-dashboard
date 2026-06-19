function Sidebar() {
  return (
    <div className="w-full md:w-64 min-h-screen bg-slate-900 text-white p-5">

      <h2 className="text-3xl font-bold mb-10">
        📊 Dashboard
      </h2>

      <ul className="space-y-6">

        <li className="hover:text-cyan-400 cursor-pointer transition">
          📈 Analytics
        </li>

        <li className="hover:text-cyan-400 cursor-pointer transition">
          📋 Reports
        </li>

        <li className="hover:text-cyan-400 cursor-pointer transition">
          👥 Users
        </li>

        <li className="hover:text-cyan-400 cursor-pointer transition">
          ⚙ Settings
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;