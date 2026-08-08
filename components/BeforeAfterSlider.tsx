"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronsLeftRight } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import Image from "next/image";

interface Case {
  label: string;
  category: string;
  before: string;
  after: string;
}

const CASES: Case[] = [
  {
    label: "Dental Implant",
    category: "Dental Care",
    before: "/Services/Before Image (Dental Implant).png",
    after: "/Services/After Image (Dental Implant).png",
  },
  {
    label: "Root Canal",
    category: "Dental Care",
    before: "/Services/Before Image (Root Canal).png",
    after: "/Services/After Image (Root Canal).png",
  },
];

/* ─── Interactive Slider Card ─────────────────────────────────────── */
const SliderCard = ({
  item,
  index,
  onClick,
}: {
  item: Case;
  index: number;
  onClick: () => void;
}) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="snap-start shrink-0 w-[85vw] md:w-[420px] group cursor-ew-resize"
    >
      {/* Card */}
      <div
        className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-[0_15px_40px_-10px_rgba(0,0,0,0.18)] border border-black/5 select-none"
        onClick={onClick}
      >
        {/* After image (background) */}
        <div className="absolute inset-0">
          <Image
            src={item.after}
            alt={`${item.label} After`}
            fill
            sizes="(max-width: 768px) 85vw, 420px"
            className="object-cover object-center pointer-events-none"
          />
          <span className="absolute top-4 right-4 bg-[#17B8C8]/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow z-10">
            AFTER
          </span>
        </div>

        {/* Before image (clipped foreground) */}
        <div
          className="absolute inset-0 z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`${item.label} Before`}
            fill
            sizes="(max-width: 768px) 85vw, 420px"
            className="object-cover object-center pointer-events-none"
          />
          <span className="absolute top-4 left-4 bg-black/40 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow z-10 backdrop-blur-sm">
            BEFORE
          </span>
        </div>

        {/* Divider line + handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-[3px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#17B8C8]">
            <ChevronsLeftRight size={20} strokeWidth={2.5} />
          </div>
        </div>

        {/* Range input for drag */}
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPos}
          onChange={(e) => {
            e.stopPropagation();
            setSliderPos(Number(e.target.value));
          }}
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          aria-label={`${item.label} before after slider`}
        />
      </div>

      {/* Label */}
      <h4 className="mt-4 font-bold text-lg text-center text-[#1b365d] group-hover:text-[#17B8C8] transition-colors">
        {item.label}
      </h4>
      <p className="text-xs text-center text-text/50 mt-1 font-medium">
        Drag slider to compare
      </p>
    </motion.div>
  );
};

/* ─── Main Component ──────────────────────────────────────────────── */
export const BeforeAfterSlider = ({
  filterCategory,
}: {
  filterCategory?: string;
}) => {
  const [lightboxCase, setLightboxCase] = useState<Case | null>(null);
  const [lbSliderPos, setLbSliderPos] = useState(50);

  const filteredCases = filterCategory
    ? CASES.filter(
        (c) =>
          c.category === filterCategory ||
          c.label.toLowerCase().includes(filterCategory.toLowerCase())
      )
    : CASES;

  const displayCases = filteredCases.length > 0 ? filteredCases : CASES;

  const openLightbox = (item: Case) => {
    setLbSliderPos(50);
    setLightboxCase(item);
  };

  return (
    <section className="py-24 bg-background-light border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <SectionTitle
          title="Transformations"
          subtitle="Real Results"
          className="mb-16"
        />

        <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0 justify-center">
          {displayCases.map((item, index) => (
            <SliderCard
              key={index}
              item={item}
              index={index}
              onClick={() => openLightbox(item)}
            />
          ))}
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {lightboxCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setLightboxCase(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
              onClick={() => setLightboxCase(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-3xl aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* After (bg) */}
              <div className="absolute inset-0">
                <Image
                  src={lightboxCase.after}
                  alt={`${lightboxCase.label} After`}
                  fill
                  sizes="(max-width: 768px) 95vw, 800px"
                  className="object-cover object-center pointer-events-none"
                />
                <span className="absolute top-4 right-4 bg-[#17B8C8]/90 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow z-10">
                  AFTER
                </span>
              </div>

              {/* Before (clipped) */}
              <div
                className="absolute inset-0 z-10"
                style={{ clipPath: `inset(0 ${100 - lbSliderPos}% 0 0)` }}
              >
                <Image
                  src={lightboxCase.before}
                  alt={`${lightboxCase.label} Before`}
                  fill
                  sizes="(max-width: 768px) 95vw, 800px"
                  className="object-cover object-center pointer-events-none"
                />
                <span className="absolute top-4 left-4 bg-black/50 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow z-10 backdrop-blur-sm">
                  BEFORE
                </span>
              </div>

              {/* Divider + handle */}
              <div
                className="absolute top-0 bottom-0 z-20 w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
                style={{ left: `${lbSliderPos}%`, transform: "translateX(-50%)" }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#17B8C8]">
                  <ChevronsLeftRight size={24} strokeWidth={2.5} />
                </div>
              </div>

              {/* Range input */}
              <input
                type="range"
                min={0}
                max={100}
                value={lbSliderPos}
                onChange={(e) => setLbSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Lightbox before after slider"
              />

              {/* Title bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4 z-20 pointer-events-none">
                <p className="text-white font-bold text-lg">{lightboxCase.label} — Before & After</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
