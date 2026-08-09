"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES_DATA, ServiceCategory } from "@/constants/services";
import { LayoutGrid, Sparkles, Stethoscope, Scissors, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTER_TABS = [
  { id: "All", label: "All Services", icon: LayoutGrid },
  { id: "Dental Care", label: "Dental Care", icon: Stethoscope },
  { id: "Skin & Laser", label: "Skin & Laser", icon: Sparkles },
  { id: "Hair Restoration", label: "Hair Restoration", icon: Scissors },
  { id: "Emergency Care", label: "Emergency Care", icon: AlertCircle },
];

const CATEGORIES = [
  { id: "Dental Care" as ServiceCategory, title: "Dental Care", iconColor: "text-[#57B857]", theme: "dental" as const },
  { id: "Skin & Laser" as ServiceCategory, title: "Skin & Laser", iconColor: "text-[#17B8C8]", theme: "cosmodent" as const },
  { id: "Hair Restoration" as ServiceCategory, title: "Hair Restoration", iconColor: "text-[#17B8C8]", theme: "cosmodent" as const },
  { id: "Emergency Care" as ServiceCategory, title: "Emergency Care", iconColor: "text-[#e11d48]", theme: "dental" as const },
];

export const ServicesList = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 xl:px-6">
        
        {/* Filter Navigation */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2.5 sm:gap-3 mb-12 sm:mb-16 max-w-5xl mx-auto w-full">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={cn(
                  "flex items-center justify-center sm:justify-start gap-2 px-3 py-3 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-full text-[14px] sm:text-[13px] font-bold transition-all duration-300 w-full sm:w-auto min-h-[54px] sm:min-h-0",
                  isActive 
                    ? "bg-[#57B857] text-white shadow-md" 
                    : "bg-white text-text/80 border border-border/50 hover:border-[#57B857] hover:text-[#57B857]"
                )}
              >
                <Icon className="w-[18px] h-[18px] sm:w-4 sm:h-4" />
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-16">
          <AnimatePresence mode="popLayout">
            {CATEGORIES.map((category) => {
              // Hide this category if it doesn't match the active filter (unless "All" is selected)
              if (activeFilter !== "All" && activeFilter !== category.id) return null;

              const services = SERVICES_DATA.filter((s) => s.category === category.id);
              
              if (services.length === 0) return null;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-full"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className={category.iconColor}>
                      <LayoutGrid size={24} />
                    </div>
                    <h2 className={cn("text-[15px] font-extrabold tracking-widest uppercase", category.iconColor)}>
                      {category.title}
                    </h2>
                    <div className="flex-1 h-[1px] bg-border/40 ml-4" />
                  </div>

                  {/* Responsive grid matching screenshot density */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {services.map((service, index) => (
                      <ServiceCard
                        key={service.slug}
                        slug={service.slug}
                        title={service.title}
                        description={service.shortDescription}
                        duration={service.duration}
                        recoveryTime={service.recoveryTime}
                        image={service.image}
                        delay={index * 0.05}
                        theme={category.theme}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
