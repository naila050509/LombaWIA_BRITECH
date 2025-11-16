// src/Menu/Maps.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import umkms from "../Data_UMKM/Data";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import marker2x from "leaflet/dist/images/marker-icon-2x.png";
import marker from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

/* Fix default icon path (Leaflet + bundlers) */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: markerShadow,
});

const FitToMarker = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, 15, { animate: true });
    }
  }, [position, map]);
  return null;
};

const MapsPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null); // marker selected (id)
  const [userLoc, setUserLoc] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    // try to get user location (optional)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLoc([pos.coords.latitude, pos.coords.longitude]),
        () => {} // ignore error
      );
    }
  }, []);

  // derive categories for filter
  const categories = useMemo(() => {
    const set = new Set(umkms.map((u) => u.category));
    return ["All", ...Array.from(set)];
  }, []);

  // filtered list
  const filtered = useMemo(() => {
    return umkms.filter((u) => {
      const matchesQuery =
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        (u.description || "").toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" ? true : u.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const handleListClick = (umkm) => {
    setSelected([umkm.lat, umkm.lng]);
    if (mapRef.current) {
      mapRef.current.setView([umkm.lat, umkm.lng], 15, { animate: true });
    }
    setSelected(umkm.id);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar / list */}
      <aside className="w-full lg:w-1/3 max-h-screen overflow-auto p-4 bg-white z-10">
        <h2 className="text-xl font-semibold mb-3">Temukan UMKM</h2>

        <div className="mb-3">
          <input
            type="search"
            placeholder="Cari nama, makanan, atau layanan..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="mb-4 flex gap-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded px-3 py-2"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="px-3 py-2 border rounded"
          >
            Reset
          </button>
        </div>

        <div className="space-y-3">
          {filtered.map((u) => (
            <motion.div
              key={u.id}
              onClick={() => handleListClick(u)}
              className={`p-3 border rounded cursor-pointer hover:shadow ${selected === u.id ? "ring-2 ring-indigo-300" : ""}`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex gap-3">
                <img src={u.image} alt={u.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{u.name}</h3>
                  <p className="text-sm text-gray-600">{u.category} • {u.rating}⭐</p>
                  <p className="text-sm text-gray-500 truncate">{u.description}</p>
                  <div className="mt-2">
                    <Link to={`/umkm/${u.id}`} className="text-sm text-indigo-600">Lihat Profil</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {filtered.length === 0 && <p className="text-gray-500">Tidak ditemukan.</p>}
        </div>
      </aside>

      {/* Map */}
      <div className="w-full lg:flex-1 h-[70vh] lg:h-screen relative">
        <MapContainer
          center={userLoc || [-6.200000, 106.816666]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* center when user clicks list */}
          {selected && Array.isArray(selected) && <FitToMarker position={selected} />}

          {/* markers */}
          {filtered.map((u) => (
            <Marker key={u.id} position={[u.lat, u.lng]}>
              <Popup closeButton={false} minWidth={220}>
                <div className="w-56">
                  <img src={u.image} alt={u.name} className="w-full h-28 object-cover rounded mb-2" />
                  <h3 className="font-semibold">{u.name}</h3>
                  <p className="text-sm text-gray-600">{u.category} • {u.rating}⭐</p>
                  <p className="text-sm mt-1">{u.address}</p>
                  <div className="mt-2 flex gap-2">
                    {/* Open Google Maps directions */}
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${u.lat},${u.lng}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs px-3 py-1 border rounded"
                    >
                      Directions
                    </a>

                    <Link to={`/umkm/${u.id}`} className="text-xs px-3 py-1 bg-indigo-600 text-white rounded">
                      Profil
                    </Link>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

        </MapContainer>
      </div>
    </div>
  );
};

export default MapsPage;

