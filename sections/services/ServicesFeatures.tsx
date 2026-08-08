"use client";

import { Monitor, Users, ShieldCheck, HeartPulse, BadgePercent } from "lucide-react";

const FEATURES = [
  {
    icon: Monitor,
    title: "Advanced Technology",
    description: "Modern equipment for precise treatment"
  },
  {
    icon: Users,
    title: "Expert Doctors",
    description: "Experienced professionals you can trust"
  },
  {
    icon: HeartPulse,
    title: "Painless Treatment",
    description: "Comfortable and stress-free care"
  },
  {
    icon: ShieldCheck,
    title: "Safe & Sterile",
    description: "Highest hygiene and sterilization standards"
  },
  {
    icon: BadgePercent,
    title: "Affordable Care",
    description: "Quality treatment at honest prices"
  }
];

export const ServicesFeatures = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6 bg-[#f8fafc] rounded-2xl p-6 md:p-8 border border-border/40 shadow-sm">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex items-center gap-4 flex-1 min-w-[200px]">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#57B857] shadow-sm flex-shrink-0">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#1b365d] leading-tight mb-1">{feature.title}</h4>
                  <p className="text-[11px] text-text/70 leading-snug">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
