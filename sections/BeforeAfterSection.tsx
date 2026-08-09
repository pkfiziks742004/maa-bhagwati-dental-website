"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { motion } from "framer-motion";

const BEFORE_AFTER_DATA = [
  {
    id: 1,
    title: "Smile Designing",
    beforeImage: "/about/Smile_Designing_Before.png", 
    afterImage: "/about/Smile_Designing_After.png",
  },
  {
    id: 2,
    title: "Dental Implants",
    beforeImage: "/about/Dental_Implant_Before.png", 
    afterImage: "/about/Dental_Implant_After.png",
  },
  {
    id: 3,
    title: "Laser Dentistry",
    beforeImage: "/about/Laser_Dentistry_Before.png", 
    afterImage: "/about/Laser_Dentistry_After.png",
  }
];

export const BeforeAfterSection = () => {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1280px]">
        <SectionTitle
          title="Before & After"
          subtitle="REAL TRANSFORMATIONS"
          className="mb-4"
        />
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[#64748b] text-lg font-medium">
            Real Results. Real People. Real Confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {BEFORE_AFTER_DATA.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <BeforeAfterSlider 
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
              />
              <div className="mt-5 text-center">
                <h4 className="text-[#1b365d] font-bold text-base sm:text-lg">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
