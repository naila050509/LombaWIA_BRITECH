import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f4f4f4]">
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">LocalSide On Ciledug Area</h1>
            <p className="text-dark2"> Website ini menampilkan seluruh UMKM yang berada di tanah seratus serta peninggilan untuk memperkenalkan usaha usaha kecil mereka kepada seluruh pengguna media sosial</p>
          </div>
          {/* Second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">UMKM</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Makanan
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Minuman
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Elektronik
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Layanan Jasa
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Links</h1>
                <div className="text-dark2">
                  <ul className="space-y-2 text-lg">
                    <li className="cursor-pointer hover:text-secondary duration-200">
                      Home
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-200">
                      Maps
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-200">
                      Categories
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-200">
                      About Us
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-200">
                      Contact
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="!bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-6 py-3">
              <a href="#">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com/naii_d0.0/">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.youtube.com/channel/UC7tAMneQUsCJHoNd9YXlAPA">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
