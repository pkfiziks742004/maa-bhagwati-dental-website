"use client";

import { motion } from "framer-motion";
import { ServiceData } from "@/constants/services";
import { SectionTitle } from "@/components/SectionTitle";
import { CheckCircle2, AlertCircle } from "lucide-react";

export const TreatmentOverview = ({ service }: { service: ServiceData }) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: What is it? & Symptoms */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl font-bold text-text mb-6">What is {service.title}?</h2>
            <p className="text-lg text-text/70 leading-relaxed mb-12">
              {service.overview}
            </p>

            <h3 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
              <AlertCircle className="text-secondary" />
              Signs & Symptoms
            </h3>
            <div className="bg-background-light rounded-2xl p-6 border border-border">
              <ul className="space-y-4">
                {service.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Who needs it & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-text mb-6">Who Needs This?</h3>
              <ul className="space-y-4">
                {service.whoNeedsIt.map((person, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text/80">
                    <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
                    <span>{person}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-[32px] border border-primary/20">
               <h3 className="text-2xl font-bold text-text mb-6 text-primary">Core Benefits</h3>
               <div className="grid sm:grid-cols-2 gap-4">
                 {service.benefits.map((benefit, idx) => (
                   <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-border flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-primary" />
                     <span className="font-semibold text-sm text-text">{benefit}</span>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
