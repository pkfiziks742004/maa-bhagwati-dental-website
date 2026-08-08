"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { ALL_FAQS, FAQCategory } from "@/constants/faq";
import { cn } from "@/lib/utils";

const CATEGORIES: FAQCategory[] = ["All", "General Dentistry", "Root Canal", "Dental Implants", "Braces", "Hair Transplant", "Skin Treatment", "Appointment", "Payments", "Emergency Care"];

export const FAQInteractiveLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs = ALL_FAQS.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* Search Bar */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-text/40">
            <Search size={24} />
          </div>
          <input
            type="text"
            placeholder="Search for questions..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenId(null); // Close active accordion on search
            }}
            className="w-full pl-16 pr-6 py-5 rounded-full border-2 border-border bg-background-light focus:outline-none focus:border-primary transition-colors text-lg shadow-sm"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
           {CATEGORIES.map(category => (
             <button
               key={category}
               onClick={() => {
                 setActiveCategory(category);
                 setOpenId(null);
               }}
               className={cn(
                 "px-6 py-2.5 rounded-full text-sm font-bold transition-all border",
                 activeCategory === category 
                   ? "bg-primary text-white border-primary shadow-md scale-105" 
                   : "bg-white text-text/70 border-border hover:border-primary hover:text-primary"
               )}
             >
               {category}
             </button>
           ))}
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openId === faq.id;
                
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      "rounded-2xl border transition-all overflow-hidden",
                      isOpen ? "bg-white border-primary shadow-premium" : "bg-background-light border-border hover:border-primary/50"
                    )}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full text-left px-6 py-6 flex items-center justify-between gap-4 outline-none"
                    >
                      <span className={cn("font-bold text-lg md:text-xl pr-4 transition-colors", isOpen ? "text-primary" : "text-text")}>
                        {faq.question}
                      </span>
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                        isOpen ? "bg-primary text-white rotate-180" : "bg-white border border-border text-text/50"
                      )}>
                        <ChevronDown size={20} />
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-text/80 text-lg leading-relaxed border-t border-border/50 pt-4">
                            {faq.answer}
                            {/* Visual tag for category */}
                            <div className="mt-4">
                              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                                {faq.category}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 text-text/50"
              >
                No questions found matching your search. Try different keywords.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
