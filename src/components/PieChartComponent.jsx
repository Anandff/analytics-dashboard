import Globe from "react-globe.gl";
import { useState, useEffect, useRef } from "react";

function PieChartComponent() {
  const [points, setPoints] = useState([]);
  const [arcs, setArcs] = useState([]);
  const [events, setEvents] = useState([]);
  const globeRef = useRef();
  const [lastUpdate, setLastUpdate] =
  useState(new Date());
  useEffect(() => {
  if (globeRef.current) {
    const controls = globeRef.current.controls();

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.9;

    controls.enableZoom = true;
    controls.enablePan = false;
  }
}, []);

  useEffect(() => {
    const locations = [
  { lat: 28.6139, lng: 77.2090 },   // Delhi
  { lat: 19.0760, lng: 72.8777 },   // Mumbai
  { lat: 13.0827, lng: 80.2707 },   // Chennai
  { lat: 22.5726, lng: 88.3639 },   // Kolkata
  { lat: 12.9716, lng: 77.5946 },   // Bangalore

  { lat: 40.7128, lng: -74.0060 },  // New York
  { lat: 34.0522, lng: -118.2437 }, // Los Angeles
  { lat: 41.8781, lng: -87.6298 },  // Chicago

  { lat: 51.5072, lng: -0.1276 },   // London
  { lat: 48.8566, lng: 2.3522 },    // Paris
  { lat: 52.5200, lng: 13.4050 },   // Berlin
  { lat: 41.9028, lng: 12.4964 },   // Rome

  { lat: 35.6762, lng: 139.6503 },  // Tokyo
  { lat: 37.5665, lng: 126.9780 },  // Seoul
  { lat: 31.2304, lng: 121.4737 },  // Shanghai
  { lat: 1.3521, lng: 103.8198 },   // Singapore

  { lat: -33.8688, lng: 151.2093 }, // Sydney
  { lat: -37.8136, lng: 144.9631 }, // Melbourne

  { lat: -23.5505, lng: -46.6333 }, // Sao Paulo
  { lat: -34.6037, lng: -58.3816 }, // Buenos Aires

  { lat: 25.2048, lng: 55.2708 },   // Dubai
  { lat: 24.7136, lng: 46.6753 },   // Riyadh

  { lat: -1.2921, lng: 36.8219 },   // Nairobi
  { lat: -26.2041, lng: 28.0473 },  // Johannesburg
];

    const generatePoints = () => {
      const randomPoints = [];
      const randomArcs = [];
      const randomEvents = [];

      for (let i = 0; i < 40; i++) {
        randomPoints.push(
          locations[
            Math.floor(Math.random() * locations.length)
          ]
        );
      }
      for (let i = 0; i < 25; i++) {
  const start =
    locations[
      Math.floor(Math.random() * locations.length)
    ];

  const end =
    locations[
      Math.floor(Math.random() * locations.length)
    ];

  randomArcs.push({
    startLat: start.lat,
    startLng: start.lng,
    endLat: end.lat,
    endLng: end.lng,
  });
}
const messages = [
  "Revenue spike detected",
  "Sales growth recorded",
  "New orders received",
  "Regional demand increased",
  "High activity detected",
];

for (let i = 0; i < 5; i++) {
  randomEvents.push(
    `${messages[Math.floor(Math.random() * messages.length)]}`
  );
}
setLastUpdate(new Date());

      setPoints(randomPoints);
setArcs(randomArcs);
setEvents(randomEvents);
    };

    generatePoints();

    const interval = setInterval(
      generatePoints,
      4000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-500">
      <h2 className="text-xl font-bold mb-4 text-white">
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
  <div className="bg-slate-900 p-2 rounded">
    🌍 Active Countries: 24
  </div>

  <div className="bg-slate-900 p-2 rounded">
    📈 Sales Today: ₹12.4M
  </div>

  <div className="bg-slate-900 p-2 rounded">
    🚚 Orders: 18,542
  </div>

  <div className="bg-slate-900 p-2 rounded">
    ⚡ Growth: +18%
  </div>
</div>
        Global Sales Activity 🌍
      </h2>
      <div className="flex justify-between text-sm mb-3">
  <span className="text-green-400">
    Active Regions: {points.length}
  </span>

  <span className="text-cyan-400">
    Live Routes: {arcs.length}
  </span>
</div>

      <div className="h-75 flex justify-center items-center overflow-hidden">
        <Globe
  ref={globeRef}
  width={window.innerWidth < 768 ? 280 : 500}
height={window.innerWidth < 768 ? 250 : 350}
        animateIn={false}
        onGlobeReady={(globe) => {
  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.9;

  globe.controls().enableZoom = true;
  globe.controls().enablePan = false;
}}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundColor="rgba(0,0,0,0)"
          pointsData={points}
pointLat="lat"
pointLng="lng"
pointColor={() => "#ff0000"}
pointAltitude={0.2}
pointRadius={1.8}
arcsData={arcs}
arcColor={() => "#00ffff"}
arcDashLength={0.5}
arcDashGap={2}
arcDashAnimateTime={1500}

ringsData={points}
ringColor={() => () => "rgba(255,0,0,0.8)"}
ringMaxRadius={5}
ringPropagationSpeed={2}
ringRepeatPeriod={1000}
atmosphereColor="#3b82f6"
atmosphereAltitude={0.25}
        />
        <div className="mt-4 bg-slate-900 rounded-lg p-3">
  <h3 className="text-cyan-400 text-sm mb-2">
    Live Activity Feed
  </h3>
  <p className="text-xs text-slate-500 mt-3">
  Last Updated:
  {" "}
  {lastUpdate.toLocaleTimeString()}
</p>

  {events.map((event, index) => (
    <p
      key={index}
      className="text-slate-300 text-xs mb-1"
    >
      [{new Date().toLocaleTimeString()}] {event}
    </p>
  ))}
</div>
      </div>

      <p className="text-sm text-red-400 mt-3">
        <div className="flex justify-between mt-3 text-sm">
  <span className="text-red-400">
    🔴 High Sales Activity
  </span>

  <span className="text-green-400">
    🟢 System Online
  </span>
</div>
      </p>
    </div>
  );
}

export default PieChartComponent;