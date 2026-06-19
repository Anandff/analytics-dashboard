import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { departmentData } from "../data/departmentData";

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
];

function PieChartComponent() {
  return (
    <div className="bg-white p-5 rounded-lg shadow mt-6">
      <h2 className="text-xl font-bold mb-4">
        Department Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>

          <Pie
            data={departmentData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {departmentData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;