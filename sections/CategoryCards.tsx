"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Calendar, Users, Award, Monitor, Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const CategoryCards = () => {
  return (
    <section id="cares" className="relative z-30 py-16 lg:py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[1px] w-12 bg-primary/30" />
            <span className="text-primary font-bold tracking-widest text-xs uppercase flex items-center gap-2">
              <Sparkles size={14} /> One Clinic, Two Specialized Cares
            </span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
          <h2 className="fluid-h2 font-extrabold text-text mb-4">
            Choose Your Care
          </h2>
          <p className="text-text/70 text-base md:text-lg font-medium">
            Advanced technology, expert care, and personalized treatment for a healthier and more confident you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Dental Care */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col bg-white rounded-[24px] overflow-hidden border border-border/50 shadow-premium transition-all hover:shadow-[0_20px_50px_-15px_rgba(10,122,122,0.15)] hover:-translate-y-1"
          >
            {/* Most Popular Ribbon */}
            <div 
              className="absolute top-0 right-6 md:right-8 bg-[#57B857] text-white text-[10px] md:text-[11px] font-bold uppercase tracking-wider pt-2 pb-4 px-3 shadow-md z-20 flex flex-col items-center text-center leading-tight"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), 50% 100%, 0 calc(100% - 12px))' }}
            >
              <Star size={14} className="mb-1 fill-white text-white" />
              Most<br/>Popular
            </div>

            {/* Background Image with Fade */}
            <div className="absolute top-0 right-0 w-3/4 h-[85%] z-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
              <img 
                src="/about/Dental Care.png" 
                alt="Dental Clinic" 
                className="w-full h-full object-cover object-[center_right] opacity-90"
              />
            </div>

            {/* Top Content */}
            <div className="relative z-10 p-5 md:p-6 pb-3 flex-1">
              <div className="w-12 h-12 bg-[#57B857] rounded-full flex items-center justify-center mb-3 shadow-md text-white">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 4C4 4 3 6.5 3 9c0 1.5 1 2.5 2 3 .5.5 1 1.5 1 2.5v3c0 1 1 2 2.5 2S11 18.5 11 17v-1c0-.5.5-1 1-1h0c.5 0 1 .5 1 1v1c0 1.5 1 2.5 2.5 2.5S18 18.5 18 17v-3c0-1 .5-2 1-2.5 1-.5 2-1.5 2-3 0-2.5-1-5-4-5-1.5 0-2.5 1-3 2h-2C10.5 5 9.5 4 7 4z"/>
                  <path d="M7 8c1-1 2-1 3-1" />
                  <path d="M17 8c-1-1-2-1-3-1" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#57B857] mb-1 tracking-tight">
                Dental Care
              </h3>
              <p className="text-text/70 font-medium text-xs md:text-sm mb-3 max-w-[250px]">
                Advanced Dental Treatments <br/> for a Perfect Smile
              </p>
              
              <ul className="space-y-1.5 mb-1">
                {[
                  "Root Canal Treatment", 
                  "Dental Implants", 
                  "Teeth Cleaning", 
                  "Zirconia Crown", 
                  "Digital X-Ray"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-text/90 font-medium text-xs md:text-sm">
                    <CheckCircle2 size={14} className="text-[#57B857] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Info Bar */}
            <div className="relative z-10 px-5 md:px-6 pb-4">
              <div className="bg-white rounded-xl p-3 flex flex-wrap gap-2 md:gap-3 items-center justify-between shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)]">
                {/* 1200+ Happy Patients */}
                <div className="flex items-center gap-3">
                  <div className="text-[#57B857] flex-shrink-0">
                    <svg width="28" height="28" viewBox="0 0 24 24">
                      <g fill="currentColor">
                        <circle cx="12" cy="7" r="3.5" />
                        <path d="M12 12.5c-3.5 0-6.5 1.8-6.5 4.5v1.5h13v-1.5c0-2.7-3-4.5-6.5-4.5z" />
                        <circle cx="5" cy="9" r="2.5" />
                        <path d="M5 13c-.5 0-1 .1-1.5.2C2.1 13.9 1 15.3 1 17v1h3.5v-1c0-1.8 1.2-3.3 3-3.8-.7-.4-1.5-.2-2.5-.2z" />
                        <circle cx="19" cy="9" r="2.5" />
                        <path d="M19 13c-1 0-1.8-.2-2.5.2 1.8.5 3 2 3 3.8v1H23v-1c0-1.7-1.1-3.1-2.5-3.8-.5-.1-1-.2-1.5-.2z" />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div className="font-extrabold text-[#57B857] text-lg leading-tight">1200+</div>
                    <div className="text-xs text-[#1b365d] font-semibold">Happy Patients</div>
                  </div>
                </div>
                <div className="w-[1px] h-8 bg-border/40 hidden sm:block" />
                
                {/* 15+ Years Experience */}
                <div className="flex items-center gap-3">
                  <div className="text-[#57B857] flex-shrink-0">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 17L5.5 22l3.5-1.5 3.5 1.5-1.5-5" />
                      <path d="M17 17l1.5 5-3.5-1.5-3.5 1.5 1.5-5" />
                      <path d="M12 2l2.4 1.6L17.2 3l1.2 2.8 2.8 1.2-1.6 2.4L21 12l-1.4 2.6L21.2 17.4l-2.8 1.2L17.2 21l-2.8-1.6L12 21l-2.4-1.6L6.8 21l-1.2-2.8L2.8 17.4l1.6-2.4L3 12l1.4-2.6L2.8 6.6l2.8-1.2L6.8 3 9.6 4.6 12 2z" />
                      <circle cx="12" cy="11.5" r="3.5" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-extrabold text-[#57B857] text-lg leading-tight">15+</div>
                    <div className="text-xs text-[#1b365d] font-semibold">Years Experience</div>
                  </div>
                </div>
                <div className="w-[1px] h-8 bg-border/40 hidden sm:block" />
                
                {/* Modern Technology */}
                <div className="flex items-center gap-3">
                  <div className="text-[#57B857] flex-shrink-0">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8" />
                      <path d="M12 17v4" />
                      <path d="M12 13l-1.5-1.5a1.5 1.5 0 0 1 2.12-2.12L12 9.5l.38-.38a1.5 1.5 0 0 1 2.12 2.12L12 13z" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-extrabold text-[#57B857] text-lg leading-tight">Modern</div>
                    <div className="text-xs text-[#1b365d] font-semibold">Technology</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="relative z-10 px-5 md:px-6 pb-5 flex flex-col sm:flex-row gap-2.5">
              <Link href="/services" className="flex-1 bg-[#57B857] text-white hover:bg-[#469e46] py-2.5 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors text-xs md:text-sm">
                Explore Dental Services <ArrowRight size={14} />
              </Link>
              <Link href="#contact" className="flex-1 bg-white text-[#57B857] border-2 border-[#57B857] hover:bg-[#57B857]/5 py-2.5 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors text-xs md:text-sm">
                <Calendar size={14} /> Book Appointment
              </Link>
            </div>
          </motion.div>


          {/* Card 2: Cosmodent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group relative flex flex-col bg-white rounded-[24px] overflow-hidden border border-border/50 shadow-premium transition-all hover:shadow-[0_20px_50px_-15px_rgba(27,54,93,0.15)] hover:-translate-y-1"
          >
            {/* Background Image with Fade */}
            <div className="absolute top-0 right-0 w-3/4 h-[85%] z-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
              <img 
                src="/about/Cosmodent.png" 
                alt="Cosmodent Treatment" 
                className="w-full h-full object-cover object-[center_right] opacity-90"
              />
            </div>

            {/* Top Content */}
            <div className="relative z-10 p-5 md:p-6 pb-3 flex-1">
              <div className="w-12 h-12 bg-[#17B8C8] rounded-full flex items-center justify-center mb-3 shadow-md text-white">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 16.5C5 15 4.5 13 4.5 11c0-4 3.5-7.5 7.5-7.5S19.5 7 19.5 11c0 2-.5 4-1.5 5.5" />
                  <path d="M6 16.5c1.5.5 3.5 1 6 1s4.5-.5 6-1" />
                  <path d="M8 10c0 2 1.5 4.5 4 4.5s4-2.5 4-4.5" />
                  <path d="M9.5 7.5C11 9 13 9 14.5 7.5" />
                  <circle cx="10.5" cy="11.5" r="1.5" fill="currentColor" stroke="none" />
                  <circle cx="13.5" cy="11.5" r="1.5" fill="currentColor" stroke="none" />
                  <path d="M17 17l2 2m0-2l-2 2m1-3v4" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#17B8C8] mb-1 tracking-tight">
                Cosmodent
              </h3>
              <p className="text-text/70 font-medium text-xs md:text-sm mb-3 max-w-[250px]">
                Advanced Cosmetology Solutions <br/> for Skin, Hair & Laser
              </p>
              
              <ul className="space-y-1.5 mb-1">
                {[
                  "Hair Transplant", 
                  "HydraFacial", 
                  "PRP Therapy", 
                  "Laser Hair Removal", 
                  "Chemical Peel"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-text/90 font-medium text-xs md:text-sm">
                    <CheckCircle2 size={14} className="text-[#17B8C8] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Info Bar */}
            <div className="relative z-10 px-5 md:px-6 pb-4">
              <div className="bg-white rounded-xl p-3 flex flex-wrap gap-2 md:gap-3 items-center justify-between shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)]">
                {/* 800+ Happy Patients */}
                <div className="flex items-center gap-3">
                  <div className="text-[#17B8C8] flex-shrink-0">
                    <svg width="28" height="28" viewBox="0 0 24 24">
                      <g fill="currentColor">
                        <circle cx="12" cy="7" r="3.5" />
                        <path d="M12 12.5c-3.5 0-6.5 1.8-6.5 4.5v1.5h13v-1.5c0-2.7-3-4.5-6.5-4.5z" />
                        <circle cx="5" cy="9" r="2.5" />
                        <path d="M5 13c-.5 0-1 .1-1.5.2C2.1 13.9 1 15.3 1 17v1h3.5v-1c0-1.8 1.2-3.3 3-3.8-.7-.4-1.5-.2-2.5-.2z" />
                        <circle cx="19" cy="9" r="2.5" />
                        <path d="M19 13c-1 0-1.8-.2-2.5.2 1.8.5 3 2 3 3.8v1H23v-1c0-1.7-1.1-3.1-2.5-3.8-.5-.1-1-.2-1.5-.2z" />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div className="font-extrabold text-[#17B8C8] text-lg leading-tight">800+</div>
                    <div className="text-xs text-[#1b365d] font-semibold">Happy Patients</div>
                  </div>
                </div>
                <div className="w-[1px] h-8 bg-border/40 hidden sm:block" />
                
                {/* 8+ Years Experience */}
                <div className="flex items-center gap-3">
                  <div className="text-[#17B8C8] flex-shrink-0">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 17L5.5 22l3.5-1.5 3.5 1.5-1.5-5" />
                      <path d="M17 17l1.5 5-3.5-1.5-3.5 1.5 1.5-5" />
                      <path d="M12 2l2.4 1.6L17.2 3l1.2 2.8 2.8 1.2-1.6 2.4L21 12l-1.4 2.6L21.2 17.4l-2.8 1.2L17.2 21l-2.8-1.6L12 21l-2.4-1.6L6.8 21l-1.2-2.8L2.8 17.4l1.6-2.4L3 12l1.4-2.6L2.8 6.6l2.8-1.2L6.8 3 9.6 4.6 12 2z" />
                      <circle cx="12" cy="11.5" r="3.5" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-extrabold text-[#17B8C8] text-lg leading-tight">8+</div>
                    <div className="text-xs text-[#1b365d] font-semibold">Years Experience</div>
                  </div>
                </div>
                <div className="w-[1px] h-8 bg-border/40 hidden sm:block" />
                
                {/* Modern Technology */}
                <div className="flex items-center gap-3">
                  <div className="text-[#17B8C8] flex-shrink-0">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8" />
                      <path d="M12 17v4" />
                      <path d="M12 13l-1.5-1.5a1.5 1.5 0 0 1 2.12-2.12L12 9.5l.38-.38a1.5 1.5 0 0 1 2.12 2.12L12 13z" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-extrabold text-[#17B8C8] text-lg leading-tight">Advanced</div>
                    <div className="text-xs text-[#1b365d] font-semibold">Equipment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="relative z-10 px-5 md:px-6 pb-5 flex flex-col sm:flex-row gap-2.5">
              <Link href="/services" className="flex-1 bg-[#17B8C8] text-white hover:bg-[#139dae] py-2.5 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors text-xs md:text-sm">
                Explore Cosmodent Services <ArrowRight size={14} />
              </Link>
              <Link href="#contact" className="flex-1 bg-white text-[#17B8C8] border-2 border-[#17B8C8] hover:bg-[#17B8C8]/5 py-2.5 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors text-xs md:text-sm">
                <Calendar size={14} /> Book Appointment
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
