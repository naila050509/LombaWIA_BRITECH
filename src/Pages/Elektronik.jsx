import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import umkms from "../Data_UMKM/Data";

const Elektronik = () => {

  // Filter hanya kategori Makanan
  const filtered = useMemo(() => {
    return umkms.filter((u) => u.category === "Elektronik");
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((u) => (
          <motion.div
            key={u.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 cursor-pointer"
          >
            <img src={u.image} alt={u.name} className="w-full h-48 object-cover" />
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
                <span className="text-gray-400 text-xs">{u.address}</span>
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

export default Elektronik
