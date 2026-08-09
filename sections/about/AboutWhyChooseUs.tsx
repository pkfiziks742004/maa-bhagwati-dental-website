"use client";

import { cn } from "@/lib/utils";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { UserCheck, Stethoscope, Microscope, Zap, IndianRupee, ShieldCheck, HeartPulse, Clock, Sparkles } from "lucide-react";

const REASONS = [
  { title: "Experienced Doctors", icon: UserCheck, cardBg: "bg-[#EEF5FF]", cardBorder: "border-[#B9D5FF]", iconBg: "bg-[#DCEBFF]", iconColor: "text-[#2878E8]" },
  { title: "Latest Technology", icon: Stethoscope, cardBg: "bg-[#EDF9F8]", cardBorder: "border-[#B7E5E2]", iconBg: "bg-[#D9F1EF]", iconColor: "text-[#148C87]" },
  { title: "Digital X-Ray", icon: Microscope, cardBg: "bg-[#F5EEFF]", cardBorder: "border-[#D8C1FF]", iconBg: "bg-[#EBDDFF]", iconColor: "text-[#8B4DE8]" },
  { title: "Laser Dentistry", icon: Zap, cardBg: "bg-[#FFF4E8]", cardBorder: "border-[#FFD5A8]", iconBg: "bg-[#FFE6C8]", iconColor: "text-[#F28A00]" },
  { title: "Affordable Pricing", icon: IndianRupee, cardBg: "bg-[#EDF9F1]", cardBorder: "border-[#BCE5CA]", iconBg: "bg-[#DDF2E3]", iconColor: "text-[#20A45A]" },
  { title: "100% Sterilization", icon: ShieldCheck, cardBg: "bg-[#FFF0F4]", cardBorder: "border-[#F5C3D1]", iconBg: "bg-[#FFE0E8]", iconColor: "text-[#E83D67]" },
  { title: "Patient Satisfaction", icon: HeartPulse, cardBg: "bg-[#EEF5FF]", cardBorder: "border-[#B9D5FF]", iconBg: "bg-[#DCEBFF]", iconColor: "text-[#2878E8]" },
  { title: "Emergency Support", icon: Clock, cardBg: "bg-[#FFF4E8]", cardBorder: "border-[#FFD5A8]", iconBg: "bg-[#FFE6C8]", iconColor: "text-[#F28A00]" },
  { title: "Comfortable Environment", icon: Sparkles, cardBg: "bg-[#EDF9F8]", cardBorder: "border-[#B7E5E2]", iconBg: "bg-[#D9F1EF]", iconColor: "text-[#148C87]" },
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
              className={cn(
                "rounded-[24px] p-6 shadow-sm border group hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-center justify-center text-center",
                reason.cardBg,
                reason.cardBorder
              )}
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", reason.iconBg, reason.iconColor)}>
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
