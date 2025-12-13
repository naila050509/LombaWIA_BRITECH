import React from "react";
import { TbCup, TbMeat, TbPlugConnected, TbBriefcase } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HightlightData = [
  {
    id: 1,
    title: "Makanan",
    link: "/Makanan",
    icon: <TbMeat />,
    delay: 0.1,
    color: "from-amber-50 to-amber-100",
    border: "border-amber-200",
    hover: "hover:bg-gradient-to-br hover:from-amber-100 hover:to-amber-50",
    iconColor: "text-amber-600"
  },
  {
    id: 2,
    title: "Minuman",
    link: "/Minuman",
    icon: <TbCup />,
    delay: 0.2,
    color: "from-emerald-50 to-emerald-100",
    border: "border-emerald-200",
    hover: "hover:bg-gradient-to-br hover:from-emerald-100 hover:to-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    id: 3,
    title: "Elektronik",
    link: "/Elektronik",
    icon: <TbPlugConnected />,
    delay: 0.3,
    color: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    hover: "hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-50",
    iconColor: "text-blue-600"
  },
  {
    id: 4,
    title: "Layanan Jasa",
    link: "/Jasa",
    icon: <TbBriefcase />,
    delay: 0.4,
    color: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    hover: "hover:bg-gradient-to-br hover:from-purple-100 hover:to-purple-50",
    iconColor: "text-purple-600"
  },
];

// Gunakan FadeUp yang sama dengan Hero
const FadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

const ScaleUp = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const Highlight = () => {
  return (
    <section id="highlight-section" className="bg-white py-16 md:py-24 relative z-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20 max-w-6xl">
        {/* Header Section */}
        <motion.div
          variants={FadeUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Jelajahi <span className="text-[#69a79c]">Kategori</span> UMKM
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai jenis UMKM terbaik di Ciledug sesuai kebutuhanmu
          </p>
        </motion.div>

        {/* Grid Kategori */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {HightlightData.map((item) => (
            <Link to={item.link} key={item.id}>
              <motion.div
                variants={ScaleUp(item.delay)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className={`group relative cursor-pointer bg-gradient-to-b ${item.color} border ${item.border} rounded-2xl md:rounded-3xl flex flex-col items-center justify-center p-6 md:p-8 transition-all duration-300 ${item.hover} shadow-lg hover:shadow-2xl`}
              >
                {/* Floating effect */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-white/0 group-hover:bg-white/20 transition-all duration-300" />
                
                {/* Icon Container */}
                <div className={`relative z-10 p-4 rounded-2xl bg-white mb-4 md:mb-6 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                  <div className={`text-3xl md:text-4xl ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="relative z-10 text-lg md:text-xl font-semibold text-gray-800 text-center">
                  {item.title}
                </h3>
                
                {/* Subtle arrow */}
                <div className="relative z-10 mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  style={{
                    background: item.id === 1 ? 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)' :
                              item.id === 2 ? 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)' :
                              item.id === 3 ? 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)' :
                                              'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)'
                  }}
                />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          variants={FadeUp(0.6)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-gray-600 mb-6 md:mb-8 text-lg md:text-xl">
            Tidak menemukan yang kamu cari?
          </p>
          <Link to="/Categories">
            <button className="group relative px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold flex items-center justify-center gap-3 overflow-hidden transition-all duration-500 bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-[#69a79c] hover:to-[#69a79c]/90 hover:scale-105 active:scale-95 mx-auto shadow-xl hover:shadow-2xl">
              {/* Shine Effect - sama seperti di Hero */}
              <span className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/30 group-hover:animate-shine" />
              
              <span className="relative z-10 flex items-center gap-3 text-lg md:text-xl">
                Lihat Semua Kategori
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
      
      {/* Custom CSS untuk shine effect */}
      <style jsx>{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }
        .animate-shine {
          animation: shine 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Highlight;