function Navbar() {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        Analytics Dashboard
      </h1>

      <div className="flex items-center gap-3">

        <div className="text-right">
          <p className="font-semibold">
            Admin
          </p>

          <p className="text-sm text-gray-500">
            Dashboard Manager
          </p>
        </div>

      </div>

    </div>
  );
}

export default Navbar;