import React from "react";
import { useParams, Link } from "react-router-dom";
import umkms from "../Data_UMKM/Data";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Star,
  Tag,
  ExternalLink,
} from "lucide-react";

const DetailUMKM = () => {
  const { id } = useParams();
  const data = umkms.find((item) => item.id === Number(id));

  if (!data) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-50 px-6">
        <div className="max-w-md w-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 text-center">
          <p className="text-5xl">😕</p>
          <h2 className="mt-4 text-2xl font-extrabold text-slate-900">
            UMKM Tidak Ditemukan
          </h2>
          <p className="mt-2 text-slate-600">
            Data UMKM yang kamu cari tidak tersedia.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f7ba34] px-5 py-3 font-semibold text-white shadow-sm hover:bg-[#e8a91f] transition"
          >
            <ArrowLeft className="h-5 w-5" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const rating = data.rating ?? 0;
  const category = data.category ?? "UMKM";
  const address = data.address ?? "Tidak tersedia";
  const contact = data.contact ?? "Tidak tersedia";
  const mapsLink =
    data.maps ||
    `https://www.google.com/maps/dir/?api=1&destination=${data.lat},${data.lng}`;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top gradient header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-amber-50/40" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-10 pb-6">
          {/* Back */}
          <Link
            to="/Categories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>

          <div className="mt-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {data.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                <Tag className="h-4 w-4" />
                {category}
              </span>

              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                <Star className="h-4 w-4" />
                {rating} / 5
              </span>

              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                <MapPin className="h-4 w-4" />
                Ciledug
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 mt-6">
          {/* LEFT: Main card */}
          <div className="rounded-3xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
            {/* Image */}
            <div className="relative">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-56 sm:h-72 object-cover"
              />
              {/* soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
            </div>

            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-extrabold text-slate-900">
                Tentang UMKM
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {data.description}
              </p>

              {/* Highlights / chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Ramah pelanggan
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Harga bersahabat
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Produk lokal
                </span>
              </div>

              {/* CTA */}
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#69a79c] px-5 py-3 font-semibold text-white shadow-sm hover:brightness-95 transition"
              >
                <ExternalLink className="h-5 w-5" />
                Lihat di Google Maps
              </a>
            </div>
          </div>

          {/* RIGHT: Info cards */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-sm font-extrabold text-slate-900">
                Informasi
              </h3>

              <div className="mt-4 space-y-4">
                <div className="flex gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-50 text-amber-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-500">
                      Alamat
                    </p>
                    <p className="text-sm font-medium text-slate-800 break-words">
                      {address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-500">
                      Kontak
                    </p>
                    <p className="text-sm font-medium text-slate-800 break-words">
                      {contact}
                    </p>
                  </div>
                </div>
              </div>

              {/* quick actions */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Link
                  to="/Categories"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Lihat Lainnya
                </Link>

                {/* WhatsApp quick (kalau contact angka) */}
                <a
                  href={
                    typeof contact === "string" && contact !== "Tidak tersedia"
                      ? `https://wa.me/${contact.replace(/\D/g, "")}`
                      : mapsLink
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-[#f7ba34] px-4 py-3 text-center text-sm font-semibold text-white hover:brightness-95 transition"
                >
                  Chat / Arah
                </a>
              </div>
            </div>

            {/* mini card rating/category */}
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-sm font-extrabold text-slate-900">
                Ringkasan
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-slate-500">Kategori</p>
                  <p className="mt-1 text-sm font-extrabold text-slate-900">
                    {category}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-slate-500">Rating</p>
                  <p className="mt-1 text-sm font-extrabold text-slate-900">
                    {rating} / 5
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end right */}
        </div>
      </div>
    </div>
  );
};

export default DetailUMKM;
