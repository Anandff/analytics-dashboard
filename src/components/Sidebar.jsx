function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 min-h-screen p-6">

      <h1 className="text-white text-2xl font-bold mb-10">
        📊 Analytics
      </h1>

      <div className="space-y-6 text-slate-300">

        <div className="hover:text-white cursor-pointer">
          📈 Dashboard
        </div>

        <div className="hover:text-white cursor-pointer">
          👥 Users
        </div>

        <div className="hover:text-white cursor-pointer">
          📋 Reports
        </div>

        <div className="hover:text-white cursor-pointer">
          ⚙ Settings
        </div>

      </div>
    </div>
  );
}

export default Sidebar;