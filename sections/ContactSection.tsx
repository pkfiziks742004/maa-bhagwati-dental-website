"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Sparkles, Loader2, CheckCircle2 } from "lucide-react";
import { BookAppointmentButton } from "@/components/BookAppointmentButton";
import { CONTACT_DETAILS, BRANCHES } from "@/constants/contact";

export const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setErrorMsg("Internet connection is required to send your message.");
      return;
    }

    setIsLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get("name"),
      mobile: formData.get("phone"),
      message: formData.get("message") + (formData.get("email") ? `\nEmail: ${formData.get("email")}` : ""),
      service: "General Contact Query",
      preferred_date: new Date().toISOString().split("T")[0],
    };

    try {
      const res = await fetch("/booking.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-white relative border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            
            {/* LEFT COLUMN: Info */}
            <div className="flex flex-col">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-[2.25rem] md:text-[2.75rem] font-extrabold text-[#1a2f4c] leading-[1.15] tracking-tight mb-3">
                  Book a Consultation
                </h2>
                <p className="text-[#64748b] text-lg font-medium mb-10">
                  Take the first step towards better dental health.
                </p>
              </motion.div>

              <div className="flex flex-col gap-3.5 mb-10">
                {/* Phone */}
                <motion.a 
                  href={`tel:${CONTACT_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="bg-[#EDF9F8] rounded-[16px] p-4 md:p-5 flex items-center gap-4 border border-[#B7E5E2] hover:shadow-md transition-shadow cursor-pointer block"
                >
                  <div className="w-12 h-12 rounded-[12px] bg-[#148C87] flex items-center justify-center shrink-0">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-[#1a2f4c]">Phone</div>
                    <div className="text-[#475569] text-sm font-medium">{CONTACT_DETAILS.primaryPhone}</div>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a 
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="bg-[#EDF9F8] rounded-[16px] p-4 md:p-5 flex items-center gap-4 border border-[#B7E5E2] hover:shadow-md transition-shadow cursor-pointer block"
                >
                  <div className="w-12 h-12 rounded-[12px] bg-[#148C87] flex items-center justify-center shrink-0">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-[#1a2f4c]">Email</div>
                    <div className="text-[#475569] text-sm font-medium">{CONTACT_DETAILS.email}</div>
                  </div>
                </motion.a>

                {/* Address */}
                <motion.a 
                  href={BRANCHES[0].mapLink} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="bg-[#EDF9F8] rounded-[16px] p-4 md:p-5 flex items-center gap-4 border border-[#B7E5E2] hover:shadow-md transition-shadow cursor-pointer block"
                >
                  <div className="w-12 h-12 rounded-[12px] bg-[#148C87] flex items-center justify-center shrink-0">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-[#1a2f4c]">Address</div>
                    <div className="text-[#475569] text-sm font-medium leading-snug pr-2">
                      {BRANCHES[0].address}
                    </div>
                  </div>
                </motion.a>

                {/* Hours */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="bg-[#EDF9F8] rounded-[16px] p-4 md:p-5 flex items-center gap-4 border border-[#B7E5E2] hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-[12px] bg-[#148C87] flex items-center justify-center shrink-0">
                    <Clock className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-[#1a2f4c]">Hours</div>
                    <div className="text-[#475569] text-sm font-medium">Mon - Sat: {CONTACT_DETAILS.workingHours.weekdays.split('-')[1].trim()}</div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <BookAppointmentButton className="w-full sm:w-auto bg-[#148C87] hover:bg-[#10706b] text-white rounded-full font-bold px-8 py-3.5 shadow-lg shadow-[#148C87]/20 flex items-center justify-center gap-2">
                  Book Appointment Online
                </BookAppointmentButton>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-[#e2e8f0] overflow-hidden flex flex-col h-full"
            >
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#148C87] to-[#10706b] p-6 md:p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Send us a Message</h3>
                    <p className="text-white/80 font-medium text-sm">We&apos;ll respond shortly.</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30 flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className="text-white text-[11px] font-bold uppercase tracking-wider">Quick</span>
                  </div>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8 flex-grow">
                    <div className="w-16 h-16 bg-[#EDF9F8] rounded-full flex items-center justify-center text-[#148C87] mb-2">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1a2f4c]">Message Sent!</h4>
                    <p className="text-[#64748b] text-sm max-w-[250px]">Thank you for reaching out. Our team will get back to you shortly.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 text-[#148C87] font-bold hover:underline text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 flex flex-col h-full flex-grow">
                    
                    {errorMsg && (
                      <div className="p-3 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-medium mb-2">
                        {errorMsg}
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label htmlFor="contact_name" className="text-[12px] font-bold text-[#64748b] uppercase tracking-wider ml-1">Your Name</label>
                      <input id="contact_name" required name="name" type="text" autoComplete="name" className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-white text-sm focus:outline-none focus:border-[#148C87] focus:ring-1 focus:ring-[#148C87] transition-all placeholder:text-[#94a3b8]" placeholder="John Doe" disabled={isLoading} />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="contact_phone" className="text-[12px] font-bold text-[#64748b] uppercase tracking-wider ml-1">Phone Number</label>
                      <input id="contact_phone" required name="phone" type="tel" autoComplete="tel" className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-white text-sm focus:outline-none focus:border-[#148C87] focus:ring-1 focus:ring-[#148C87] transition-all placeholder:text-[#94a3b8]" placeholder="+91 98765 43210" disabled={isLoading} />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact_email" className="text-[12px] font-bold text-[#64748b] uppercase tracking-wider ml-1">Email</label>
                      <input id="contact_email" name="email" type="email" autoComplete="email" className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-white text-sm focus:outline-none focus:border-[#148C87] focus:ring-1 focus:ring-[#148C87] transition-all placeholder:text-[#94a3b8]" placeholder="you@example.com" disabled={isLoading} />
                    </div>
                    
                    <div className="space-y-1.5 flex-grow mb-4">
                      <label htmlFor="contact_message" className="text-[12px] font-bold text-[#64748b] uppercase tracking-wider ml-1">Message</label>
                      <textarea id="contact_message" required name="message" className="w-full h-24 md:h-[100px] px-4 py-3 rounded-xl border border-[#e2e8f0] bg-white text-sm focus:outline-none focus:border-[#148C87] focus:ring-1 focus:ring-[#148C87] transition-all resize-none placeholder:text-[#94a3b8]" placeholder="How can we help you?" disabled={isLoading}></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full mt-auto bg-[#148C87] hover:bg-[#10706b] disabled:bg-[#148C87]/60 text-white rounded-xl font-bold px-6 py-3.5 flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Map and Directions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center mt-8"
          >
            <div className="w-full flex justify-end mb-4">
              <a 
                href={BRANCHES[0].mapLink} 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-2.5 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm"
              >
                <MapPin size={16} /> Get Directions
              </a>
            </div>
            
            <motion.div 
              onViewportEnter={() => setShowMap(true)}
              viewport={{ once: true, margin: "200px" }}
              className="w-full h-[300px] md:h-[400px] bg-background-light rounded-2xl shadow-soft overflow-hidden relative border border-border/50"
            >
              {showMap && (
                <iframe 
                  src="https://maps.google.com/maps?q=28.121202710567747,77.56360513126319&z=17&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
