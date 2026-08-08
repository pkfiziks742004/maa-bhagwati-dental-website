"use client";

import { Phone, Calendar } from "lucide-react";
import { BookAppointmentButton } from "@/components/BookAppointmentButton";
import Image from "next/image";

export const ServicesCTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative bg-[#1b365d]">
          
          {/* Custom Grid Pattern Background - fades from teal to dark blue to match the image */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E"), linear-gradient(to right, #215c71 0%, #194559 30%, #1b365d 55%, #1b365d 100%)`
            }}
          />

          {/* Left Content */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white mb-4 leading-[1.15]">
              Ready to Transform Your <br className="hidden md:block" />
              <span className="text-[#17B8C8]">Smile & Confidence?</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-medium">
              Book your appointment today and take the first step towards a healthier, happier you with our advanced dental and cosmetic treatments.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <BookAppointmentButton 
                size="lg" 
                icon={Calendar} 
                className="w-full sm:w-auto bg-[#57B857] hover:bg-[#4ea84e] text-white border-none rounded-xl px-8 py-6 text-[15px] font-bold shadow-lg transition-transform hover:-translate-y-1"
              >
                Book Appointment
              </BookAppointmentButton>
              
              <div className="flex items-center gap-4 text-white w-full sm:w-auto">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#57B857] shadow-inner">
                  <Phone size={20} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest mb-0.5">Or Call Us</p>
                  <p className="font-extrabold text-[15px] tracking-wider">+91 7906174142</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-[45%] xl:w-[40%] min-h-[350px] lg:min-h-full flex items-end justify-center">
            <Image 
              src="/services/servics apor.png" 
              alt="Smiling Family" 
              width={600}
              height={500}
              className="object-contain object-bottom w-full h-auto max-h-full" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};
