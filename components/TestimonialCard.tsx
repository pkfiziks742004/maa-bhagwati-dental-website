"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role?: string;
  content: string;
  rating?: number;
  delay?: number;
}

export const TestimonialCard = ({ name, role = "Patient", content, rating = 5, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-[20px] p-8 shadow-premium border border-border relative overflow-hidden"
    >
      <Quote className="absolute top-6 right-6 text-primary/10 w-16 h-16" />
      
      <div className="flex gap-1 mb-6 text-yellow-400">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
      
      <p className="text-text/80 text-sm leading-relaxed mb-8 relative z-10 italic">
        "{content}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xl">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-text text-sm">{name}</h4>
          <p className="text-xs text-text/50">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};
