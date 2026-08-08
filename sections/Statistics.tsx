"use client";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Users, Award, Stethoscope, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { end: 5000, suffix: "+", label: "Happy Patients", icon: Users },
  { end: 15, suffix: "+", label: "Years Experience", icon: Award },
  { end: 10000, suffix: "+", label: "Treatments Done", icon: CheckCircle2 },
  { end: 4.9, suffix: "★", label: "Patient Rating", icon: Stethoscope },
];

export const Statistics = () => {
  return (
    <section className="bg-white border-b border-border shadow-sm relative z-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`w-full py-6 px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 hover:bg-background-light transition-colors group ${
                index < 2 ? "border-b-0 md:border-b-0" : ""
              }`}
            >
              <div className="text-primary group-hover:scale-110 transition-transform">
                <stat.icon size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <div className="text-[10px] md:text-xs font-bold text-text/50 uppercase tracking-widest mb-0.5">
                  {stat.label}
                </div>
                <div className="text-lg md:text-xl font-extrabold text-text">
                  <AnimatedCounter 
                    end={stat.end} 
                    suffix={stat.suffix} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
