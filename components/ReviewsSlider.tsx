"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const REVIEWS = [
  { name: "Rahul Sharma", time: "2 weeks ago", rating: 5, text: "Excellent experience. The doctor was very patient and explained the entire procedure clearly. Highly recommended." },
  { name: "Neha Gupta", time: "1 month ago", rating: 5, text: "Got my treatment done here. The clinic is very clean and the staff is extremely professional." },
  { name: "Amit Patel", time: "2 months ago", rating: 5, text: "Very smooth and painless procedure. Best doctor in town!" },
  { name: "Priya Singh", time: "3 months ago", rating: 5, text: "Affordable pricing and top-notch service. Very happy with the results." },
];

export const ReviewsSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center gap-4 mb-8 bg-white p-4 rounded-2xl border border-border inline-flex shadow-sm">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border shadow-sm shrink-0 overflow-hidden">
          {/* Mock Google G logo */}
          <div className="font-bold text-2xl text-blue-500">G</div>
        </div>
        <div>
           <div className="flex items-center gap-2">
             <span className="font-bold text-xl">4.9</span>
             <div className="flex text-yellow-400 gap-0.5">
               {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
             </div>
           </div>
           <p className="text-xs text-text/60 font-medium">Based on 120+ reviews</p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {REVIEWS.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="snap-start shrink-0 w-[85vw] md:w-[350px] bg-white p-6 rounded-[24px] shadow-sm border border-border flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border border-primary/20 shrink-0">
                {review.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-text text-sm leading-tight">{review.name}</h4>
                <p className="text-xs text-text/50">{review.time}</p>
              </div>
              <div className="ml-auto w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                ✓
              </div>
            </div>

            <div className="flex text-yellow-400 gap-0.5 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>

            <p className="text-text/80 text-sm leading-relaxed line-clamp-4">
              "{review.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
