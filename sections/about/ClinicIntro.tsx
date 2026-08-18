"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const POINTS = [
  "Modern Dental Care",
  "Experienced Specialists",
  "Comfortable Environment",
  "Patient-Centered Care",
  "Advanced Technology",
  "Affordable Treatment",
  "Hygiene Standards"
];

export const ClinicIntro = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Masonry Images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="bg-background-light rounded-[24px] overflow-hidden aspect-[4/5] relative border border-border shadow-soft">
                <Image src="/facilities/Reception Area Image.png" alt="Reception Area" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="bg-background-light rounded-[24px] overflow-hidden aspect-square relative border border-border shadow-soft">
                <Image src="/facilities/Waiting Lounge Image.png" alt="Waiting Lounge" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 pt-8"
            >
              <div className="bg-background-light rounded-[24px] overflow-hidden aspect-square relative border border-border shadow-soft">
                <Image src="/facilities/Treatment Room Image.png" alt="Treatment Room" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="bg-background-light rounded-[24px] overflow-hidden aspect-[4/5] relative border border-border shadow-soft">
                <Image src="/facilities/Advanced OPG Room.png" alt="Digital X-Ray Room" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </motion.div>
          </div>

          {/* Right: Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              title="A Legacy of Excellence in Dental Care" 
              subtitle="Welcome to Maa Bhagwati" 
              align="left" 
              className="mb-8"
            />
            
            <p className="text-text/70 text-lg leading-relaxed mb-8">
              At Maa Bhagwati Dental Care, we believe that a healthy smile is the foundation of confidence and well-being. Our state-of-the-art clinic is designed to provide you with the most comfortable, pain-free, and advanced dental and cosmetic treatments available today.
            </p>
            
            <p className="text-text/70 text-lg leading-relaxed mb-10">
              Led by a team of highly qualified specialists, we combine years of clinical expertise with cutting-edge technology to deliver results that exceed expectations, all within a sterile and welcoming environment.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {POINTS.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary shrink-0" />
                  <span className="font-semibold text-text text-sm md:text-base">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
