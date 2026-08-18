"use client";

import { useState, useEffect } from "react";
import { Calendar, PhoneCall, ShieldCheck, Zap } from "lucide-react";
import { BookAppointmentButton } from "@/components/BookAppointmentButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import Image from "next/image";

import { CONTACT_DETAILS } from "@/constants/contact";

const HERO_BACKGROUNDS = [
  "/banner/baner 1.webp",
  "/banner/baner 2.webp",
  "/banner/baner 3.webp"
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <section className="relative w-full flex items-center bg-white overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div 
        className="absolute inset-0 md:left-auto md:right-0 w-full md:w-[65%] lg:w-[55%] h-full z-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 50%, black 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 50%, black 100%)'
        }}
      >
        {HERO_BACKGROUNDS.map((bg, index) => {
          const isActive = currentImageIndex === index;
          // Avoid eager loading of non-first images
          const isLCP = index === 0;
          return (
            <div
              key={bg}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 10 : 0
              }}
            >
              <Image 
                src={bg}
                alt={`Maa Bhagwati Clinic ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-[center_30%]"
                priority={isLCP}
                fetchPriority={isLCP ? "high" : "auto"}
                loading={isLCP ? "eager" : "lazy"}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-white/60 backdrop-blur-[4px] md:bg-transparent md:backdrop-blur-none z-20 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-30 flex flex-col">
        <div className="max-w-2xl w-full">
          
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-6 md:mb-8 border border-primary/20 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(87,184,87,0.8)] flex-shrink-0" />
              <span className="truncate">Advanced Laser & Cosmodent Center</span>
            </div>
            
            {/* Headline */}
            <h1 className="fluid-h1 font-extrabold text-text mb-4 tracking-tight">
              Premium Dental & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Cosmetic Care.</span>
            </h1>
            
            {/* Description */}
            <p className="fluid-p text-text/70 mb-6 md:mb-8 max-w-xl pr-2 md:pr-4">
              Experience world-class, painless treatments with state-of-the-art laser technology and expert specialists led by Dr. Lipton Kaushik.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 md:mb-8 w-full sm:w-auto">
              <BookAppointmentButton className="w-full sm:w-auto min-w-[180px]" icon={Calendar}>
                Book Appointment
              </BookAppointmentButton>
              <SecondaryButton 
                outline 
                className="w-full sm:w-auto bg-white/50 backdrop-blur-sm" 
                icon={PhoneCall}
                onClick={() => window.location.href = `tel:${CONTACT_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
              >
                Call Now
              </SecondaryButton>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm font-semibold text-text/70">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur px-3 md:px-4 py-2 rounded-full border border-border/50 shadow-sm">
                <ShieldCheck size={16} className="text-primary flex-shrink-0" /> <span className="whitespace-nowrap">Same Day Consultation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur px-3 md:px-4 py-2 rounded-full border border-border/50 shadow-sm">
                <Zap size={16} className="text-secondary flex-shrink-0" /> <span className="whitespace-nowrap">Laser Dentistry</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
