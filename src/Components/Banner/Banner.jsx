import React from "react";
import BannerPng from "../../assets/banner.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../Hero/Hero";
export { FadeUp };
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 items-center">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow rounded-3xl"
          />
        </div>
        {/* Banner Image */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ y: 30, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              Empowering Local Business Growth
            </motion.h1>
            <div>
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={FadeUp(0.2).initial}
                  whileInView={FadeUp(0.2).animate}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
                >
                  <FaBookReader className="text-2xl" />
                  <p className="text-lg">10.000+ Produk Lokal</p>
                </motion.div>
                <motion.div
                  initial={FadeUp(0.2).initial}
                  whileInView={FadeUp(0.2).animate}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
                >
                  <GrUserExpert className="text-2xl" />
                  <p className="text-lg">Pelatihan & Mentoring</p>
                </motion.div>
                <motion.div
                  initial={FadeUp(0.2).initial}
                  whileInView={FadeUp(0.2).animate}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
                >
                  <MdOutlineAccessTime className="text-2xl" />
                  <p className="text-lg"> Dukungan Seumur Hidup</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
