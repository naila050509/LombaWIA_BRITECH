import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import umkms from "../Data_UMKM/Data";

const clamp2 = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

const Icon = {
  Heart: ({ filled = false }) => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  Pin: () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s7-4.35 7-11a7 7 0 0 0-14 0c0 6.65 7 11 7 11z" />
      <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  ),
  Bookmark: () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ),
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [liked, setLiked] = useState(() => new Set());

  const categories = useMemo(() => {
    const set = new Set(umkms.map((u) => u.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return umkms.filter((u) => {
      const matchesCategory = selectedCategory === "All" ? true : u.category === selectedCategory;
      const matchesQuery =
        !q ||
        u.name.toLowerCase().includes(q) ||
        (u.description || "").toLowerCase().includes(q) ||
        (u.address || "").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  const toggleLike = (id) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:py-8">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900">
              Temukan UMKM Favoritmu
            </h1>
            <p className="mt-1 text-slate-500">
              Jelajahi berdasarkan kategori, rating, dan lokasi.
            </p>
          </div>

          {/* Search */}
          <div className="flex w-full lg:w-[420px] gap-2">
            <div className="relative flex-1">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari UMKM"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-10 shadow-sm outline-none focus:ring-2 focus:ring-amber-200"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                ⌕
              </span>
            </div>

            {/* Dropdown (mobile friendly) */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm outline-none focus:ring-2 focus:ring-amber-200"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category chips (mirip referensi) */}
        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {categories.map((c) => {
            const active = selectedCategory === c;
            return (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={[
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm transition",
                  active
                    ? "bg-amber-500 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50",
                ].join(" ")}
                type="button"
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((u) => {
            const isOpen = u.isOpen ?? true;          // optional
            const priceRange = u.priceRange ?? null;  // optional
            const tags = Array.isArray(u.tags) ? u.tags : []; // optional
            const isLiked = liked.has(u.id);

            return (
              <motion.article
                key={u.id}
                whileHover={{ y: -2 }}
                className="group rounded-3xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden hover:shadow-md transition"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={u.image}
                    alt={u.name}
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  {/* Status */}
                  <span
                    className={[
                      "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold",
                      isOpen ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700",
                    ].join(" ")}
                  >
                    • {isOpen ? "Buka" : "Tutup"}
                  </span>

                  {/* Heart */}
                  <button
                    onClick={() => toggleLike(u.id)}
                    className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-slate-700 shadow-sm hover:bg-white"
                    type="button"
                    aria-label="favorite"
                  >
                    <span className={isLiked ? "text-rose-500" : ""}>
                      <Icon.Heart filled={isLiked} />
                    </span>
                  </button>

                  {/* Category pill on image */}
                  <span className="absolute left-4 bottom-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
                    {u.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="min-w-0 text-xl font-bold text-slate-900 truncate">
                      {u.name}
                    </h2>

                    <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-sm font-semibold text-amber-700 flex-shrink-0">
                      <Icon.Star />
                      {u.rating}
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <Icon.Pin />
                    <span className="min-w-0 truncate">{u.address}</span>
                  </div>

                  <p className="mt-3 text-sm text-slate-600" style={clamp2}>
                    {u.description}
                  </p>

                  {/* Tags */}
                  {tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                      {tags.length > 4 && (
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          +{tags.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Price row (optional) */}
                  <div className="mt-4 flex items-baseline justify-between">
                    <span className="text-sm text-slate-500">Kisaran Harga:</span>
                    <span className="text-sm font-bold text-amber-600">
                      {priceRange ?? "-"}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex gap-3">
                    <Link
                      to={`/umkm/${u.id}`}
                      className="flex-1 rounded-2xl bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition"
                    >
                      Lihat Detail →
                    </Link>

                    <button
                      type="button"
                      className="grid h-12 w-12 place-items-center rounded-2xl border border-amber-200 text-amber-700 hover:bg-amber-50 transition"
                      aria-label="bookmark"
                    >
                      <Icon.Bookmark />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}

          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed bg-white p-10 text-center text-slate-500">
              Tidak ada UMKM ditemukan untuk filter ini.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
