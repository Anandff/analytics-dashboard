import KpiCards from "./KpiCards";
import SalesChart from "./SalesChart";
import DataTable from "./DataTable";
import PieChartComponent from "./PieChartComponent";
import Footer from "./Footer";

function Dashboard() {
  return (
    <div className="p-8 w-full">
      <div className="mb-8">
  <p className="text-slate-400">
    Dashboard Overview
  </p>

  <h2 className="text-5xl font-bold text-white mt-2">
    Welcome Back 👋
  </h2>

  <p className="text-slate-400 mt-3">
    Here's what's happening with your business today.
  </p>
</div>

      <KpiCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <SalesChart />
        <PieChartComponent />
      </div>

      <DataTable />
      <Footer />
    </div>
  );
}

export default Dashboard;