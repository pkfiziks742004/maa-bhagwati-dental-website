"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { UserCheck, Stethoscope, Microscope, Zap, IndianRupee, ShieldCheck, HeartPulse, Clock, Sparkles } from "lucide-react";

const REASONS = [
  { title: "Experienced Doctors", icon: UserCheck, color: "text-blue-500", bg: "bg-blue-500/10" },
  { title: "Latest Technology", icon: Stethoscope, color: "text-primary", bg: "bg-primary/10" },
  { title: "Digital X-Ray", icon: Microscope, color: "text-purple-500", bg: "bg-purple-500/10" },
  { title: "Laser Dentistry", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10" },
  { title: "Affordable Pricing", icon: IndianRupee, color: "text-green-600", bg: "bg-green-600/10" },
  { title: "100% Sterilization", icon: ShieldCheck, color: "text-rose-500", bg: "bg-rose-500/10" },
  { title: "Patient Satisfaction", icon: HeartPulse, color: "text-pink-500", bg: "bg-pink-500/10" },
  { title: "Emergency Support", icon: Clock, color: "text-orange-500", bg: "bg-orange-500/10" },
  { title: "Comfortable Environment", icon: Sparkles, color: "text-cyan-500", bg: "bg-cyan-500/10" },
];

export const AboutWhyChooseUs = () => {
  return (
    <section className="py-24 bg-background-light relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <SectionTitle
          title="Why Choose Maa Bhagwati"
          subtitle="Our Advantages"
          className="mb-16"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 justify-center">
          {/* We use 5 columns on large screens for a masonry-like staggered look, or just 3 columns */}
          {REASONS.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[24px] p-6 shadow-sm border border-border group hover:shadow-premium hover:border-primary/30 transition-all flex flex-col items-center justify-center text-center"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${reason.bg} ${reason.color}`}>
                <reason.icon size={28} />
              </div>
              <h4 className="font-bold text-text text-sm md:text-base leading-tight">
                {reason.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
