"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CLINIC_IMAGES = [
  "/banner/baner 1.png",
  "/banner/baner 2.png",
  "/banner/baner 3.png"
];

export const AboutClinic = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prev) => (prev + 1) % CLINIC_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);
  return (
    <section id="about" className="relative bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-video lg:aspect-[16/10] rounded-[32px] overflow-hidden shadow-premium">
              {CLINIC_IMAGES.map((img, index) => {
                const isActive = currentImageIndex === index;
                const isPrev = prevImageIndex === index;
                
                return (
                  <motion.div
                    key={img}
                    initial={false}
                    animate={{ 
                      opacity: isActive ? 1 : (isPrev ? 1 : 0),
                      scale: isActive ? 1 : 1.05
                    }}
                    style={{
                      zIndex: isActive ? 10 : (isPrev ? 5 : 0)
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={img}
                      alt={`Maa Bhagwati Clinic Interior ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority={true}
                    />
                  </motion.div>
                );
              })}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
                <p className="text-white font-bold text-2xl mb-2">Premium Healthcare</p>
                <p className="text-white/80">World-class facilities in New Delhi.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionTitle 
              title="About Our Clinic" 
              subtitle="Welcome to Maa Bhagwati" 
              align="left"
              className="mb-6"
            />
            
            <p className="text-text/70 text-lg leading-relaxed mb-6">
              At Maa Bhagwati Dental Care, Laser & Cosmodent, we believe that luxury healthcare should be accessible. Our state-of-the-art facility combines modern medical science with premium comfort.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Advanced European Technology",
                "Strict Class-B Sterilization Protocols",
                "Relaxing, Anxiety-Free Environment",
                "Comprehensive Care Under One Roof"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-text font-medium">
                  <CheckCircle2 size={24} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Link href="/about">
              <PrimaryButton icon={ArrowRight}>Read Our Story</PrimaryButton>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
