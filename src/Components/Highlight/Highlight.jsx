import React, { useState } from "react";
import { TbCup } from "react-icons/tb";
import { TbMeat } from "react-icons/tb";
import { TbPlugConnected } from "react-icons/tb";
import { TbBriefcase } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HightlightData = [
  {
    id: 1,
    title: "Makanan",
    link: "/makanan",
    icon: <TbMeat />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Minuman",
    link: "/minuman",
    icon: <TbCup />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Elektronik",
    link: "/elektronik",
    icon: <TbPlugConnected />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Layanan Jasa",
    link: "/jasa",
    icon: <TbBriefcase />,
    delay: 0.5,
  },
];

const SlideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

const FadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Highlight = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">Categories UMKM</h1>

        {/* Grid kategori */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {HightlightData.map((item) => (
            <Link to={item.link} key={item.id}>
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="cursor-pointer bg-[#F4F4F4] rounded-2xl flex flex-col items-center justify-center py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3">
                  {item.title}
                </h1>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlight;
