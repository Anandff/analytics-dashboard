import { useEffect, useState } from "react";

function Notifications() {
  const alerts = [
    "Revenue spike in Delhi",
    "Orders increased in London",
    "New customer cluster in Tokyo",
    "Sales growth in New York",
    "High demand detected in Dubai",
  ];

  const [notification, setNotification] = useState(
    alerts[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setNotification(
        alerts[
          Math.floor(Math.random() * alerts.length)
        ]
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
      <h3 className="text-yellow-400 font-semibold mb-2">
        🔔 Live Alerts
      </h3>

      <p className="text-slate-300 text-sm">
        {notification}
      </p>
    </div>
  );
}

export default Notifications;