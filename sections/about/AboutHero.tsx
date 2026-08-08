"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Phone } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background-light pt-28 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50 z-10" />
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[3px] z-[5]" />
        <Image
          src="/facilities/Cosmodent Studio.png"
          alt="Maa Bhagwati Dental Clinic"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-text/60 font-medium mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-primary">About Us</span>
          </motion.nav>

          {/* Headlines */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="fluid-h1 font-bold text-text leading-tight mb-6"
          >
            Creating Healthy Smiles with <span className="text-primary">Advanced</span> Dental & Cosmetic Care
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text/80 mb-10 leading-relaxed max-w-2xl"
          >
            Delivering advanced dental care, cosmetic dentistry, laser treatments, and personalized patient care with modern technology.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pb-8"
          >
            <PrimaryButton size="lg" icon={Calendar}>
              Book Appointment
            </PrimaryButton>
            <SecondaryButton outline size="lg" icon={Phone}>
              Contact Us
            </SecondaryButton>
          </motion.div>
        </div>
      </div>

      {/* Decorative Floating Element */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-10"
      />
    </section>
  );
};
