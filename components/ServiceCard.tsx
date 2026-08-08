"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ElementType; 
  image?: string;
  delay?: number;
  slug?: string;
  duration?: string;
  recoveryTime?: string;
  benefits?: string[];
  theme?: "dental" | "cosmodent";
}

export const ServiceCard = ({ 
  title, 
  description, 
  image, 
  delay = 0,
  slug,
  duration,
  recoveryTime,
  theme = "dental"
}: ServiceCardProps) => {
  const isCosmo = theme === "cosmodent";
  const themeColor = isCosmo ? "#17B8C8" : "#57B857";
  const themeColorClass = isCosmo ? "text-[#17B8C8]" : "text-[#57B857]";
  const themeBorderClass = isCosmo ? "border-[#17B8C8]" : "border-[#57B857]";
  const themeHoverBgClass = isCosmo ? "hover:bg-[#17B8C8]" : "hover:bg-[#57B857]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-lg p-4 shadow-sm border border-border group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Top Image */}
      {image && (
        <div className="relative h-40 w-full overflow-hidden rounded-md mb-4 bg-gray-100">
          <Image 
            src={image} 
            alt={title} 
            fill
            sizes="(max-width: 768px) 100vw, 20vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
      )}

      <h3 className="text-[17px] font-bold text-[#1b365d] mb-1.5 leading-tight">{title}</h3>
      <p className="text-[#64748b] text-[13px] leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Stats Row */}
      {(duration || recoveryTime) && (
        <div className="grid grid-cols-2 gap-4 mb-6">
           {duration && (
             <div className="flex flex-col">
               <div className={`flex items-center gap-1.5 font-bold text-[13px] ${themeColorClass}`}>
                 <Clock size={14} /> {duration}
               </div>
               <div className="text-[11px] text-[#64748b] font-medium ml-5 mt-0.5 uppercase tracking-wider">
                 Duration
               </div>
             </div>
           )}
           {recoveryTime && (
             <div className="flex flex-col">
               <div className={`flex items-center gap-1.5 font-bold text-[13px] ${themeColorClass}`}>
                 <Calendar size={14} /> {recoveryTime}
               </div>
               <div className="text-[11px] text-[#64748b] font-medium ml-5 mt-0.5 uppercase tracking-wider">
                 Recovery
               </div>
             </div>
           )}
        </div>
      )}

      {/* CTA Button */}
      <div className="mt-auto pt-2">
        {slug ? (
          <Link 
            href={`/services/${slug}`} 
            className={`w-full py-2.5 rounded-full border ${themeBorderClass} ${themeColorClass} font-semibold text-[13px] ${themeHoverBgClass} hover:text-white transition-colors flex items-center justify-center gap-2`}
          >
            Learn More <ArrowRight size={14} />
          </Link>
        ) : (
          <button className={`w-full py-2.5 rounded-full border ${themeBorderClass} ${themeColorClass} font-semibold text-[13px] ${themeHoverBgClass} hover:text-white transition-colors flex items-center justify-center gap-2`}>
            Learn More <ArrowRight size={14} />
          </button>
        )}
      </div>
    </motion.div>
  );
};
