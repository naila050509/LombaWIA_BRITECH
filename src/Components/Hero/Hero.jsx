import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeroJpg from "../../assets/Banner.png";
import { motion, useScroll, useTransform } from "framer-motion";

// Animasi fade dari bawah ke atas
export const FadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

// Animasi fade lembut (buat overlay & background)
const FadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut", delay },
  },
});

const Hero = () => {
  // Efek parallax untuk background
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 400], [0, 150]);

  // Efek gradient berjalan
  const [gradient, setGradient] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setGradient((prev) => (prev + 1) % 360),
      80
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home"
      className="relative bg-cover bg-center min-h-[680px] overflow-hidden"
      style={{
        backgroundImage: `url(${HeroJpg})`,
        backgroundAttachment: "fixed", // bikin efek parallax halus
      }}
      variants={FadeIn(0)}
      initial="initial"
      animate="animate"
    >
      {/* Overlay dengan motion */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"
        style={{ y: yPos }}
        variants={FadeIn(0.3)}
        initial="initial"
        animate="animate"
      ></motion.div>

      {/* Navbar */}
      <motion.div
        className="relative z-30"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <Navbar textColor="text-dark" />
      </motion.div>

      {/* Konten Hero */}
      <div className="relative z-20 flex items-center justify-center md:justify-start min-h-[680px] px-6 md:px-20">
        <div className="text-left">
          {/* Judul pakai animasi FadeUp */}
          <motion.h1
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="text-3xl md:text-5xl font-bold leading-snug text-white max-w-[500px]"
          >
            LocalSide On <span className="!text-secondary">Ciledug</span> Area
          </motion.h1>

          {/* Tombol pakai animasi juga */}
          <motion.div
            variants={FadeUp(1)}
            initial="initial"
            animate="animate"
            className="mt-8 flex justify-center md:justify-start"
          >
            <button className="relative px-6 py-3 rounded-full font-medium flex items-center gap-2 overflow-hidden transition-all duration-500 bg-[#f7ba34] text-white group hover:bg-[#69a79c]">
              {/* Efek glow lembut */}
              <span className="absolute inset-0 bg-gradient-to-r [#69a79c] opacity-0          group-hover:opacity-100 blur-lg transition-opacity duration-700"></span>

              {/* Isi tombol */}
              <span className="relative z-10 flex items-center gap-2">
                <IoIosArrowRoundForward className="text-xl transition-transform duration-300 group-hover:translate-x-2 group-hover:-rotate-45" />
                Explore UMKM
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
