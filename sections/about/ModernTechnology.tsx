"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { ScanFace, Activity, ShieldPlus, Lightbulb } from "lucide-react";

const TECH = [
  {
    title: "Digital X-Ray (RVG & OPG)",
    description: "Our clinic is equipped with advanced low-radiation digital imaging for immediate and highly accurate diagnosis of dental structures.",
    icon: ScanFace,
  },
  {
    title: "Advanced Laser Dentistry",
    description: "We utilize soft and hard tissue lasers for painless, bloodless surgeries, gum contouring, and faster healing processes.",
    icon: Lightbulb,
  },
  {
    title: "Rotary Endodontics",
    description: "Modern root canal equipment ensuring that RCT procedures are completed faster, with absolute precision and minimal discomfort.",
    icon: Activity,
  },
  {
    title: "Class-B Autoclave",
    description: "100% infection control is guaranteed using our advanced sterilization units that meticulously clean every instrument before use.",
    icon: ShieldPlus,
  },
];

export const ModernTechnology = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Driven By Technology"
          subtitle="Modern Equipment"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {TECH.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 p-8 rounded-[32px] bg-background-light border border-border group hover:border-primary/50 transition-colors shadow-sm hover:shadow-premium"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center text-primary shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-text mb-3">{item.title}</h3>
                <p className="text-text/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
