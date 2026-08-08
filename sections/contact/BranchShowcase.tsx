"use client";

import { motion } from "framer-motion";
import { BRANCHES } from "@/constants/contact";
import { Star, MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { BookAppointmentButton } from "@/components/BookAppointmentButton";
import Link from "next/link";

export const BranchShowcase = () => {
  return (
    <section className="py-24 bg-background-light relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="fluid-h2 font-bold text-text mb-6">Our Premium Clinics</h2>
           <p className="text-lg text-text/70">
             Visit our state-of-the-art facilities designed for your comfort and equipped with the latest dental technology.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {BRANCHES.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-[32px] p-8 border border-border shadow-sm hover:shadow-premium transition-shadow group relative overflow-hidden flex flex-col"
            >
              {/* Top Banner decoration */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-6 gap-4">
                <h3 className="text-2xl font-bold text-text">{branch.name}</h3>
                <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-full shrink-0 border border-yellow-200">
                  <Star className="text-yellow-500 fill-yellow-500" size={16} />
                  <span className="font-bold text-yellow-700 text-sm">{branch.googleRating}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                 <div className="flex items-start gap-4 text-text/80">
                   <div className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-primary shrink-0">
                     <MapPin size={20} />
                   </div>
                   <p className="leading-relaxed pt-1.5">{branch.address}</p>
                 </div>
                 
                 <div className="flex items-center gap-4 text-text/80">
                   <div className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-primary shrink-0">
                     <Clock size={20} />
                   </div>
                   <p className="font-medium pt-1.5">{branch.workingHours}</p>
                 </div>

                 <div className="flex items-center gap-4 text-text/80">
                   <div className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-primary shrink-0">
                     <Phone size={20} />
                   </div>
                   <p className="font-medium pt-1.5">{branch.phone}</p>
                 </div>

                 <div className="flex items-center gap-4 text-text/80">
                   <div className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-primary shrink-0">
                     <Mail size={20} />
                   </div>
                   <p className="font-medium pt-1.5">{branch.email}</p>
                 </div>
              </div>

              {/* Actions */}
              <div className="grid sm:grid-cols-2 gap-4 mt-auto pt-6 border-t border-border">
                <a href={branch.mapLink} target="_blank" rel="noreferrer">
                  <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full border-2 border-border text-text font-bold hover:border-primary hover:text-primary transition-colors">
                    <Navigation size={18} /> Get Directions
                  </button>
                </a>
                <BookAppointmentButton className="w-full justify-center">
                   Book Here
                </BookAppointmentButton>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
