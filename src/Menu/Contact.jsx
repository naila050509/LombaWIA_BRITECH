import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Music2,
  Facebook,
  Twitter,
  Send,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
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

const InfoRow = ({ icon: Icon, title, children }) => (
  <div className="flex gap-3">
    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-50 text-amber-700 flex-shrink-0">
      <Icon className="h-5 w-5" />
    </div>

    <div className="min-w-0">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <div className="text-sm text-slate-600 break-words">{children}</div>
    </div>
  </div>
);

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // sementara: kamu bisa sambung ke EmailJS / backend nanti
    alert("Pesan kamu sudah siap dikirim ✅ (tinggal sambungkan ke backend)");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-amber-50/40" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-center gap-2">
              <Pill className="bg-amber-100 text-amber-800">Contact</Pill>
              <Pill className="bg-emerald-100 text-emerald-800">LocalSide</Pill>
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Hubungi{" "}
              <span className="bg-gradient-to-r from-amber-500 to-emerald-500 bg-clip-text text-transparent">
                LocalSide
              </span>
            </h1>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Butuh bantuan, ingin memasukkan UMKM, atau mau kerja sama? Kirim pesan
              lewat form atau hubungi kontak di bawah ini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* LEFT: INFO */}
          <motion.aside
            {...fadeUp}
            className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Get in Touch
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Tim LocalSide siap bantu UMKM dan warga Ciledug.
                </p>
              </div>
              <span className="rounded-2xl bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Support UMKM
              </span>
            </div>

            <div className="mt-7 space-y-5">
              <InfoRow icon={MapPin} title="Alamat">
                Gang Haji Nilan 2 nomor 69
              </InfoRow>

              <InfoRow icon={Mail} title="Email">
                <a
                  href="mailto:zahranaila338@gmail.com"
                  className="text-amber-700 hover:text-amber-800 font-medium"
                >
                  zahranaila338@gmail.com
                </a>
              </InfoRow>

              <InfoRow icon={Phone} title="WhatsApp">
                <a
                  href="https://wa.me/6288289734711"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-700 hover:text-amber-800 font-medium"
                >
                  088289734711
                </a>
              </InfoRow>
            </div>

            {/* SOCIAL */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-900">Follow Us</h3>
              <div className="mt-3 flex gap-3">
                <a
                  href="#"
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                  aria-label="TikTok"
                >
                  <Music2 className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>

              {/* mini highlights */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-amber-50 p-4">
                  <p className="text-sm font-bold text-slate-900">Fast Response</p>
                  <p className="text-xs text-slate-600 mt-1">Balas cepat via WA</p>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="text-sm font-bold text-slate-900">Partnership</p>
                  <p className="text-xs text-slate-600 mt-1">Kolaborasi lokal</p>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* RIGHT: FORM */}
          <motion.form
            {...fadeUp}
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Send a Message
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Isi form ini, nanti kami follow up.
                </p>
              </div>
              <Pill className="bg-amber-100 text-amber-800">Form</Pill>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="text-sm font-semibold text-slate-700">
                  Nama Lengkap
                </label>
                <input
                  value={form.name}
                  onChange={onChange("name")}
                  type="text"
                  placeholder="Nama kamu"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200"
                  required
                />
              </div>

              <div className="sm:col-span-1">
                <label className="text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  value={form.email}
                  onChange={onChange("email")}
                  type="email"
                  placeholder="email@contoh.com"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-slate-700">
                  Subjek
                </label>
                <input
                  value={form.subject}
                  onChange={onChange("subject")}
                  type="text"
                  placeholder="Contoh: Daftar UMKM / Kerja sama / Bantuan"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-slate-700">
                  Pesan
                </label>
                <textarea
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Tulis pesan kamu di sini..."
                  rows={6}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200 resize-none"
                  required
                />
              </div>
            </div>

            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-6 w-full rounded-2xl bg-amber-500 px-5 py-3 font-semibold text-white shadow-sm hover:bg-amber-600 transition flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" />
              Kirim Pesan
            </motion.button>

            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              Dengan mengirim pesan, kamu setuju data digunakan untuk keperluan
              komunikasi (balasan) saja.
            </p>
          </motion.form>
        </div>

        {/* FOOTER NOTE */}
        <motion.div {...fadeUp} className="text-center mt-10 text-slate-500">
          <p>
            <span className="font-semibold text-slate-700">LocalSide</span> — Menghubungkan UMKM Ciledug dengan peluang bisnis yang lebih besar.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default ContactUs;
