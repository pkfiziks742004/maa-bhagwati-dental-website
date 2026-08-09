"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS, ReviewCategory } from "@/constants/testimonials";
import { Star, CheckCircle, Quote } from "lucide-react";
import Image from "next/image";

const CATEGORIES: ReviewCategory[] = ["All Reviews", "Dental", "Implants", "Root Canal", "Braces", "Hair Treatment", "Skin Treatment"];

export const ReviewGrid = () => {
  const [activeCategory, setActiveCategory] = useState<ReviewCategory>("All Reviews");

  const filteredReviews = TESTIMONIALS.filter(review => 
    activeCategory === "All Reviews" || review.category === activeCategory
  );

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 w-full pb-8 mb-8 justify-center md:justify-start">
           {CATEGORIES.map(category => (
             <button
               key={category}
               onClick={() => setActiveCategory(category)}
               className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold transition-all ${
                 activeCategory === category 
                 ? "bg-primary text-white shadow-md" 
                 : "bg-background-light text-text/70 border border-border hover:border-primary hover:text-primary"
               }`}
             >
               {category}
             </button>
           ))}
        </div>

        {/* Masonry Review Grid */}
        <motion.div layout className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredReviews.length > 0 ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
              >
                {filteredReviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    layoutId={`review-${review.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="break-inside-avoid bg-background-light p-8 rounded-[5px] border border-border relative overflow-hidden group hover:shadow-premium transition-all"
                  >
                    <Quote className="absolute top-6 right-6 text-primary/10 rotate-180" size={64} />
                    
                    <div className="flex gap-1 mb-4 text-yellow-500 fill-yellow-500">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} className="fill-yellow-500" />)}
                    </div>

                    <p className="text-text/80 leading-relaxed mb-8 relative z-10">"{review.review}"</p>
                    
                    <div className="flex items-center gap-4 border-t border-border pt-6">
                       <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 overflow-hidden relative">
                         {review.patientPhoto ? (
                           <Image src={review.patientPhoto} alt={review.patientName} fill className="object-cover" />
                         ) : (
                           <span className="font-bold text-primary text-lg">{review.patientName.charAt(0)}</span>
                         )}
                       </div>
                       <div>
                         <h4 className="font-bold text-text flex items-center gap-1.5">
                           {review.patientName}
                           {review.verified && <CheckCircle size={14} className="text-blue-500" />}
                         </h4>
                         <p className="text-xs text-text/60 font-medium">{review.treatment} • {review.date}</p>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 text-text/50"
              >
                No reviews found for this category yet.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
};
