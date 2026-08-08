"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  details: string[];
  delay?: number;
}

export const ContactCard = ({ icon: Icon, title, details, delay = 0 }: ContactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-[20px] p-8 text-center shadow-premium border border-border group"
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon size={32} />
      </div>
      <h3 className="font-bold text-xl text-text mb-4">{title}</h3>
      <div className="space-y-2">
        {details.map((detail, index) => (
          <p key={index} className="text-text/70 text-sm">
            {detail}
          </p>
        ))}
      </div>
    </motion.div>
  );
};
