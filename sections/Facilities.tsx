"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryCard } from "@/components/GalleryCard";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const FACILITIES = [
  { name: "Reception Area", image: "/facilities/Reception Area Image.png" },
  { name: "Treatment Doctor", image: "/facilities/teatment docter.png" },
  { name: "Waiting Lounge", image: "/facilities/Waiting Lounge Image.png" },
  { name: "Treatment Room", image: "/facilities/Treatment Room11.png" },
  { name: "Laser Treatment Cabin", image: "/facilities/Laser Treatment Cabin 1.png" },
  { name: "Consultation Room", image: "/facilities/Consultation Room.png" },
];

export const Facilities = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
    // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? FACILITIES.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === FACILITIES.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      <section className="py-24 bg-background-light relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="World-Class Facilities"
            subtitle="Our Clinic"
            className="mb-16"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {FACILITIES.map((facility, index) => (
              <div key={index} onClick={() => handleOpen(index)}>
                <GalleryCard 
                  category={facility.name}
                  image={facility.image}
                  delay={index * 0.1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-colors duration-200"
            >
              <X size={22} />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative rounded-3xl border-4 border-white/20 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FACILITIES[selectedIndex].image}
                alt={FACILITIES[selectedIndex].name}
                className="block max-w-[90vw] max-h-[80vh] object-contain"
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
                <span className="inline-block px-5 py-2 rounded-full bg-black/50 backdrop-blur-md text-white text-sm font-bold tracking-wide">
                  {FACILITIES[selectedIndex].name}
                </span>
              </div>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <span className="text-white/60 text-sm font-medium">
                {selectedIndex + 1} / {FACILITIES.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
