"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";

const STORY_STEPS = [
  {
    year: "Foundation",
    title: "The Beginning",
    description: "Maa Bhagwati Dental Care was established with a clear vision: to provide ethical, high-quality, and affordable dental care to the community.",
  },
  {
    year: "Growth",
    title: "Expanding Horizons",
    description: "As our patient family grew, we expanded our facility, bringing in specialized experts to cover every aspect of modern dentistry.",
  },
  {
    year: "Innovation",
    title: "New Technologies",
    description: "We integrated cutting-edge digital X-rays, intraoral scanners, and advanced diagnostic tools to ensure absolute precision.",
  },
  {
    year: "Excellence",
    title: "Laser & Cosmetic Era",
    description: "We introduced painless laser dentistry and advanced Cosmodent treatments, becoming a regional leader in smile makeovers.",
  },
  {
    year: "Future Vision",
    title: "Continuing the Legacy",
    description: "Our ongoing commitment is to stay at the forefront of dental science, ensuring every patient leaves with a confident, healthy smile.",
  }
];

export const OurStory = () => {
  return (
    <section className="py-24 bg-background-light relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="The Journey of Maa Bhagwati"
          subtitle="Our Story"
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 md:-translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {STORY_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[16px] md:left-1/2 w-7 h-7 bg-white border-4 border-primary rounded-full md:-translate-x-1/2 shadow-[0_0_0_4px_rgba(87,184,87,0.2)] z-10" />

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-5/12" />

                  {/* Content Card */}
                  <div className="ml-16 md:ml-0 md:w-5/12">
                    <div className="bg-white p-6 md:p-8 rounded-[24px] shadow-premium border border-border group hover:border-primary/50 transition-colors relative">
                       {/* Connection Line Mobile */}
                       <div className="absolute left-[-32px] top-8 w-8 h-0.5 bg-primary/20 md:hidden" />
                       {/* Connection Line Desktop */}
                       <div className={`hidden md:block absolute top-8 w-12 h-0.5 bg-primary/20 ${isEven ? 'right-full' : 'left-full'}`} />
                       
                       <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-3">
                         {step.year}
                       </span>
                       <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
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
