"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { CONTACT_DETAILS, BRANCHES } from "@/constants/contact";

export const QuickContactCards = () => {
  const CARDS = [
    {
      icon: Phone,
      title: "Call Clinic",
      description: CONTACT_DETAILS.primaryPhone,
      action: `tel:${CONTACT_DETAILS.primaryPhone}`,
      actionLabel: "Call Now",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: CONTACT_DETAILS.whatsapp,
      action: `https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/\D/g, '')}`,
      actionLabel: "Message Us",
      color: "text-[#25D366]",
      bg: "bg-[#25D366]/10"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: CONTACT_DETAILS.email,
      action: `mailto:${CONTACT_DETAILS.email}`,
      actionLabel: "Send Email",
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      icon: MapPin,
      title: "Get Directions",
      description: "Find our main clinic",
      action: BRANCHES[0].mapLink,
      actionLabel: "Open Maps",
      color: "text-primary",
      bg: "bg-primary/10"
    }
  ];

  return (
    <section className="py-12 bg-white relative -mt-10 z-30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.a
                href={card.action}
                target={card.action.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all flex flex-col items-center text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 ${card.bg} rounded-full flex items-center justify-center ${card.color} shrink-0 mb-4 group-hover:scale-110 transition-transform`}>
                   <Icon size={28} />
                </div>
                <h4 className="font-bold text-text text-lg mb-2">{card.title}</h4>
                <p className="text-text/70 text-sm mb-4 line-clamp-1">{card.description}</p>
                <span className={`text-sm font-bold ${card.color} group-hover:underline`}>
                  {card.actionLabel} &rarr;
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
