import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;