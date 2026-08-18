"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const ServicesHero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 min-h-[420px] md:min-h-[500px] flex items-center">
      
      {/* Background Image with Soft Edge Fade (Desktop) / Subtle Overlay (Mobile) */}
      <div 
        className="absolute inset-0 md:left-auto md:right-0 w-full md:w-[65%] lg:w-[55%] h-full z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:hidden z-10 pointer-events-none" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" style={{ width: '40%' }} />
        <Image 
          src="/banner/baner 1.webp"
          alt="Dental Chair Setup" 
          fill
          className="object-cover object-[center_right] z-0"
          priority
        />
      </div>

      {/* Mobile Text Readability Overlay */}
      <div className="absolute inset-0 bg-white/20 md:bg-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center py-4 max-w-xl"
          >
            <div className="inline-block mb-4">
              <span className="text-[#17B8C8] font-bold text-sm tracking-widest uppercase">
                OUR SERVICES
              </span>
            </div>
            
            <h1 className="fluid-h1 font-extrabold text-[#1b365d] leading-[1.1] mb-6">
              Comprehensive Dental & Cosmetology Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-text/70 mb-8 leading-relaxed font-medium">
              Advanced technology, expert care, and personalized treatment for a healthier and more confident you.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
