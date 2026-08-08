"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { FAQCard } from "@/components/FAQCard";

const CONTACT_FAQS = [
  { question: "How do I reach the main clinic?", answer: "Our main clinic is located in Sector 15, New Delhi. You can easily navigate using the Google Maps link above. We are a 5-minute walk from the central Metro Station." },
  { question: "Do you accept walk-in patients?", answer: "Yes, walk-ins are welcome for general consultations. However, we highly recommend booking an appointment online to avoid long waiting times." },
  { question: "Can I book an appointment via WhatsApp?", answer: "Absolutely! You can use the floating WhatsApp button on this page to instantly chat with our front desk and secure a time slot." },
  { question: "Who should I contact for a dental emergency?", answer: "For emergencies, please call our 24/7 dedicated emergency line immediately. We prioritize emergency cases and will accommodate you as fast as possible." },
];

export const ContactFAQ = () => {
  return (
    <section className="py-24 bg-background-light relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Visiting FAQs"
          subtitle="Common Questions"
          className="mb-16"
        />
        <div className="max-w-3xl mx-auto">
          {CONTACT_FAQS.map((faq, index) => (
            <div key={index} className="mb-4">
              <FAQCard question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
