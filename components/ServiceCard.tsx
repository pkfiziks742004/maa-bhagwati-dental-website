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
  const themeColorClass = isCosmo ? "text-[#17B8C8]" : "text-[#57B857]";
  const themeBorderClass = isCosmo ? "border-[#17B8C8]" : "border-[#57B857]";
  const themeHoverBgClass = isCosmo ? "hover:bg-[#17B8C8]" : "hover:bg-[#57B857]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-border group hover:shadow-xl transition-all duration-500 flex flex-col h-full overflow-hidden"
    >
      {/* Top Image */}
      {image && (
        <div className="relative aspect-[1.55/1] sm:h-40 w-full overflow-hidden rounded-md mb-3 sm:mb-4 bg-gray-100 shrink-0">
          <Image 
            src={image} 
            alt={title} 
            width={400}
            height={258}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
      )}

      <h3 className="text-[14px] sm:text-[17px] font-bold text-[#1b365d] mb-1 sm:mb-1.5 leading-tight">{title}</h3>
      <p className="text-[#64748b] text-[11px] sm:text-[13px] leading-snug sm:leading-relaxed mb-4 sm:mb-6 flex-grow">
        {description}
      </p>

      {/* Stats Row */}
      {(duration || recoveryTime) && (
        <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
           {duration && (
             <div className="flex flex-col">
               <div className={`flex items-center gap-1 sm:gap-1.5 font-bold text-[11px] sm:text-[13px] ${themeColorClass} truncate`}>
                 <Clock size={12} className="sm:w-3.5 sm:h-3.5 shrink-0" /> <span className="truncate">{duration}</span>
               </div>
               <div className="text-[9px] sm:text-[11px] text-[#64748b] font-medium ml-4 sm:ml-5 mt-0 sm:mt-0.5 uppercase tracking-wider">
                 Duration
               </div>
             </div>
           )}
           {recoveryTime && (
             <div className="flex flex-col">
               <div className={`flex items-center gap-1 sm:gap-1.5 font-bold text-[11px] sm:text-[13px] ${themeColorClass} truncate`}>
                 <Calendar size={12} className="sm:w-3.5 sm:h-3.5 shrink-0" /> <span className="truncate">{recoveryTime}</span>
               </div>
               <div className="text-[9px] sm:text-[11px] text-[#64748b] font-medium ml-4 sm:ml-5 mt-0 sm:mt-0.5 uppercase tracking-wider">
                 Recovery
               </div>
             </div>
           )}
        </div>
      )}

      {/* CTA Button */}
      <div className="mt-auto pt-1 sm:pt-2">
        {slug ? (
          <Link 
            href={`/services/${slug}/`} 
            className={`w-full py-1.5 sm:py-2.5 rounded-full border ${themeBorderClass} ${themeColorClass} font-semibold text-[11px] sm:text-[13px] ${themeHoverBgClass} hover:text-white transition-colors flex items-center justify-center gap-1.5 sm:gap-2 h-8 sm:h-auto`}
          >
            View Details <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
          </Link>
        ) : (
          <button className={`w-full py-1.5 sm:py-2.5 rounded-full border ${themeBorderClass} ${themeColorClass} font-semibold text-[11px] sm:text-[13px] ${themeHoverBgClass} hover:text-white transition-colors flex items-center justify-center gap-1.5 sm:gap-2 h-8 sm:h-auto`}>
            View Details <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
          </button>
        )}
      </div>
    </motion.div>
  );
};
