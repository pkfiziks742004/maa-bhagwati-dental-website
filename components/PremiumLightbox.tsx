"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { GalleryItem } from "@/constants/gallery";

interface PremiumLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const PremiumLightbox = ({ isOpen, onClose, items, currentIndex, setCurrentIndex }: PremiumLightboxProps) => {
  const currentItem = items[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, setCurrentIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, setCurrentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl"
      >
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-gradient-to-b from-black/50 to-transparent">
          <div className="text-white">
            <h3 className="text-xl font-bold">{currentItem.title}</h3>
            {currentItem.treatmentName && <p className="text-white/60 text-sm">{currentItem.treatmentName}</p>}
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md z-50 hidden md:block"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md z-50 hidden md:block"
        >
          <ChevronRight size={32} />
        </button>

        {/* Main Media */}
        <div className="relative w-full max-w-5xl max-h-[70vh] flex-1 flex items-center justify-center p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {currentItem.type === "image" ? (
                <div className="relative w-full h-full max-h-[70vh]">
                  {/* Using standard img for lightbox to avoid Next/Image layout complexities in absolute centering */}
                  <img 
                    src={currentItem.url} 
                    alt={currentItem.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg mx-auto shadow-2xl"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-video max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
                   {/* In a real scenario, this would be an iframe for youtube/vimeo. Using placeholder for now */}
                   <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900">
                     <Play size={64} className="text-white/50 mb-4" />
                     <p className="text-white/50 text-lg">Video Player Placeholder</p>
                     <p className="text-white/30 text-sm">{currentItem.videoUrl}</p>
                   </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Caption */}
        {currentItem.description && (
          <div className="text-white/80 max-w-3xl text-center px-4 mb-4 text-sm md:text-base">
            {currentItem.description}
          </div>
        )}

        {/* Thumbnail Strip */}
        <div className="w-full bg-black/50 backdrop-blur-md p-4 overflow-x-auto border-t border-white/10">
          <div className="flex items-center gap-3 w-max mx-auto px-4">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 h-16 md:w-24 md:h-20 rounded-lg overflow-hidden shrink-0 transition-all ${
                  idx === currentIndex ? "ring-2 ring-primary scale-110 opacity-100 z-10" : "opacity-50 hover:opacity-100"
                }`}
              >
                <img src={item.url} alt={item.title} className="object-cover w-full h-full" />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Play size={16} className="text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  );
};
