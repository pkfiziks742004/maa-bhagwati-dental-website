"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";
import { SecondaryButton } from "@/components/SecondaryButton";

export const AppointmentHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background-light">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50 z-10" />
        <div className="absolute inset-0 bg-gallery-reception bg-cover bg-center opacity-10 z-0 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-text/60 font-medium mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-primary">Book Appointment</span>
          </motion.nav>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="fluid-h1 font-bold text-text leading-tight mb-6"
          >
            Book Your <span className="text-primary">Appointment</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text/80 leading-relaxed mb-10"
          >
            Schedule your visit with our experienced specialists in just a few simple steps.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-4 justify-center"
          >
             <button className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-border text-text font-bold hover:border-primary hover:text-primary transition-colors shadow-sm">
                <Phone size={20} /> Call Now
             </button>
             <button className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#20b858] transition-colors shadow-sm">
                <MessageCircle size={20} /> WhatsApp
             </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
