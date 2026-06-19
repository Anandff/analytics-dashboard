import KpiCards from "./KpiCards";
import SalesChart from "./SalesChart";
import DataTable from "./DataTable";
import PieChartComponent from "./PieChartComponent";
import Footer from "./Footer";

function Dashboard() {
  return (
    <div className="p-6">
      <div className="mb-6">

  <h2 className="text-4xl font-bold">
    Welcome Back 👋
  </h2>

  <p className="text-gray-600 mt-2">
    Monitor your business performance in real time.
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