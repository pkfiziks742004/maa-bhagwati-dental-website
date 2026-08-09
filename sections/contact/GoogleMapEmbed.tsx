"use client";

import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import { BRANCHES } from "@/constants/contact";

export const GoogleMapEmbed = () => {
  // Using a generic New Delhi location iframe for demonstration. 
  // In a real scenario, this would be replaced with the exact Google Maps embed iframe provided by the clinic.
  const mapIframe = `<iframe src="https://maps.google.com/maps?q=28.121202710567747,77.56360513126319&z=17&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-text mb-2">Find Us on Google Maps</h2>
              <p className="text-text/70">Navigate to our main branch easily using Google Maps.</p>
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=28.121202710567747,77.56360513126319" target="_blank" rel="noreferrer">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold hover:scale-105 transition-transform shadow-md">
                <Navigation size={18} /> Open in Maps
              </button>
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-border shadow-premium bg-background-light relative z-0"
          >
             {/* Render iframe safely. If we had an actual embed URL string instead of iframe HTML, we could use <iframe src={embedUrl} /> */}
             <div 
               className="w-full h-full"
               dangerouslySetInnerHTML={{ __html: mapIframe }} 
             />
             
             {/* Small overlay on the map for luxury feel */}
             <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg pointer-events-none hidden md:block">
               <h4 className="font-bold text-text mb-1">Maa Bhagwati Dental Care</h4>
               <p className="text-xs text-text/70 font-medium">{BRANCHES[0].address}</p>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
