"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    // Prevent default to avoid scrolling on touch devices while dragging
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  };

  useEffect(() => {
    const onPointerUp = () => setIsDragging(false);
    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        e.preventDefault();
        handleMove(e.clientX);
      }
    };

    if (isDragging) {
      window.addEventListener("pointermove", onPointerMove, { passive: false });
      window.addEventListener("pointerup", onPointerUp);
    }
    
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize select-none bg-gray-100 touch-none shadow-sm group"
      onPointerDown={onPointerDown}
      role="slider"
      aria-valuenow={sliderPosition}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Before and after comparison slider"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setSliderPosition(p => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setSliderPosition(p => Math.min(100, p + 5));
      }}
    >
      {/* After Image (Background) */}
      <Image 
        src={afterImage} 
        alt={afterAlt} 
        width={800}
        height={600}
        className="w-full h-full object-cover pointer-events-none" 
      />
      
      {/* After Label */}
      <div className="absolute top-4 right-4 z-10 bg-[#0a7a7a] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
        After
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 z-20"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image 
          src={beforeImage} 
          alt={beforeAlt} 
          width={800}
          height={600}
          className="w-full h-full object-cover pointer-events-none" 
        />
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>
      
      {/* Before Label */}
      <div 
        className="absolute top-4 left-4 z-30 bg-gray-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider transition-opacity duration-200"
        style={{ opacity: sliderPosition > 15 ? 1 : 0 }}
      >
        Before
      </div>

      {/* Divider & Handle */}
      <div 
        className="absolute top-0 bottom-0 z-40 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] transform -translate-x-1/2 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div 
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-transform duration-200 text-[#0a7a7a]",
            isDragging ? "scale-95" : "scale-100 group-hover:scale-110"
          )}
        >
          <ArrowLeftRight size={20} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}
