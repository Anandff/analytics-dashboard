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
    <div className="bg-white p-5 rounded-lg shadow mt-6">

      <h2 className="text-xl font-bold mb-4">
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

      <table className="w-full">

        <thead>
          <tr className="bg-slate-100">
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
  className="border-b hover:bg-gray-100"
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
  );
}

export default DataTable;