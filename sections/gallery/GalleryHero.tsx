"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, Camera } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

export const GalleryHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background-light">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50 z-10" />
        <div className="absolute inset-0 bg-gallery-reception bg-cover bg-center opacity-10 z-0 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-text/60 font-medium mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-primary">Gallery</span>
          </motion.nav>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="fluid-h1 font-bold text-text leading-tight mb-6 tracking-tight"
          >
            Explore Our <span className="text-primary block md:inline">Clinic & Results</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text/80 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Discover our state-of-the-art facility, advanced technology, expert medical team, and life-changing smile transformations.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-4 justify-center"
          >
             <Link href="/appointment/" className="w-full sm:w-auto">
               <PrimaryButton size="lg" icon={Calendar} className="w-full">
                  Book Appointment
               </PrimaryButton>
             </Link>
             <Link href="#gallery-grid" className="w-full sm:w-auto">
               <SecondaryButton outline size="lg" icon={Camera} className="w-full">
                  View Tour
               </SecondaryButton>
             </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
