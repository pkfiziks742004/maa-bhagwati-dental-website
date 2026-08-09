"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { CONTACT_DETAILS } from "@/constants/contact";

const WhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = CONTACT_DETAILS.whatsapp.replace(/\D/g, ""); // Real phone number configuration
  const message = "Hello Maa Bhagwati Dental Care, I would like to book an appointment.";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-white rounded-2xl shadow-premium border border-border overflow-hidden w-72"
          >
            <div className="bg-[#075E54] p-4 flex justify-between items-center text-white">
               <div>
                 <h4 className="font-bold">Chat with us</h4>
                 <p className="text-xs text-white/80">Typically replies instantly</p>
               </div>
               <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                 <X size={20} />
               </button>
            </div>
            <div className="p-4 bg-[#E5DDD5]">
               <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-sm text-text inline-block max-w-[85%]">
                 Hi! 👋 How can we help you today? Need to book an appointment or have an emergency?
               </div>
            </div>
            <div className="p-4 bg-white text-center border-t border-border">
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full py-2.5 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20b858] transition-colors flex justify-center items-center gap-2"
                >
                  <WhatsAppIcon size={18} /> Start Chat
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-premium transition-shadow relative"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={28} />
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
};
