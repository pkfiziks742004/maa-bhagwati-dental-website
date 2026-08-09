"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { ContactCard } from "@/components/ContactCard";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white relative border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Get In Touch"
          subtitle="Contact Us"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 mb-16">
          {/* Contact Details Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <ContactCard 
              icon={Phone} 
              title="Call Us" 
              details={["+91 7906174142"]} 
              delay={0.1}
            />
            <ContactCard 
              icon={Mail} 
              title="Email Us" 
              details={["liptonkaushik11987@gmail.com"]} 
              delay={0.2}
            />
            <ContactCard 
              icon={MapPin} 
              title="Visit Clinic" 
              details={["Purana Mangroli Road, Badi Tanki Ke Paas,", "Jewar, Gautam Buddha Nagar, UP 203135"]} 
              delay={0.3}
            />
            <ContactCard 
              icon={Clock} 
              title="Working Hours" 
              details={["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: By Appointment"]} 
              delay={0.4}
            />
          </div>

          {/* Quick Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[24px] p-8 md:p-10 shadow-premium border border-border h-full"
          >
            <h3 className="font-bold text-2xl text-text mb-6">Send a Message</h3>
            <form className="space-y-4 flex flex-col h-[calc(100%-3rem)]">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text/80">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background-light focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text/80">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-background-light focus:outline-none focus:border-primary transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>
              
              <div className="space-y-1 flex-grow">
                <label className="text-sm font-medium text-text/80">Message</label>
                <textarea className="w-full h-full min-h-[120px] px-4 py-3 rounded-xl border border-border bg-background-light focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <PrimaryButton className="w-full mt-auto" size="lg">
                Submit Request
              </PrimaryButton>
            </form>
          </motion.div>
        </div>

        {/* Map and Directions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center"
        >
          <div className="w-full flex justify-end mb-4">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=28.121202710567747,77.56360513126319" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-2.5 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm"
            >
              <MapPin size={16} /> Get Directions
            </a>
          </div>
          
          <div className="w-full h-[300px] md:h-[400px] bg-background-light rounded-lg shadow-soft overflow-hidden relative border border-border/50">
            <iframe 
              src="https://maps.google.com/maps?q=28.121202710567747,77.56360513126319&z=17&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
