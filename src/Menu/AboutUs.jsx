import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Coffee,
  Users,
  Sparkles,
  Store,
  HeartHandshake,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const Pill = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${className}`}
  >
    {children}
  </span>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition"
  >
    <div className="flex items-start gap-4">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-50 text-amber-700">
        <Icon className="h-6 w-6" />
      </div>

      <div className="min-w-0">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{desc}</p>
      </div>
    </div>
  </motion.div>
);

/** FIXED STAT CARD: rapi, center, ga pecah-pecah */
const StatCard = ({ value, label, icon: Icon }) => (
  <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition h-44 flex flex-col items-center justify-center text-center">
    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 mb-4">
      <Icon className="h-6 w-6" />
    </div>

    <p className="text-2xl font-extrabold text-slate-900 leading-tight">
      {value}
    </p>

    <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-[14rem]">
      {label}
    </p>
  </div>
);

function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-amber-50/40" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="flex justify-center gap-2">
              <Pill className="bg-amber-100 text-amber-800">Local Marketplace</Pill>
              <Pill className="bg-emerald-100 text-emerald-800">
                Ciledug Area
              </Pill>
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-amber-500 to-emerald-500 bg-clip-text text-transparent">
                LocalSide
              </span>{" "}
              untuk UMKM Ciledug
            </h1>

            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-slate-600 leading-relaxed">
              Platform lokal yang menghubungkan UMKM Ciledug dengan pembeli secara cepat,
              akurat, dan hangat—biar usaha sekitar makin terlihat, mudah ditemukan,
              dan makin rame order.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="/jelajahi"
                className="rounded-2xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition"
              >
                Jelajahi UMKM →
              </a>
              <a
                href="/maps"
                className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Lihat di Peta
              </a>
            </div>
          </motion.div>

          <Sparkles className="absolute top-8 left-8 text-emerald-400/80 animate-pulse" />
          <Sparkles className="absolute bottom-8 right-8 text-amber-400/80 animate-pulse" />
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-6xl px-6">
        <motion.div
          {...fadeUp}
          className="rounded-3xl bg-white shadow-sm ring-1 ring-black/5 p-8 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <Pill className="bg-amber-100 text-amber-800">Kenapa dibuat?</Pill>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                LocalSide hadir sebagai “jembatan” UMKM & warga
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Ciledug punya banyak UMKM hebat, tapi sering belum ketemu pembeli
                yang tepat. LocalSide dirancang biar warga bisa menemukan usaha lokal
                lebih mudah, sementara UMKM bisa lebih terlihat tanpa ribet.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill className="bg-slate-100 text-slate-700">Cepat & sederhana</Pill>
                <Pill className="bg-slate-100 text-slate-700">Dekat secara lokasi</Pill>
                <Pill className="bg-slate-100 text-slate-700">Rekomendasi relevan</Pill>
              </div>
            </div>

            {/* Stats (2x2 rapi) */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-[420px]">
              <StatCard value="3 km" label="Radius UMKM terdekat" icon={MapPin} />
              <StatCard value="Realtime" label="Arah & navigasi cepat" icon={ShieldCheck} />
              <StatCard value="Kurasi" label="Kategori & rating" icon={Store} />
              <StatCard value="Komunitas" label="Review warga sekitar" icon={Users} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 mt-16">
        <motion.div {...fadeUp} className="text-center">
          <Pill className="bg-emerald-100 text-emerald-800">Fitur unggulan</Pill>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
            Fitur yang bikin LocalSide beda 🚀
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Dibuat berdasarkan kebutuhan warga dan UMKM. Fokusnya: gampang dipakai,
            hasilnya terasa.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={MapPin}
            title="UMKM Radar"
            desc="Deteksi UMKM terdekat otomatis. Buka halaman—langsung muncul rekomendasi sekitar kamu."
          />
          <FeatureCard
            icon={Coffee}
            title="Mood-Based Suggestion"
            desc="Pilih mood (lapar, butuh kopi, pengen jajanan). LocalSide kasih saran yang pas."
          />
          <FeatureCard
            icon={Users}
            title="Ciledug Connect"
            desc="Lihat review warga, rekomendasi tetangga, dan usaha yang lagi rame di area kamu."
          />
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-6xl px-6 mt-20">
        <motion.div {...fadeUp} className="text-center">
          <Pill className="bg-amber-100 text-amber-800">Cerita</Pill>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
            Perjalanan LocalSide
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Dari keresahan kecil—jadi platform yang ngebantu usaha lokal makin terlihat.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div {...fadeUp} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-50 text-amber-700">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Dimulai dari Ciledug</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Berangkat dari satu tujuan: bikin UMKM rumahan Ciledug lebih mudah ditemukan
              dan makin berkembang.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Dibangun bareng UMKM</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Setiap fitur dirancang dari masalah nyata di lapangan—bukan sekadar ide di atas kertas.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-50 text-amber-700">
                <Rocket className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Menuju kota digital</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Visi LocalSide: bikin Ciledug jadi pusat UMKM digital yang aktif dan hidup di Tangerang.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 mt-20">
        <motion.div
          {...fadeUp}
          className="rounded-3xl bg-gradient-to-r from-amber-500 to-emerald-500 p-10 text-white shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-extrabold">
                Mau UMKM kamu muncul di LocalSide?
              </h3>
              <p className="mt-2 text-white/90">
                Daftarkan usaha kamu biar lebih mudah ditemukan warga sekitar.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="/daftar"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90 transition"
              >
                Daftar UMKM
              </a>
              <a
                href="/contact"
                className="rounded-2xl border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                Kontak
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default AboutUs;
