import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import umkms from "../Data_UMKM/Data";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ambil kategori unik dari data
  const categories = useMemo(() => {
    const set = new Set(umkms.map((u) => u.category));
    return ["All", ...Array.from(set)];
  }, []);

  // filter data berdasarkan kategori
  const filtered = useMemo(() => {
    if (selectedCategory === "All") return umkms;
    return umkms.filter((u) => u.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center !bg-primary py-4 rounded-lg">
        Temukan UMKM Favoritmu
      </h1>

      {/* Dropdown filter */}
      <div className="flex justify-center mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="
      px-4 py-3 
      w-60
      text-lg
      rounded-xl
      border border-gray-300 
      shadow-md
      bg-white
      focus:outline-none 
      focus:ring-2 focus:ring-indigo-400
      hover:border-indigo-400
      transition-all duration-300
      cursor-pointer
      appearance-none
      relative
    "
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg fill="%23999" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5.516 7.548c-.436-.447-.143-1.216.492-1.216h7.984c.635 0 .928.769.492 1.216l-3.992 4.095a.75.75 0 01-1.056 0L5.516 7.548z"/></svg>\')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
          }}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Grid UMKM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((u) => (
          <motion.div
            key={u.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 cursor-pointer"
          >
            <img
              src={u.image}
              alt={u.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-xl mb-1">{u.name}</h2>
              <p className="text-sm text-gray-500 mb-2">
                {u.category} • {u.rating}⭐
              </p>
              <p className="text-gray-600 text-sm truncate">{u.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/umkm/${u.id}`}
                  className="bg-[#f7ba34] text-white px-3 py-1 rounded hover:bg-[#69a79c] text-sm"
                >
                  Lihat Profil
                </Link>
                <span className=" text-gray-400 text-xs ml-3">{u.address}</span>
              </div>
            </div>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            Tidak ada UMKM ditemukan untuk kategori ini.
          </p>
        )}
      </div>
    </div>
  );
};

export default Categories;
