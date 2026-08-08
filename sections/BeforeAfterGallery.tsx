"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronsLeftRight, Stethoscope, Sparkles, Zap } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { BookAppointmentButton } from "@/components/BookAppointmentButton";
import Image from "next/image";
import Link from "next/link";

const CASES = [
  { 
    title: "Dental Implant", 
    desc: "Pain-Free, Natural-Looking Teeth", 
    before: "/about/Dental_Implant_Before.png", 
    after: "/about/Dental_Implant_After.png",
    icon: Stethoscope
  },
  { 
    title: "Smile Designing", 
    desc: "Perfect Smile, Custom Crafted For You", 
    before: "/about/Smile_Designing_Before.png", 
    after: "/about/Smile_Designing_After.png",
    icon: Sparkles
  },
  { 
    title: "Laser Dentistry", 
    desc: "Advanced, Bloodless & Faster Healing", 
    before: "/about/Laser_Dentistry_Before.png", 
    after: "/about/Laser_Dentistry_After.png",
    icon: Zap
  },
];

const BeforeAfterCard = ({ item, index }: { item: typeof CASES[0], index: number }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white rounded-xl overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-500 border border-black/5 flex flex-col group/card"
    >
      {/* Interactive Slider Area */}
      <div className="relative aspect-[4/5] w-full select-none group">
        
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image src={item.after} alt={`${item.title} After`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center pointer-events-none" />
          <div className="absolute top-5 right-5 bg-[#17B8C8]/90 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-4 py-1.5 rounded-full z-10 shadow-lg uppercase tracking-wider">
            AFTER
          </div>
        </div>

        {/* Before Image (Foreground, Clipped) */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image src={item.before} alt={`${item.title} Before`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center pointer-events-none" />
          <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-4 py-1.5 rounded-full z-10 shadow-lg uppercase tracking-wider">
            BEFORE
          </div>
        </div>

        {/* Slider Line & Handle */}
        <div 
          className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] text-[#17B8C8] transition-transform group-hover:scale-110">
            <ChevronsLeftRight size={20} strokeWidth={2.5} />
          </div>
        </div>

        {/* Invisible Range Input for Dragging */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition} 
          onChange={(e) => setSliderPosition(Number(e.target.value))} 
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" 
          aria-label="Before and After Slider"
        />
      </div>

      {/* Info Area */}
      <div className="p-6 pt-0 flex flex-col items-center text-center bg-white relative z-40 pointer-events-none">
        <div className="w-14 h-14 bg-[#ecf9f9] text-[#17B8C8] rounded-xl flex items-center justify-center mb-4 transform -translate-y-1/2 shadow-lg border-2 border-white pointer-events-auto">
          <item.icon size={26} strokeWidth={2} />
        </div>
        <div className="-mt-3">
          <h4 className="font-extrabold text-xl text-[#1b365d] leading-tight mb-2">{item.title}</h4>
          <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-[0.15em]">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const BeforeAfterGallery = () => {
  return (
    <section className="py-24 bg-background-light">
      <div className="container mx-auto px-4 md:px-6 text-center">
        
        {/* Headers matching the design */}
        <div className="mb-14">
          <h3 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">
            REAL TRANSFORMATIONS
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-4 tracking-tight">
            Before & After
          </h2>
          <p className="text-text/60 font-medium text-lg">
            Real Results. Real People. Real Confidence.
          </p>
        </div>
        
        {/* Grid of Sliders */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {CASES.map((item, index) => (
            <BeforeAfterCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Centered CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <BookAppointmentButton size="lg" icon={Calendar} className="min-w-[250px] shadow-primary/30 shadow-lg">
            Book an Appointment
          </BookAppointmentButton>
        </motion.div>

      </div>
    </section>
  );
};
