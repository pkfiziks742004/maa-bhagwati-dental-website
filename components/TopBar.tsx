"use client";

import { Phone, Clock, MapPin, AlertCircle, MessageCircle } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="hidden lg:flex items-center justify-between px-6 py-2 bg-text text-white text-xs font-medium h-[48px] w-full z-[60] relative">
      
      {/* Left: Contact Info */}
      <div className="flex items-center gap-6">
        <a href="tel:+917906174142" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Phone size={14} className="text-primary" />
          <span>+91 7906174142</span>
        </a>
        <a href="https://wa.me/917906174142" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors">
          <MessageCircle size={14} className="text-green-400" />
          <span>WhatsApp Us</span>
        </a>
        <div className="flex items-center gap-2 border-l border-white/20 pl-6">
          <Clock size={14} className="text-secondary" />
          <span>Mon - Sun: 10:00 AM - 8:00 PM</span>
        </div>
      </div>

      {/* Right: Location & Emergency */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 hover:text-white/80 cursor-pointer transition-colors">
          <MapPin size={14} className="text-white/60" />
          <span>Jewar, Gautam Buddha Nagar, UP</span>
        </div>
        <div className="flex items-center gap-2 bg-red-500/20 text-red-100 px-3 py-1 rounded-full border border-red-500/30">
          <AlertCircle size={14} className="text-red-400 animate-pulse" />
          <span className="font-bold tracking-wide">Emergency: 24/7 Available</span>
        </div>
      </div>
      
    </div>
  );
};
