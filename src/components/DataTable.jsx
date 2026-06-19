import { useState } from "react";
import { employees } from "../data/employees";

function DataTable() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sortOrder, setSortOrder] = useState("desc");

  let filteredData = employees.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  filteredData.sort((a, b) =>
    sortOrder === "asc"
      ? a.revenue - b.revenue
      : b.revenue - a.revenue
  );

  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg mt-6">

      <h2 className="text-2xl font-bold mb-6 text-white">
        Employee Revenue
      </h2>

      <div className="flex gap-4 mb-4">

        <input
          type="text"
          placeholder="Search Employee"
          className="border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={department}
          onChange={(e) =>
            setDepartment(e.target.value)
          }
        >
          <option>All</option>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Finance</option>
        </select>

        <select
          className="border p-2 rounded"
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value)
          }
        >
          <option value="desc">
            Highest Revenue
          </option>

          <option value="asc">
            Lowest Revenue
          </option>
        </select>

      </div>
  <div className="overflow-x-auto">
  <table className="w-full min-w-[700px]">

        <thead>
          <tr className="bg-slate-700">
            <th className="text-left p-2">
              Name
            </th>

            <th className="text-left p-2">
              Department
            </th>

            <th className="text-left p-2">
              Revenue
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((employee) => (
            <tr
 key={employee.id}
 className="border-b border-slate-700 hover:bg-slate-700"
>
              <td className="p-2">
                {employee.name}
              </td>

              <td className="p-2">
                {employee.department}
              </td>

              <td className="p-2">
                ₹{employee.revenue}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      </div>
    </div>
  );
}

export default DataTable;