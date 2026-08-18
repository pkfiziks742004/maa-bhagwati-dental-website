"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { BookAppointmentButton } from "@/components/BookAppointmentButton";
import Image from "next/image";

export const AppointmentCTA = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative text-white flex flex-col md:flex-row items-stretch min-h-[350px] md:min-h-[400px] mt-20"
        >
          {/* Decorative Background Card (with overflow hidden) */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[32px] overflow-hidden shadow-premium z-0">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          </div>

          {/* Left Side: Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 w-full md:w-[60%] flex flex-col items-start text-left justify-center">
            <h2 className="fluid-h2 font-bold mb-6 leading-[1.15]">
              Ready to Get Your <br/> Perfect Smile?
            </h2>
            <div className="w-16 h-1.5 bg-green-400 rounded-full mb-6 flex items-center relative">
               <div className="absolute -right-3 w-2 h-2 rounded-full bg-green-400" />
            </div>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-lg font-medium">
              Book your consultation today and experience world-class dental care with our expert team.
            </p>
            <BookAppointmentButton 
              size="lg" 
              icon={Calendar} 
              className="bg-white text-primary hover:bg-gray-50 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] text-base px-6 py-5 rounded-2xl"
            >
              Book Appointment Now
            </BookAppointmentButton>
          </div>

          {/* Right Side: Image (Pop-out effect) */}
          <div className="relative md:absolute right-0 bottom-0 w-[85%] md:w-[60%] lg:w-[50%] h-[300px] md:h-[120%] lg:h-[135%] pointer-events-none z-20 flex items-end justify-end self-center md:self-auto mt-8 md:mt-0">
            <Image 
              src="/about/smile.webp" 
              alt="Patient"
              width={600}
              height={600}
              className="w-full h-full object-contain object-bottom lg:object-right-bottom drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
