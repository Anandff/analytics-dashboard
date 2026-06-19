import { useState, useEffect } from "react";
import StatCard from "./StatCard";
import { stats } from "../data/dashboardData";

function KpiCards() {
  const [liveStats, setLiveStats] = useState(
  stats.map((item) => ({
    ...item,
    trend: "up",
    changeAmount: "+0",
  }))
);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats((prev) =>
        prev.map((item) => {
          const value = item.value;

          // USERS
          if (item.title === "Users") {
  const currentUsers = parseInt(
    value.replace(/,/g, "")
  );

  const isIncrease = Date.now() % 7000 < 3000;

  const amount = isIncrease
    ? Math.floor(Math.random() * 10) + 1
    : -(Math.floor(Math.random() * 5) + 1);

  const users = currentUsers + amount;

  return {
    ...item,
    value: users.toLocaleString(),
    trend: amount > 0 ? "up" : "down",
    changeAmount:
      amount > 0 ? `+${amount}` : `${amount}`,
  };
}

          // REVENUE
          if (item.title === "Revenue") {
  const currentRevenue = parseInt(
    value.replace(/[₹,]/g, "")
  );

  const isIncrease = Date.now() % 7000 < 3000;

  const amount = isIncrease
    ? Math.floor(Math.random() * 500) + 50
    : -(Math.floor(Math.random() * 250) + 50);

  const revenue = currentRevenue + amount;

  return {
  ...item,
  value: `₹${revenue.toLocaleString()}`,
  change:
    Math.random() < 0.8
      ? `+${(Math.random() * 20).toFixed(1)}%`
      : `-${(Math.random() * 10).toFixed(1)}%`,
};
}

          // ORDERS
          if (item.title === "Orders") {
  const currentOrders = parseInt(
    value.replace(/,/g, "")
  );

  const isIncrease = Date.now() % 7000 < 3000;

  const amount = isIncrease
    ? Math.floor(Math.random() * 5) + 1
    : -(Math.floor(Math.random() * 3) + 1);

  const orders = currentOrders + amount;

  return {
  ...item,
  value: orders.toLocaleString(),
  change:
    Math.random() < 0.8
      ? `+${(Math.random() * 20).toFixed(1)}%`
      : `-${(Math.random() * 10).toFixed(1)}%`,
};
}

          // GROWTH
          if (item.title === "Growth") {
            const currentGrowth = parseFloat(
              value.replace("%", "").replace("+", "")
            );

            const change =
              Math.random() < 0.85
                ? Math.random() * 0.5
                : -(Math.random() * 0.3);

            const growth = Math.max(
              5,
              currentGrowth + change
            );

            return {
  ...item,
  value: `+${growth.toFixed(1)}%`,
  change:
    Math.random() < 0.8
      ? `+${(Math.random() * 20).toFixed(1)}%`
      : `-${(Math.random() * 10).toFixed(1)}%`,
};
          }

          return item;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {liveStats.map((item, index) => (
        <StatCard
  key={index}
  title={item.title}
  value={item.value}
  color={item.color}
  change={item.change}
  trend={item.trend}
  changeAmount={item.changeAmount}
  icon={item.icon}
/>
      ))}
    </div>
  );
}

export default KpiCards;