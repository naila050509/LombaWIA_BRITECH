import React, { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../Hero/Hero";

const TABS = [
  { key: "peta", label: "Peta Interaktif", desc: "Temukan UMKM terdekat dengan peta interaktif, lokasi akurat, dan navigasi langsung ke tempat tujuan." },
  { key: "loyalty", label: "Poin Loyalitas", desc: "Dapatkan poin dari setiap transaksi dan tukarkan dengan berbagai reward menarik." },
  { key: "ulasan", label: "Ulasan Kontekstual", desc: "Baca ulasan jujur dan relevan langsung dari pelanggan berdasarkan pengalaman nyata." },
];

const Banner = () => {
  const [activeTab, setActiveTab] = useState("peta");

  return (
    <section className="bg-[#FFF9EF] py-14 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-20 max-w-6xl">
        {/* Header */}
        <motion.div
          variants={FadeUp(0.15)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-3 md:mb-4 leading-tight">
            Jelajahi <span className="text-[#f7ba34]">Pengalaman</span> Baru
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Pilih fitur sesuai kebutuhanmu
          </p>
        </motion.div>

        {/* Tabs (mobile: scroll, desktop: center) */}
        <div className="flex justify-center">
          <div
            className="
              bg-white shadow-lg rounded-2xl sm:rounded-full p-2
              w-full sm:w-auto
              overflow-x-auto sm:overflow-visible
              [-ms-overflow-style:none] [scrollbar-width:none]
            "
          >
            {/* hide scrollbar */}
            <style>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>

            <div className="flex gap-2 min-w-max sm:min-w-0">
              {TABS.map((t) => {
                const active = activeTab === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`
                      whitespace-nowrap
                      px-4 py-2.5 sm:px-6 sm:py-3
                      rounded-xl sm:rounded-full
                      text-sm sm:text-base font-semibold
                      transition-all duration-300
                      ${active ? "bg-[#f7ba34] text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}
                    `}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          variants={FadeUp(0.25)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center max-w-3xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 sm:p-8 shadow-sm ring-1 ring-black/5">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              {TABS.find((t) => t.key === activeTab)?.desc}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
