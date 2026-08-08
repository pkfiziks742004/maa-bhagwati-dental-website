"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Microscope, IndianRupee, Smile, Armchair, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

const PROMISES = [
  { label: "Personalized Care", icon: HeartHandshake },
  { label: "Safe Treatment", icon: ShieldCheck },
  { label: "Latest Technology", icon: Microscope },
  { label: "Transparent Pricing", icon: IndianRupee },
  { label: "Friendly Staff", icon: Smile },
  { label: "Comfortable Environment", icon: Armchair },
  { label: "After Treatment Support", icon: Headphones },
];

export const PatientCarePromise = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-background-light border border-border rounded-[40px] p-10 md:p-16 shadow-premium relative overflow-hidden">
          {/* Decorative SVG Blob */}
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none -translate-y-1/2 translate-x-1/4">
            <HeartHandshake size={400} />
          </div>

          <div className="relative z-10 text-center mb-12">
             <SectionTitle
                title="Our Promise to You"
                subtitle="Patient Care Guarantee"
                className="mb-6"
             />
             <p className="text-text/70 text-lg max-w-2xl mx-auto">
               Your comfort and well-being are at the core of everything we do. We pledge to deliver a dental experience that feels safe, transparent, and genuinely caring.
             </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {PROMISES.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-full border border-border bg-white shadow-sm hover:shadow-md hover:border-primary transition-all",
                  index === 0 && "border-primary bg-primary/5 shadow-none" // Highlight the first one slightly
                )}
              >
                <promise.icon size={20} className="text-primary" />
                <span className="font-semibold text-text text-sm md:text-base">{promise.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
