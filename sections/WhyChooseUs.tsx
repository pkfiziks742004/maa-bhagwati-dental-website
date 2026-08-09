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
    cardBg: "bg-[#EEF5FF]",
    cardBorder: "border-[#B9D5FF]",
    iconBg: "bg-[#DCEBFF]",
    iconColor: "text-[#2878E8]",
  },
  {
    title: "Modern Equipment",
    description: "State-of-the-art dental chairs and advanced diagnostic tools for precise treatment.",
    icon: Stethoscope,
    cardBg: "bg-[#EDF9F8]",
    cardBorder: "border-[#B7E5E2]",
    iconBg: "bg-[#D9F1EF]",
    iconColor: "text-[#148C87]",
  },
  {
    title: "Digital X-Ray",
    description: "Low-radiation RVG and OPG machines for instant, accurate imaging.",
    icon: Microscope,
    cardBg: "bg-[#F5EEFF]",
    cardBorder: "border-[#D8C1FF]",
    iconBg: "bg-[#EBDDFF]",
    iconColor: "text-[#8B4DE8]",
  },
  {
    title: "Laser Technology",
    description: "Painless, bloodless procedures using imported soft and hard tissue lasers.",
    icon: Zap,
    cardBg: "bg-[#FFF4E8]",
    cardBorder: "border-[#FFD5A8]",
    iconBg: "bg-[#FFE6C8]",
    iconColor: "text-[#F28A00]",
  },
  {
    title: "Affordable Care",
    description: "Premium treatments offered at transparent, highly competitive pricing.",
    icon: IndianRupee,
    cardBg: "bg-[#EDF9F1]",
    cardBorder: "border-[#BCE5CA]",
    iconBg: "bg-[#DDF2E3]",
    iconColor: "text-[#20A45A]",
  },
  {
    title: "100% Sterilization",
    description: "Strict class-B autoclaving protocols ensuring a completely safe environment.",
    icon: ShieldCheck,
    cardBg: "bg-[#FFF0F4]",
    cardBorder: "border-[#F5C3D1]",
    iconBg: "bg-[#FFE0E8]",
    iconColor: "text-[#E83D67]",
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
              className={cn(
                "w-full rounded-[20px] p-6 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] border group transition-all duration-500",
                feature.cardBg,
                feature.cardBorder
              )}
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6", feature.iconBg, feature.iconColor)}>
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
