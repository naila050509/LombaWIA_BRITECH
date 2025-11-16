import React from "react";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7ba34]/10 to-white py-16 px-6">
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 drop-shadow-sm"
        style={{ color: "#69a79c" }}
      >
        Contact <span className="text-[#f7ba34]">LOCSIDE</span>
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE: INFO PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-8"
          style={{ border: "2px solid #f7ba34" }}
        >
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#69a79c" }}>
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-6">
            Butuh bantuan, ingin memasukkan UMKM, atau mau kerja sama? Tim kami
            selalu siap mendukung perkembangan UMKM Ciledug.
          </p>

          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold" style={{ color: "#f7ba34" }}>
                Alamat
              </p>
              <p>Gang Haji Nilan 2 nomor 69</p>
            </div>

            <div>
              <p className="font-semibold" style={{ color: "#f7ba34" }}>
                Email
              </p>
              <p>zahranaila338@gmail.com</p>
            </div>

            <div>
              <p className="font-semibold" style={{ color: "#f7ba34" }}>
                WhatsApp
              </p>
              <p>088289734711</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2" style={{ color: "#69a79c" }}>
              Follow Us
            </h3>
            <div className="flex gap-4 text-xl">
              <button className="hover:text-[#69a79c]">📸</button>
              <button className="hover:text-[#69a79c]">🎵</button>
              <button className="hover:text-[#69a79c]">📘</button>
              <button className="hover:text-[#69a79c]">🐦</button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: CONTACT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-8 space-y-5"
          style={{ border: "2px solid #69a79c" }}
        >
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#69a79c" }}>
            Send Us a Message
          </h2>

          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 outline-none"
            style={{ focusRingColor: "#69a79c" }}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 outline-none"
          />

          <input
            type="text"
            placeholder="Subjek"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 outline-none"
          />

          <textarea
            placeholder="Pesan Kamu..."
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 outline-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full text-white py-3 rounded-xl font-semibold shadow-md transition"
            style={{
              backgroundColor: "#f7ba34",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#69a79c")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f7ba34")}
          >
            Kirim Pesan ✨
          </motion.button>
        </motion.form>
      </div>

      {/* FOOTER CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mt-12 text-gray-600"
      >
        <p style={{ color: "#69a79c" }}>
          LOCSIDE — Menghubungkan UMKM Ciledug dengan peluang bisnis yang lebih besar.
        </p>
      </motion.div>
    </div>
  );
}

export default ContactUs;
