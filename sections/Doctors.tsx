"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ArrowRight, Star, ShieldCheck, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Doctors = () => {
  return (
    <section id="doctors" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">

          {/* Content Side */}
          <div>
            <SectionTitle
              title="Meet Your Doctor"
              subtitle="Expert Care"
              align="left"
              className="mb-6"
            />

            <h3 className="text-3xl font-bold text-text mb-2">Dr. Lipton Kaushik</h3>
            <p className="text-primary font-bold mb-4">BDS (MIDA) - Chief Dental Surgeon</p>

            <p className="text-text/70 text-lg leading-relaxed mb-6">
              With over 15 years of clinical excellence, Dr. Lipton Kaushik specializes in advanced Laser Dentistry, Cosmodent procedures, and painless Root Canals. His philosophy blends European medical technology with compassionate human care.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-bold text-text text-sm">MIDA Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Award size={20} />
                </div>
                <span className="font-bold text-text text-sm">15+ Years Exp.</span>
              </div>
            </div>

            <Link href="/about-doctor">
              <PrimaryButton icon={ArrowRight}>
                View Full Profile
              </PrimaryButton>
            </Link>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative w-full max-w-sm lg:max-w-[400px] mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[32px] transform rotate-3" />
            <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[32px] overflow-hidden shadow-premium bg-background-light">
              <Image
                src="/about/doctor.png"
                alt="Dr. Lipton Kaushik"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Star className="text-secondary fill-secondary" size={20} />
                </div>
                <div>
                  <p className="font-bold text-text text-sm">Trusted by 10,000+</p>
                  <p className="text-text/60 text-xs">Happy Patients</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
