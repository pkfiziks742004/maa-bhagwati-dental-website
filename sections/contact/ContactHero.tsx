"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, Phone, MessageCircle } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { BookAppointmentButton } from "@/components/BookAppointmentButton";
import { CONTACT_DETAILS } from "@/constants/contact";

export const ContactHero = () => {
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
            <span className="text-primary">Contact Us</span>
          </motion.nav>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="fluid-h1 font-bold text-text leading-tight mb-6 tracking-tight"
          >
            We&apos;re Here to <span className="text-primary block md:inline">Help You Smile</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text/80 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Get in touch with our experienced dental and cosmetic specialists. Book an appointment or visit our clinic today.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-4 justify-center"
          >
             <BookAppointmentButton size="lg" icon={Calendar} className="w-full sm:w-auto">
                Book Appointment
             </BookAppointmentButton>
             <a href={`tel:${CONTACT_DETAILS.primaryPhone}`}>
               <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-border text-text font-bold hover:border-primary hover:text-primary transition-colors shadow-sm">
                  <Phone size={20} /> Call Now
               </button>
             </a>
             <a href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">
               <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#20b858] transition-colors shadow-sm">
                  <MessageCircle size={20} /> WhatsApp
               </button>
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
