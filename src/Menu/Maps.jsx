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

const FlyTo = ({ position, zoom = 15 }) => {
  const map = useMap();
  useEffect(() => {
    if (position) map.flyTo(position, zoom, { animate: true, duration: 0.8 });
  }, [position, zoom, map]);
  return null;
};

const MapsPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(null);
  const [focusPos, setFocusPos] = useState(null);
  const [userLoc, setUserLoc] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => setUserLoc([pos.coords.latitude, pos.coords.longitude]),
      () => {}
    );
  }, []);

  const categories = useMemo(() => {
    const set = new Set(umkms.map((u) => u.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return umkms.filter((u) => {
      const matchesQuery =
        !q ||
        u.name.toLowerCase().includes(q) ||
        (u.description || "").toLowerCase().includes(q);
      const matchesCategory = category === "All" ? true : u.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const handleListClick = (u) => {
    setSelectedId(u.id);
    setFocusPos([u.lat, u.lng]);
    mapRef.current?.flyTo([u.lat, u.lng], 15, { animate: true, duration: 0.8 });
  };

  const resetFilters = () => {
    setQuery("");
    setCategory("All");
    setSelectedId(null);
    setFocusPos(null);
  };

  const goToMyLocation = () => {
    if (!userLoc) return;
    mapRef.current?.flyTo(userLoc, 15, { animate: true, duration: 0.8 });
    setFocusPos(userLoc);
    setSelectedId(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-3 lg:px-6 py-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sidebar */}
          <aside className="w-full lg:w-[420px]">
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b bg-gradient-to-b from-white to-slate-50">
                <h2 className="text-lg font-semibold">Temukan UMKM</h2>
                <p className="text-sm text-slate-500 mt-1">
                  {filtered.length} hasil • klik card untuk fokus ke map
                </p>

                <div className="mt-3 space-y-2">
                  <input
                    type="search"
                    placeholder="Cari nama, makanan, atau layanan..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                  />

                  <div className="flex gap-2">
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="flex-1 border rounded-xl px-3 py-2 bg-white"
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={resetFilters}
                      className="px-3 py-2 border rounded-xl hover:bg-slate-50"
                      type="button"
                    >
                      Reset
                    </button>

                    <button
                      onClick={goToMyLocation}
                      className="px-3 py-2 border rounded-xl hover:bg-slate-50"
                      type="button"
                      title="Ke lokasi saya"
                    >
                      Lokasi
                    </button>
                  </div>
                </div>
              </div>

              {/* List */}
              <div className="max-h-[70vh] lg:max-h-[calc(100vh-210px)] overflow-auto p-3 space-y-3">
                {filtered.map((u) => (
                  <motion.button
                    key={u.id}
                    onClick={() => handleListClick(u)}
                    className={`w-full text-left p-3 border rounded-2xl bg-white overflow-hidden transition
                      hover:shadow-sm hover:border-slate-300
                      ${selectedId === u.id ? "ring-2 ring-indigo-200 border-indigo-200" : "border-slate-200"}
                    `}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="button"
                  >
                    <div className="flex gap-3">
                      <img
                        src={u.image}
                        alt={u.name}
                        className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                      />

                      {/* FIX overflow teks: min-w-0 */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold truncate">{u.name}</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600 flex-shrink-0">
                            {u.rating}⭐
                          </span>
                        </div>

                        <p className="text-sm text-slate-600 truncate">{u.category}</p>

                        {/* kalau kamu pakai tailwind line-clamp plugin, ganti jadi: className="text-sm text-slate-500 line-clamp-2" */}
                        <p className="text-sm text-slate-500 break-words whitespace-normal mt-1">
                          {u.description}
                        </p>

                        <div className="mt-3 flex gap-2">
                          <Link
                            to={`/umkm/${u.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs px-3 py-1.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
                          >
                            Lihat Profil
                          </Link>

                          <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${u.lat},${u.lng}`}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs px-3 py-1.5 rounded-xl border hover:bg-slate-50"
                          >
                            Directions
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}

                {filtered.length === 0 && (
                  <p className="text-slate-500 p-3">Tidak ditemukan.</p>
                )}
              </div>
            </div>
          </aside>

          {/* Map */}
          <section className="flex-1">
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden h-[70vh] lg:h-[calc(100vh-32px)]">
              <MapContainer
                center={userLoc || [-6.2, 106.816666]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
                whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {focusPos && <FlyTo position={focusPos} zoom={15} />}

                {filtered.map((u) => (
                  <Marker
                    key={u.id}
                    position={[u.lat, u.lng]}
                    eventHandlers={{
                      click: () => {
                        setSelectedId(u.id);
                        setFocusPos([u.lat, u.lng]);
                      },
                    }}
                  >
                    <Popup closeButton={false} minWidth={240}>
                      <div className="w-60">
                        <img
                          src={u.image}
                          alt={u.name}
                          className="w-full h-28 object-cover rounded mb-2"
                        />
                        <h3 className="font-semibold">{u.name}</h3>
                        <p className="text-sm text-gray-600">
                          {u.category} • {u.rating}⭐
                        </p>
                        <p className="text-sm mt-1">{u.address}</p>

                        <div className="mt-2 flex gap-2">
                          <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${u.lat},${u.lng}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs px-3 py-1 border rounded"
                          >
                            Directions
                          </a>

                          <Link
                            to={`/umkm/${u.id}`}
                            className="text-xs px-3 py-1 bg-indigo-600 text-white rounded"
                          >
                            Profil
                          </Link>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MapsPage;
