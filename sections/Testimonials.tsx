"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { SecondaryButton } from "@/components/SecondaryButton";
import Image from "next/image";
import { useRef, useEffect } from "react";

const TESTIMONIALS = [
  {
    name: "Rohan Gupta",
    time: "2 weeks ago",
    content: "Best dental clinic in the city! The laser treatment was completely painless. Highly recommend Dr. Kumar.",
    image: "/patients/p1.jpg"
  },
  {
    name: "Sneha Patel",
    time: "1 month ago",
    content: "Got my smile designing done here. The results are phenomenal and the staff is extremely professional.",
    image: "/patients/p2.jpg"
  },
  {
    name: "Amit Desai",
    time: "2 months ago",
    content: "Very clean and hygienic clinic. The equipment is very modern and they explain everything clearly before starting.",
    image: "/patients/p3.jpg"
  },
  {
    name: "Priya Sharma",
    time: "3 months ago",
    content: "Took my mother for dental implants. The whole process was smooth and affordable compared to others.",
    image: "/patients/p4.jpg"
  }
];

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        // Scroll by one card width approximately (400px + gap)
        const scrollAmount = 424; 
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 424; // Width of card + gap
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-background-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionTitle
            title="What Our Patients Say"
            subtitle="Testimonials"
            align="left"
            className="mb-0"
          />
          <div className="hidden md:flex gap-4">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* CSS Scroll Snap Slider */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-white p-8 rounded-[24px] shadow-premium border border-border flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 overflow-hidden relative border border-primary/20">
                    <div className="absolute inset-0 flex items-center justify-center text-primary font-bold">{t.name.charAt(0)}</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-text">{t.name}</h4>
                    <p className="text-xs text-text/50">{t.time}</p>
                  </div>
                </div>
                {/* Google SVG Icon placeholder */}
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">G</div>
              </div>

              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-text/80 text-sm leading-relaxed italic">
                &quot;{t.content}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
