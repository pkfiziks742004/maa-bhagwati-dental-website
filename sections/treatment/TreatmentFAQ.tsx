"use client";

import { ServiceData } from "@/constants/services";
import { SectionTitle } from "@/components/SectionTitle";
import { FAQCard } from "@/components/FAQCard";
import { motion } from "framer-motion";

export const TreatmentFAQ = ({ service }: { service: ServiceData }) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title={`Frequently Asked Questions`}
          subtitle={`About ${service.title}`}
          className="mb-16"
        />
        
        <div className="max-w-3xl mx-auto">
          {service.faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
            >
              <FAQCard question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
