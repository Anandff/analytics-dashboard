function Navbar() {
  return (
    <div className="bg-slate-900 border-b border-slate-800 px-8 py-5 flex justify-between">

      <div>
        <h1 className="text-white text-3xl font-bold">
          Analytics Dashboard
        </h1>
      </div>

      <div className="text-right">
        <p className="text-white">
          Admin
        </p>

        <p className="text-slate-400 text-sm">
          Dashboard Manager
        </p>
      </div>

    </div>
  );
}

export default Navbar;