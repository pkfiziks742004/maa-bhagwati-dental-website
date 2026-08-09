"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import { REVIEW_STATS } from "@/constants/testimonials";

export const TestimonialsHero = () => {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-background-light">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50 z-10" />
        <div className="absolute inset-0 bg-gallery-reception bg-cover bg-center opacity-10 z-0 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-text/60 font-medium mb-6"
          >
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-primary">Patient Stories</span>
          </motion.nav>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="fluid-h1 font-bold text-text leading-tight mb-4 tracking-tight"
          >
            Real Smiles, <span className="text-primary block md:inline">Real Stories</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-text/80 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Read what our patients have to say about their life-changing treatments and experiences at Maa Bhagwati Dental Care.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-white py-4 px-5 sm:p-6 rounded-[5px] border border-border shadow-sm w-full max-w-[340px] sm:max-w-fit mx-auto box-border"
          >
             <div className="flex items-center gap-3 sm:gap-2 w-full sm:w-auto justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-text">{REVIEW_STATS.averageRating}</span>
                <div className="flex flex-col items-start gap-0.5 sm:gap-1">
                   <div className="flex text-yellow-500 fill-yellow-500">
                     {[...Array(5)].map((_, i) => <Star key={i} size={14} className="sm:w-4 sm:h-4 fill-yellow-500" />)}
                   </div>
                   <span className="text-[10px] sm:text-xs text-text/60 font-bold tracking-wider uppercase">Average Rating</span>
                </div>
             </div>
             
             <div className="w-full h-px bg-border sm:hidden" />
             <div className="w-px h-12 bg-border hidden sm:block" />
             
             <div className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="flex -space-x-3 sm:-space-x-4">
                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-blue-100" />
                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-red-100" />
                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-green-100" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-text text-sm sm:text-base">{REVIEW_STATS.totalReviews}</p>
                  <a href={REVIEW_STATS.googleLink} target="_blank" rel="noreferrer" className="text-[11px] sm:text-xs text-primary hover:underline inline-block mt-0.5">Read on Google Maps &rarr;</a>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
