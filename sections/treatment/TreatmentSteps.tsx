"use client";

import { motion } from "framer-motion";
import { ServiceData } from "@/constants/services";
import { SectionTitle } from "@/components/SectionTitle";

export const TreatmentSteps = ({ service }: { service: ServiceData }) => {
  return (
    <section className="py-24 bg-background-light relative border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Step-by-Step Procedure"
          subtitle="How It Works"
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 to-secondary/50 md:-translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {service.procedureSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[8px] md:left-1/2 w-9 h-9 bg-white border-4 border-primary rounded-full md:-translate-x-1/2 shadow-soft z-10 flex items-center justify-center text-primary font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-5/12" />

                  {/* Content Card */}
                  <div className="ml-16 md:ml-0 md:w-5/12">
                    <div className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm border border-border hover:border-primary/30 hover:shadow-premium transition-all">
                       <h3 className="text-xl font-bold text-text mb-3 text-primary">
                         {step.title}
                       </h3>
                       <p className="text-text/70 text-sm md:text-base leading-relaxed">
                         {step.description}
                       </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
