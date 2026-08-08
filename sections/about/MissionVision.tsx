"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, HeartPulse, Star, Lightbulb, Handshake } from "lucide-react";

const VALUES = [
  { label: "Trust", icon: Handshake },
  { label: "Care", icon: HeartPulse },
  { label: "Quality", icon: Star },
  { label: "Innovation", icon: Lightbulb },
  { label: "Integrity", icon: ShieldCheck },
];

export const MissionVision = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Purpose & Direction"
          subtitle="Mission & Vision"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-transparent p-10 rounded-[32px] border border-primary/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Target size={120} />
            </div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-soft mb-8 relative z-10">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-bold text-text mb-4 relative z-10">Our Mission</h3>
            <p className="text-text/70 text-lg leading-relaxed relative z-10 max-w-sm">
              Deliver ethical, affordable, modern, and completely painless dental treatment to every patient who walks through our doors.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-bl from-secondary/10 to-transparent p-10 rounded-[32px] border border-secondary/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Eye size={120} />
            </div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-soft mb-8 relative z-10">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-bold text-text mb-4 relative z-10">Our Vision</h3>
            <p className="text-text/70 text-lg leading-relaxed relative z-10 max-w-sm">
              To become one of the most trusted, leading multi-speciality dental and cosmetic clinics in the region, setting global standards in oral care.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h4 className="text-xl font-bold text-text mb-8">Our Core Values</h4>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {VALUES.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-[20px] shadow-sm border border-border hover:border-primary hover:shadow-soft transition-all"
              >
                <value.icon size={24} className="text-primary" />
                <span className="font-bold text-text">{value.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
