import React, { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../Hero/Hero";

const Banner = () => {
  const [activeTab, setActiveTab] = useState("peta");

  return (
    <section className="bg-[#FFF9EF] py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          variants={FadeUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold text-gray-800 mb-4">
            Jelajahi <span className="text-orange-500">Pengalaman</span> Baru
          </h2>
          <p className="text-gray-600 text-lg">
            Pilih fitur sesuai kebutuhanmu
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-full p-2 flex gap-2">
            <button
              onClick={() => setActiveTab("peta")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300
                ${
                  activeTab === "peta"
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              Peta Interaktif
            </button>

            <button
              onClick={() => setActiveTab("loyalty")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300
                ${
                  activeTab === "loyalty"
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              Poin Loyalitas
            </button>

            <button
              onClick={() => setActiveTab("ulasan")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300
                ${
                  activeTab === "ulasan"
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              Ulasan Kontekstual
            </button>
          </div>
        </div>

        {/* Content */}
        <motion.div
          variants={FadeUp(0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          {activeTab === "peta" && (
            <p className="text-gray-600 text-lg">
              Temukan UMKM terdekat dengan peta interaktif, lokasi akurat,
              dan navigasi langsung ke tempat tujuan.
            </p>
          )}

          {activeTab === "loyalty" && (
            <p className="text-gray-600 text-lg">
              Dapatkan poin dari setiap transaksi dan tukarkan dengan
              berbagai reward menarik.
            </p>
          )}

          {activeTab === "ulasan" && (
            <p className="text-gray-600 text-lg">
              Baca ulasan jujur dan relevan langsung dari pelanggan
              berdasarkan pengalaman nyata.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

