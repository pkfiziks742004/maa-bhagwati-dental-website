"use client";

import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import { BRANCHES } from "@/constants/contact";

export const GoogleMapEmbed = () => {
  // Using a generic New Delhi location iframe for demonstration. 
  // In a real scenario, this would be replaced with the exact Google Maps embed iframe provided by the clinic.
  const mapIframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d112105.15875225672!2d77.12759160533512!3d28.591965684617502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-text mb-2">Find Us on Google Maps</h2>
              <p className="text-text/70">Navigate to our main branch easily using Google Maps.</p>
            </div>
            <a href={BRANCHES[0].mapLink} target="_blank" rel="noreferrer">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold hover:scale-105 transition-transform shadow-md">
                <Navigation size={18} /> Open in Maps
              </button>
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[500px] rounded-[32px] overflow-hidden border border-border shadow-premium bg-background-light relative z-0"
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
