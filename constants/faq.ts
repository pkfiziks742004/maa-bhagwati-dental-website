export type FAQCategory = "All" | "General Dentistry" | "Root Canal" | "Dental Implants" | "Braces" | "Hair Transplant" | "Skin Treatment" | "Appointment" | "Payments" | "Emergency Care";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

export const ALL_FAQS: FAQ[] = [
  // Appointment
  {
    id: "f1",
    category: "Appointment",
    question: "How do I book an appointment online?",
    answer: "You can book an appointment easily through our website using the 'Book Appointment' button. Simply fill out the 7-step form, choose your doctor and time slot, and your request will be securely sent to our clinic."
  },
  {
    id: "f2",
    category: "Appointment",
    question: "Can I reschedule or cancel my appointment?",
    answer: "Yes, you can reschedule or cancel by calling our clinic or messaging us on WhatsApp at least 24 hours before your scheduled time."
  },
  
  // General Dentistry
  {
    id: "f3",
    category: "General Dentistry",
    question: "How often should I visit the dentist for a checkup?",
    answer: "We recommend visiting the dentist for a routine checkup and professional cleaning every 6 months to maintain optimal oral hygiene and catch any potential issues early."
  },
  {
    id: "f4",
    category: "General Dentistry",
    question: "Are dental X-rays safe?",
    answer: "Yes, we use advanced digital X-ray technology which emits up to 90% less radiation than traditional film X-rays, making them extremely safe for our patients."
  },

  // Dental Implants
  {
    id: "f5",
    category: "Dental Implants",
    question: "Is the dental implant procedure painful?",
    answer: "The procedure is performed under local anesthesia, so you will not feel any pain during the surgery. Mild soreness may occur during the healing process, which is easily managed with prescribed medication."
  },
  {
    id: "f6",
    category: "Dental Implants",
    question: "How long do dental implants last?",
    answer: "With proper oral hygiene and regular dental checkups, dental implants can last a lifetime. They are the most durable and permanent solution for missing teeth."
  },

  // Root Canal
  {
    id: "f7",
    category: "Root Canal",
    question: "Do you offer Laser Root Canal treatments?",
    answer: "Yes, we specialize in Laser-assisted Root Canal Treatments, which offer superior disinfection, faster healing, and a virtually painless experience compared to traditional methods."
  },

  // Braces
  {
    id: "f8",
    category: "Braces",
    question: "Do you offer invisible braces (Invisalign)?",
    answer: "Yes, we are certified providers of clear aligners like Invisalign. They are virtually invisible, comfortable, and removable, making them a popular choice for adults and teens."
  },

  // Hair Transplant
  {
    id: "f9",
    category: "Hair Transplant",
    question: "Is FUE hair transplant permanent?",
    answer: "Yes, the transplanted hair follicles are typically resistant to the hormone (DHT) that causes hair loss, meaning the transplanted hair will continue to grow permanently."
  },

  // Skin Treatment
  {
    id: "f10",
    category: "Skin Treatment",
    question: "What is PRP therapy for skin?",
    answer: "PRP (Platelet-Rich Plasma) therapy, also known as a 'Vampire Facial', uses your body's own platelets to stimulate collagen production, reducing fine lines, acne scars, and improving overall skin texture."
  },

  // Payments
  {
    id: "f11",
    category: "Payments",
    question: "What payment methods do you accept?",
    answer: "We accept all major Credit/Debit Cards, UPI, Net Banking, and Cash. We also offer EMI options for larger treatments like Implants and Hair Transplants."
  },

  // Emergency Care
  {
    id: "f12",
    category: "Emergency Care",
    question: "What should I do if my tooth is knocked out?",
    answer: "If a permanent tooth is knocked out, keep it moist (in milk or saline) and contact our emergency line immediately. Re-implantation has the highest success rate if done within 30-60 minutes."
  }
];
