"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ServiceData } from "@/constants/services";

export const TreatmentHero = ({ service }: { service: ServiceData }) => {
  return (
    <section className="relative pt-28 pb-20 bg-background-light overflow-hidden border-b border-border/50">
       <div className="absolute inset-0 opacity-5 bg-grid-pattern bg-center pointer-events-none" />
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
         <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-sm text-text/60 font-medium mb-6"
            >
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-primary">{service.title}</span>
            </motion.nav>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6"
            >
              {service.category}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="fluid-h1 font-bold text-text mb-6 leading-tight"
            >
              {service.title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-text/70 mb-10 max-w-2xl mx-auto"
            >
              {service.shortDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <PrimaryButton size="lg" icon={Calendar}>
                Book Consultation
              </PrimaryButton>
            </motion.div>
         </div>
       </div>
    </section>
  );
};
