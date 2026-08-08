"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock, Users } from "lucide-react";

const BENEFITS = [
  {
    icon: Zap,
    title: "Instant Request",
    description: "Submit your details instantly to our secure clinic system."
  },
  {
    icon: Users,
    title: "Experienced Doctors",
    description: "Choose from our panel of highly qualified specialists."
  },
  {
    icon: Clock,
    title: "Flexible Time Slots",
    description: "Pick a date and time that fits perfectly into your schedule."
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description: "Your personal and medical information is strictly confidential."
  }
];

export const WhyBookOnline = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-light p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
                   <Icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text text-lg mb-1">{item.title}</h4>
                  <p className="text-text/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
