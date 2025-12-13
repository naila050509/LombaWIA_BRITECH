import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeroJpg from "../../assets/Banner.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

// Animasi fade dari bawah ke atas
export const FadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

// Animasi fade lembut
const FadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut", delay },
  },
});

const Hero = () => {
  // Efek parallax + zoom untuk background
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 500], [0, 200]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.15]); // Zoom effect
  
  // Responsive check untuk mobile
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fungsi untuk auto scroll ke section berikutnya
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("highlight-section");
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    } else {
      window.scrollTo({
        top: window.innerHeight * 0.8,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen"
      variants={FadeIn(0)}
      initial="initial"
      animate="animate"
    >
      {/* Background dengan parallax + zoom effect */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HeroJpg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          y: isMobile ? 0 : yPos,
          scale: isMobile ? 1 : scale,
        }}
      />

      {/* Overlay gradient dengan motion */}
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/30"
        style={{ y: isMobile ? 0 : yPos }}
        variants={FadeIn(0.3)}
        initial="initial"
        animate="animate"
      />

      {/* Navbar */}
      <motion.div
        className="relative z-30"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <Navbar textColor={isMobile ? "text-white" : "text-dark"} />
      </motion.div>

      {/* SEMUA KONTEN DI TENGAH VERTIKAL & HORIZONTAL */}
      <div className="relative z-20 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 md:px-8 lg:px-20 pt-16"> {/* Tambah pt-16 */}
        {/* Container untuk semua konten utama */}
         <div className="w-full max-w-5xl flex flex-col items-center justify-center mt-8 md:mt-20">
          {/* Judul - DI TENGAH */}
          <motion.h1
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight md:leading-snug lg:leading-tight text-white"
          >
            LocalSide On{" "}
            <span className="bg-gradient-to-r from-[#f7ba34] via-[#f7ba34] to-[#f7ba34]/90 bg-clip-text text-transparent">
              Ciledug
            </span>{" "}
            Area
          </motion.h1>

          {/* Subtitle - DI TENGAH */}
          <motion.p
            variants={FadeUp(0.8)}
            initial="initial"
            animate="animate"
            className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light text-center max-w-2xl mx-auto"
          >
            Temukan UMKM terbaik di Ciledug — dari kuliner autentik hingga jasa berkualitas, semua dalam genggamanmu.
          </motion.p>

          {/* Stats Counter - DI TENGAH */}
          <motion.div
            variants={FadeUp(1)}
            initial="initial"
            animate="animate"
            className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-12"
          >
            {[
              { value: "50+", label: "UMKM Terdaftar" },
              { value: "5+", label: "Kategori" },
              { value: "100%", label: "Lokal" },
            ].map((stat, index) => (
              <div key={index} className="text-center min-w-[100px]">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tombol CTA Utama - DI TENGAH */}
          <motion.div
            variants={FadeUp(1.2)}
            initial="initial"
            animate="animate"
            className="pt-4"
          >
            <button 
              className="group relative px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold flex items-center justify-center gap-3 overflow-hidden transition-all duration-500 bg-gradient-to-r from-[#f7ba34] to-[#f7ba34]/90 text-white hover:from-[#69a79c] hover:to-[#69a79c]/90 hover:scale-105 active:scale-95 mx-auto shadow-2xl hover:shadow-3xl hover:shadow-[#69a79c]/30"
              onClick={() => window.location.href = '/Categories'}
            >
              {/* Shine Effect */}
              <span className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/30 group-hover:animate-shine" />

              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3 text-lg md:text-xl">
                <IoIosArrowRoundForward className="text-2xl md:text-3xl transition-all duration-300 group-hover:translate-x-2 group-hover:rotate-90" />
                Explore UMKM Sekarang
              </span>
            </button>
          </motion.div>
        </div> {/* INI TUTUP DARI <div className="w-full max-w-5xl..."> */}

        {/* SCROLL INDICATOR - LANGSUNG DI BAWAH BUTTON */}
        <motion.div
          className="mt-6 md:mt-8"
          animate={{ 
            y: isHovering ? [0, 4, 0] : [0, 6, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: isHovering ? 1 : 1.5,
            ease: "easeInOut"
          }}
        >
          <button
            onClick={scrollToNextSection}
            onMouseEnter={() => !isMobile && setIsHovering(true)}
            onMouseLeave={() => !isMobile && setIsHovering(false)}
            onTouchStart={() => setIsHovering(true)}
            onTouchEnd={() => setIsHovering(false)}
            className="flex flex-col items-center gap-1 p-2 md:p-3 rounded-xl bg-transparent hover:bg-black/10 transition-all duration-300 active:scale-95 group/scroll"
            aria-label="Scroll ke section berikutnya"
          >
            {/* Label */}
            <span className="text-xs md:text-sm text-white/70 font-medium tracking-wide group-hover/scroll:text-white transition-colors">
              {isMobile ? "Scroll untuk lanjut" : "Scroll untuk explore"}
            </span>
            
            {/* Icon/Indicator */}
            <div className="transition-all duration-300 group-hover/scroll:scale-110">
              <div className="relative">
                <div className={`${isMobile ? 'w-8 h-10' : 'w-7 h-10'} border border-white/50 rounded-full flex justify-center items-center group-hover/scroll:border-white/70`}>
                  <motion.div
                    className="w-1.5 h-4 bg-white rounded-full"
                    animate={{ 
                      y: [0, isMobile ? 8 : 10, 0],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.8,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
            </div>
          </button>
        </motion.div>
      </div> {/* INI TUTUP DARI <div className="relative z-20..."> */}

      {/* Custom CSS untuk efek */}
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
        
        /* Smooth transitions */
        button, .transition-all {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </motion.section>
  );
};

export default Hero;