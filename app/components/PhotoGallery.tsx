"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CategoryKey = "Certificate" | "Gallery";

type Photo = { id: string; url: string; name?: string };

const CATEGORIES: CategoryKey[] = ["Gallery", "Certificate"];

const PHOTOS: Photo[] = [
  { id: "1", url: "/Gallary/1.jpg", name: "Award 1" },
  { id: "2", url: "/Gallary/2.jpg", name: "Certificate 2" },
  { id: "3", url: "/Gallary/3.jpg", name: "Certificate 3" },
  { id: "4", url: "/Gallary/4.jpg", name: "Certificate 4" },
  { id: "5", url: "/Gallary/5.jpg", name: "Certificate 5" },
  { id: "6", url: "/Gallary/6.jpg", name: "Certificate 6" },
  { id: "7", url: "/Gallary/7.jpg", name: "Certificate 7" },
  { id: "8", url: "/Gallary/8.jpg", name: "Certificate 8" },
  { id: "9", url: "/Gallary/9.jpg", name: "Certificate 9" },
  { id: "10", url: "/Gallary/10.jpg", name: "Certificate 10" },
  { id: "11", url: "/Gallary/11.jpg", name: "Certificate 11" },
  { id: "12", url: "/Gallary/12.jpg", name: "Certificate 12" },
  { id: "13", url: "/Gallary/13.jpg", name: "Certificate 13" },
  { id: "14", url: "/Gallary/14.jpg", name: "Certificate 14" },
  { id: "15", url: "/Gallary/15.jpg", name: "Certificate 15" },
  { id: "20", url: "/Gallary/20.jpg", name: "Certificate 20" },
  { id: "21", url: "/Gallary/21.jpg", name: "Certificate 21" },
  { id: "22", url: "/Gallary/22.JPG", name: "Certificate 22" },
];

const CATEGORY_MAP: Record<CategoryKey, string[]> = {
  "Certificate": ["1", "2", "3", "4", "5", "6","7", "8", "9", "10","11", "12", "13", "14", "15"],
  "Gallery": ["20", "21", "22"],
};

const LABELS: Record<CategoryKey, string> = {
  "Certificate": "📜 Certificate",
  "Gallery": "🖼️ Gallery",
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.5;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45 },
  },
};

export default function PhotoGallery() {
  const [active, setActive] = useState<CategoryKey>(CATEGORIES[0]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const photosToShow = PHOTOS.filter((p) => CATEGORY_MAP[active].includes(p.id));
  const currentPhoto = activeIndex !== null ? photosToShow[activeIndex] : null;

  const closeViewer = useCallback(() => {
    setActiveIndex(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((idx) => {
      if (idx === null) return null;
      setZoom(1);
      setPan({ x: 0, y: 0 });
      return (idx - 1 + photosToShow.length) % photosToShow.length;
    });
  }, [photosToShow.length]);

  const showNext = useCallback(() => {
    setActiveIndex((idx) => {
      if (idx === null) return null;
      setZoom(1);
      setPan({ x: 0, y: 0 });
      return (idx + 1) % photosToShow.length;
    });
  }, [photosToShow.length]);

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => {
      const next = Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeViewer();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-" || e.key === "_") zoomOut();
      if (e.key === "0") resetZoom();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, closeViewer, showPrev, showNext, zoomIn, zoomOut, resetZoom]);

  // Drag-to-pan when zoomed
  useEffect(() => {
    if (activeIndex === null || zoom === 1) return;

    let isDown = false;
    let startX = 0;
    let startY = 0;
    let originX = 0;
    let originY = 0;

    const onDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.clientX;
      startY = e.clientY;
      originX = pan.x;
      originY = pan.y;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      setPan({ x: originX + (e.clientX - startX), y: originY + (e.clientY - startY) });
    };
    const onUp = () => {
      isDown = false;
    };

    const el = document.getElementById("viewer-image");
    if (!el) return;
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, [activeIndex, zoom, pan]);

  return (
    <>
      <motion.section
        id="gallery"
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm relative overflow-hidden rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">GALLERY</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 leading-tight text-white">
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic font-serif">Photo Gallery</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex items-center justify-center mb-6 gap-3 flex-wrap"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {CATEGORIES.map((c) => (
              <motion.button
                key={c}
                onClick={() => {
                  setActive(c);
                  setActiveIndex(null);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition flex items-center gap-2 ${c === active ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-black shadow-lg" : "bg-white/5 text-white hover:bg-white/10"}`}
              >
                <span>{LABELS[c]}</span>
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {photosToShow.map((p, index) => (
                <motion.div
                  key={p.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="relative rounded-lg overflow-hidden bg-white/5 ring-1 ring-white/10 cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    src={p.url}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-72 md:h-80 object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      <AnimatePresence>
        {currentPhoto && activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeViewer}
          >
            {/* Top bar */}
            <motion.div
              className="absolute top-0 left-0 right-0 flex items-center justify-between gap-3 z-20 p-4 sm:p-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm font-semibold">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {activeIndex + 1}
                </span>
                <span className="text-white/40">/</span>
                <span>{photosToShow.length}</span>
                {currentPhoto.name && (
                  <span className="hidden sm:inline ml-2 text-white/70 font-normal">· {currentPhoto.name}</span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); zoomOut(); }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg font-bold transition cursor-pointer"
                  aria-label="Zoom out"
                >
                  −
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); resetZoom(); }}
                  className="px-3 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition min-w-16 cursor-pointer"
                  aria-label="Reset zoom"
                >
                  {Math.round(zoom * 100)}%
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); zoomIn(); }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg font-bold transition cursor-pointer"
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); closeViewer(); }}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-black flex items-center justify-center text-lg font-bold shadow-lg hover:scale-110 transition ml-2 cursor-pointer"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </motion.div>

            {/* Prev / Next */}
            {photosToShow.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); showPrev(); }}
                  className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 hover:text-black text-white text-2xl font-bold flex items-center justify-center transition z-20 backdrop-blur cursor-pointer"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); showNext(); }}
                  className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 hover:text-black text-white text-2xl font-bold flex items-center justify-center transition z-20 backdrop-blur cursor-pointer"
                  aria-label="Next"
                >
                  ›
                </button>
              </>
            )}

            {/* Centered image container - click outside image to close */}
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                id="viewer-image"
                src={currentPhoto.url}
                alt={currentPhoto.name}
                draggable={false}
                onClick={(e) => e.stopPropagation()}
                onDoubleClick={(e) => { e.stopPropagation(); zoom === 1 ? zoomIn() : resetZoom(); }}
                style={{
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  objectFit: "contain",
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                  transformOrigin: "center center",
                  cursor: zoom > 1 ? (pan.x !== 0 || pan.y !== 0 ? "grabbing" : "grab") : "zoom-in",
                  transition: "transform 0.2s ease",
                  touchAction: "none",
                }}
                className="select-none z-10 shadow-2xl rounded-lg border border-white/10"
              />
            </div>

            {/* Bottom hint */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-4 sm:p-6 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white/70 text-xs font-medium">
                ← → navigate &nbsp;·&nbsp; +/− zoom &nbsp;·&nbsp; double-click to toggle &nbsp;·&nbsp; click background to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
