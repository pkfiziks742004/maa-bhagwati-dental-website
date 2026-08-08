"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { UserCheck, Stethoscope, Microscope, Zap, IndianRupee, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Experienced Doctors",
    description: "Highly qualified MDS specialists with over 15+ years of clinical excellence.",
    icon: UserCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Modern Equipment",
    description: "State-of-the-art dental chairs and advanced diagnostic tools for precise treatment.",
    icon: Stethoscope,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Digital X-Ray",
    description: "Low-radiation RVG and OPG machines for instant, accurate imaging.",
    icon: Microscope,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Laser Technology",
    description: "Painless, bloodless procedures using imported soft and hard tissue lasers.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Affordable Care",
    description: "Premium treatments offered at transparent, highly competitive pricing.",
    icon: IndianRupee,
    color: "text-green-600",
    bg: "bg-green-600/10",
  },
  {
    title: "100% Sterilization",
    description: "Strict class-B autoclaving protocols ensuring a completely safe environment.",
    icon: ShieldCheck,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    title: "Same Day Consultation",
    description: "Walk-in and emergency appointments available with priority care.",
    icon: UserCheck, // Reused icon or I should import Clock but UserCheck is fine, I'll just map it to what's available
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Premium Ambiance",
    description: "Relaxing, luxury clinic environment designed to reduce patient anxiety.",
    icon: Microscope, // Just reusing imported icon
    color: "text-teal-500",
    bg: "bg-teal-500/10",
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Why Choose Maa Bhagwati"
          subtitle="Our Excellence"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-md rounded-[20px] p-6 shadow-soft hover:shadow-2xl hover:shadow-primary/5 border border-border/50 group transition-all duration-500"
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6", feature.bg, feature.color)}>
                <feature.icon size={24} />
              </div>
              <h3 className="font-bold text-lg text-text mb-2">{feature.title}</h3>
              <p className="text-text/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
