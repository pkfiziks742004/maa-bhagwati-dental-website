"use client";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Users, Award, Stethoscope, CheckCircle2, Heart } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { end: 5000, suffix: "+", label: "Happy Patients", icon: Users },
  { end: 15, suffix: "+", label: "Years Experience", icon: Award },
  { end: 7, suffix: "+", label: "Expert Doctors", icon: Stethoscope },
  { end: 10000, suffix: "+", label: "Treatments Done", icon: CheckCircle2 },
  { end: 98, suffix: "%", label: "Patient Satisfaction", icon: Heart },
];

export const AboutStatistics = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-primary text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-white blur-[150px] rounded-full mix-blend-overlay" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-secondary blur-[150px] rounded-full mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center flex-1 min-w-[150px] max-w-[200px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 shadow-inner border border-white/20 hover:bg-white/20 transition-colors">
                <stat.icon size={32} className="text-white" />
              </div>
              <AnimatedCounter 
                end={stat.end} 
                suffix={stat.suffix} 
                label={stat.label} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
