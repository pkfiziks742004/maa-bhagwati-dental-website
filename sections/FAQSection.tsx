"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { FAQCard } from "@/components/FAQCard";
import { motion } from "framer-motion";

const FAQS = [
  {
    question: "Is laser dentistry painful?",
    answer: "Not at all. Laser dentistry is generally painless, reducing the need for anesthesia and allowing for faster healing times compared to traditional methods."
  },
  {
    question: "How much does a dental implant cost?",
    answer: "The cost of a dental implant varies depending on individual requirements. We offer competitive pricing and flexible payment plans. Please book a consultation for an accurate estimate."
  },
  {
    question: "Are your sterilization protocols safe?",
    answer: "We follow strict international Class-B sterilization protocols. All our instruments are fully autoclaved and packed in sterilized pouches before every procedure."
  },
  {
    question: "Do you offer EMI options for treatments?",
    answer: "Yes, we provide easy EMI options for major treatments like Dental Implants, Hair Transplants, and Full Mouth Rehabilitation."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-24 bg-background-light relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Got Questions?"
          className="mb-16"
        />
        
        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <FAQCard question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
