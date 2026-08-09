"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_DATA, GalleryCategory, GalleryItem } from "@/constants/gallery";
import { PremiumLightbox } from "@/components/PremiumLightbox";
import { Search, Play, Maximize2 } from "lucide-react";

const CATEGORIES: GalleryCategory[] = ["All", "Clinic Tour", "Doctors at Work", "Patient Smiles", "Equipment", "Videos"];

export const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Lightbox State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = GALLERY_DATA.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (item.treatmentName && item.treatmentName.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (item.doctorName && item.doctorName.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (item: GalleryItem) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    if (index !== -1) {
      setLightboxIndex(index);
      setIsLightboxOpen(true);
    }
  };

  return (
    <section id="gallery-grid" className="py-12 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Filters and Search Bar */}
        <div className="bg-background-light p-4 md:p-6 rounded-[32px] border border-border shadow-sm mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between sticky top-[80px] z-30">
          
          <div className="flex flex-wrap gap-2 w-full lg:w-auto pb-2 lg:pb-0">
             {CATEGORIES.map(category => (
               <button
                 key={category}
                 onClick={() => setActiveCategory(category)}
                 className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                   activeCategory === category 
                   ? "bg-primary text-white shadow-md" 
                   : "bg-white text-text/70 border border-border hover:border-primary hover:text-primary"
                 }`}
               >
                 {category}
               </button>
             ))}
          </div>

          <div className="relative w-full lg:w-80 shrink-0">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
               <Search className="text-text/40" size={18} />
             </div>
             <input
               type="text"
               placeholder="Search treatments, doctors..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-white focus:outline-none focus:border-primary transition-colors text-sm shadow-inner"
             />
          </div>
        </div>

        {/* Masonry-style Grid Layout */}
        <motion.div layout className="min-h-[500px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                // Using column-count for true masonry
                className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layoutId={`gallery-item-${item.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index % 10) * 0.05 }}
                    className="break-inside-avoid relative rounded-[16px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-premium border border-border/50"
                    onClick={() => openLightbox(item)}
                  >
                    <div className={`w-full bg-background-light relative ${item.category === 'Patient Smiles' ? 'aspect-[3/4]' : item.type === 'video' ? 'aspect-video' : 'aspect-[4/3]'}`}>
                      <img 
                        src={item.url} 
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      
                      {item.type === "video" && (
                         <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                            <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform">
                               <Play size={24} className="ml-1" />
                            </div>
                         </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 delay-100">
                            <Maximize2 size={18} />
                         </div>
                         <h4 className="text-white font-bold text-lg leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                           {item.title}
                         </h4>
                         {item.treatmentName && (
                           <p className="text-white/80 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                             {item.treatmentName}
                           </p>
                         )}
                         {item.category === "Patient Smiles" && (
                           <div className="mt-3 inline-block px-2 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                             Patient Consent Verified
                           </div>
                         )}
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
                No media found for your search criteria.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <PremiumLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={filteredItems}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </section>
  );
};
