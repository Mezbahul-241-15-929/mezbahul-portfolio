"use client";

import React, { useEffect, useState } from "react";

type CategoryKey = "All" | "Online Courses" | "Offline Programs" | "Contests";

type Photo = { id: string; url: string; name?: string };

const CATEGORIES: CategoryKey[] = ["All", "Online Courses", "Offline Programs", "Contests"];

const PHOTOS: Photo[] = [
  { id: "1", url: "/Gallary/1.jpeg", name: "Award 1" },
  { id: "2", url: "/Gallary/2.png", name: "Certificate 2" },
  { id: "3", url: "/Gallary/3.png", name: "Certificate 3" },
  { id: "4", url: "/Gallary/4.png", name: "Certificate 4" },
  { id: "5", url: "/Gallary/5.png", name: "Certificate 5" },
  { id: "6", url: "/Gallary/6.jpg", name: "Tour 6" },
];

const CATEGORY_MAP: Record<CategoryKey, string[]> = {
  All: PHOTOS.map((p) => p.id),
  "Online Courses": ["2", "3", "4", "5"],
  "Offline Programs": ["1"],
  Contests: ["6"],
};

const LABELS: Record<CategoryKey, string> = {
  All: "✨ All",
  "Online Courses": "📚 Online Courses",
  "Offline Programs": "🎓 Offline Programs",
  Contests: "🏆 Contests",
};

export default function PhotoGallery() {
  const [active, setActive] = useState<CategoryKey>(CATEGORIES[0]);
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalUrl(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const photosToShow = PHOTOS.filter((p) => CATEGORY_MAP[active].includes(p.id));

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm relative overflow-hidden rounded-lg">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">GALLERY</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 leading-tight text-white">
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic font-serif">Photo</span> Gallery
          </h2>
          
        </div>

        <div className="flex items-center justify-center mb-6 gap-3 flex-wrap">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${c === active ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-black shadow-lg" : "bg-white/5 text-white hover:bg-white/10"}`}
            >
              <span>{LABELS[c]}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photosToShow.map((p) => (
            <div key={p.id} className="relative rounded overflow-hidden bg-white/5 cursor-pointer" onClick={() => setModalUrl(p.url)}>
              <img src={p.url} alt={p.name} className="w-full h-72 md:h-80 object-cover" />
            </div>
          ))}
        </div>

        {modalUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={() => setModalUrl(null)}>
            <div className="relative max-h-full max-w-[95%]" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setModalUrl(null)} className="absolute top-3 right-3 z-50 bg-white/10 text-white rounded-full p-2">✕</button>
              <img src={modalUrl} alt="preview" className="max-h-[90vh] max-w-[90vw] object-contain rounded" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
