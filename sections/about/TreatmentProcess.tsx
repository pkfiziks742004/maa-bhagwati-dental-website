"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { MessageSquare, Search, ClipboardList, Activity, HeartHandshake, ArrowRight } from "lucide-react";

const PROCESS_STEPS = [
  { title: "Consultation", icon: MessageSquare, description: "Discuss your dental concerns and goals." },
  { title: "Diagnosis", icon: Search, description: "Advanced imaging and thorough examination." },
  { title: "Treatment Planning", icon: ClipboardList, description: "Personalized roadmap for your perfect smile." },
  { title: "Procedure", icon: Activity, description: "Painless, high-quality clinical execution." },
  { title: "Follow-up Care", icon: HeartHandshake, description: "Ensuring lasting results and optimal health." },
];

export const TreatmentProcess = () => {
  return (
    <section className="py-24 bg-background-light relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Treatment Process"
          subtitle="How We Work"
          className="mb-20"
        />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[40px] left-10 right-10 h-0.5 bg-border -z-10" />
          
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center relative group w-full lg:w-48"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-3 -right-2 w-8 h-8 rounded-full bg-secondary text-white font-bold flex items-center justify-center text-sm z-20 shadow-sm border-2 border-white">
                {index + 1}
              </div>

              {/* Icon Container */}
              <div className="w-20 h-20 rounded-full bg-white border border-border shadow-soft flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:border-primary group-hover:text-white group-hover:bg-primary transition-all duration-300 z-10">
                <step.icon size={32} />
              </div>
              
              <h4 className="font-bold text-text text-lg mb-2">{step.title}</h4>
              <p className="text-text/60 text-sm leading-relaxed max-w-[200px]">
                {step.description}
              </p>

              {/* Mobile Arrow down */}
              {index < PROCESS_STEPS.length - 1 && (
                 <div className="lg:hidden mt-6 text-border">
                   <ArrowRight size={24} className="rotate-90" />
                 </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
