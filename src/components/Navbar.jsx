import { useEffect, useState } from "react";

function Navbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 border-b border-slate-800 px-4 lg:px-8 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">

      <div>
        <h1 className="text-white text-2xl lg:text-3xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Real-Time Business Intelligence
        </p>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative">
  <span className="text-yellow-400 text-2xl">
    🔔
  </span>

  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
    3
  </span>
</div>

        <div className="text-right">
          <p className="text-cyan-400 font-semibold">
            {time.toLocaleDateString()}
          </p>

          <p className="text-white text-lg font-bold">
            {time.toLocaleTimeString()}
          </p>
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

    </div>
  );
}

export default Navbar;