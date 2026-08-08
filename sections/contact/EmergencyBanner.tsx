"use client";

import { motion } from "framer-motion";
import { AlertCircle, Phone } from "lucide-react";
import { CONTACT_DETAILS } from "@/constants/contact";

export const EmergencyBanner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-red-50 to-orange-50 rounded-[32px] border border-red-100 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-900 mb-2">Dental Emergency?</h3>
              <p className="text-red-800/80 max-w-xl text-lg">
                Experiencing severe tooth pain, a knocked-out tooth, or excessive bleeding? Contact us immediately for urgent dental care.
              </p>
            </div>
          </div>
          
          <div className="shrink-0 w-full md:w-auto">
            <a href={`tel:${CONTACT_DETAILS.emergencyPhone}`}>
              <button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-red-600/20">
                <Phone size={24} />
                Call {CONTACT_DETAILS.emergencyPhone}
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
