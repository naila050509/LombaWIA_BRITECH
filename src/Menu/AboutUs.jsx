import React from "react";
import { motion } from "framer-motion";
import { MapPin, Coffee, Store, Users, Sparkles } from "lucide-react";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 text-gray-800 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-24 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#f7ba34] to-[#69a79c] bg-clip-text text-transparent drop-shadow-md">
            LocalSide On Ciledug Area
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            Platform lokal yang menghubungkan UMKM Ciledug dengan pembeli secara
            cepat, akurat, dan penuh kehangatan lokal.
          </p>
        </motion.div>

        {/* Floating sparkles */}
        <Sparkles className="absolute top-10 left-12 text-[#69a79c] animate-pulse" />
        <Sparkles className="absolute bottom-10 right-12 text-[#f7ba34] animate-pulse" />
      </section>

      {/* WHY LOCALSIDE EXISTS */}
      <section className="mt-10 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#f7ba34]"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#f7ba34]">
            Kenapa LocalSide Dibuat?
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Ciledug punya ribuan UMKM hebat, tapi banyak yang belum ditemukan.
            LocalSide lahir untuk menjadi jembatan: menghubungkan warga Ciledug
            dengan produk lokal terbaik melalui teknologi yang sederhana,
            cepat, dan terasa dekat.
          </p>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="mt-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-[#69a79c] mb-12">
          Fitur Baru yang Beda Banget 🚀
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* FEATURE 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-[#69a79c]/30"
          >
            <MapPin className="text-[#69a79c] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#f7ba34]">
              UMKM Radar
            </h3>
            <p className="text-gray-600 text-sm">
              Fitur pemindai lokasi yang otomatis mendeteksi UMKM terdekat
              dalam radius 3 km. Buka page — langsung nemu yang terdekat.
            </p>
          </motion.div>

          {/* FEATURE 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-[#69a79c]/30"
          >
            <Coffee className="text-[#69a79c] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#f7ba34]">
              Mood-Based Suggestion
            </h3>
            <p className="text-gray-600 text-sm">
              Kamu pilih mood kamu (lapar, butuh kopi, pengen jajanan), dan
              LocalSide rekomendasikan UMKM yang pas untuk suasana hati kamu.
            </p>
          </motion.div>

          {/* FEATURE 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-[#69a79c]/30"
          >
            <Users className="text-[#69a79c] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#f7ba34]">
              Ciledug Connect
            </h3>
            <p className="text-gray-600 text-sm">
              Fitur sosial mini: lihat review warga sekitar, rekomendasi tetangga,
              dan UMKM favorit di area kamu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MINI TIMELINE STORY */}
      <section className="mt-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#69a79c] mb-10 text-center">
          Cerita LocalSide
        </h2>

        <div className="space-y-10">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#f7ba34]"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#69a79c]">
              Dimulai dari Ciledug
            </h3>
            <p className="text-gray-600">
              LocalSide mulai dari satu tujuan: bantu UMKM rumahan Ciledug
              untuk lebih terlihat dan berkembang.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#69a79c]"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#f7ba34]">
              Dibangun Dengan Cinta UMKM
            </h3>
            <p className="text-gray-600">
              Setiap fitur dirancang berdasarkan masalah nyata yang dialami UMKM
              di lapangan — bukan sekedar teori.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#f7ba34]"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#69a79c]">
              Menuju Kota Digital
            </h3>
            <p className="text-gray-600">
              Visi LocalSide adalah membuat Ciledug menjadi salah satu pusat
              UMKM digital paling hidup dan aktif di Tangerang.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;