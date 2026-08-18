export type ServiceCategory = "Dental Care" | "Hair Restoration" | "Skin & Laser" | "Emergency Care";

export interface ProcedureStep {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  category: ServiceCategory;
  title: string;
  shortDescription: string;
  duration: string;
  recoveryTime: string;
  benefits: string[];
  overview: string;
  whoNeedsIt: string[];
  symptoms: string[];
  procedureSteps: ProcedureStep[];
  technologyUsed: string[];
  faqs: FAQ[];
  image: string;
}

const generateDefaultFAQs = (treatmentName: string) => [
  { question: `Is ${treatmentName} painful?`, answer: "We use modern anesthesia and laser techniques to ensure a painless experience." },
  { question: `How long does ${treatmentName} take?`, answer: "Most sessions are completed within 1 to 2 hours, depending on the complexity." },
  { question: `What is the cost of ${treatmentName}?`, answer: "Costs vary based on individual needs. We offer a transparent pricing structure and easy EMI options." },
  { question: `Is there any side effect of ${treatmentName}?`, answer: "Side effects are extremely rare when performed by our specialists using modern equipment." },
  { question: `How soon can I return to work after ${treatmentName}?`, answer: "Most patients can return to work the same day or the next day, depending on the procedure." },
  { question: `Do you offer EMI for ${treatmentName}?`, answer: "Yes, we provide flexible EMI plans for major treatments." },
  { question: `How many sessions are required for ${treatmentName}?`, answer: "Your doctor will determine the exact number of sessions during your consultation." },
  { question: `Is ${treatmentName} safe?`, answer: "Absolutely. We strictly adhere to Class-B sterilization protocols to ensure 100% safety." },
  { question: `Do I need to take precautions before ${treatmentName}?`, answer: "Basic hygiene and specific instructions provided by the doctor should be followed." },
  { question: `Can I book an online consultation for ${treatmentName}?`, answer: "Yes, you can easily book an appointment through our website or WhatsApp." },
];

const createService = (
  slug: string, 
  category: ServiceCategory, 
  title: string, 
  shortDescription: string,
  duration: string = "30 - 60 Min",
  recoveryTime: string = "1 - 3 Days",
  image: string = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop"
): ServiceData => ({
  slug,
  category,
  title,
  shortDescription,
  duration,
  recoveryTime,
  benefits: ["Painless Procedure", "Fast Recovery", "Long-lasting Results", "Improved Confidence"],
  overview: `${title} is a specialized procedure designed to resolve specific issues and enhance your overall well-being. Using cutting-edge technology, our experts ensure the highest standard of care.`,
  whoNeedsIt: ["Individuals experiencing discomfort", "Those looking for aesthetic improvements", "Patients recommended by a general physician"],
  symptoms: ["Pain or sensitivity", "Visible damage or discoloration", "Discomfort during routine activities"],
  procedureSteps: [
    { title: "Consultation & X-Ray", description: "Detailed examination and imaging to understand the root cause." },
    { title: "Treatment Planning", description: "Creating a personalized roadmap for the procedure." },
    { title: "The Procedure", description: "Performing the treatment using advanced, painless techniques." },
    { title: "Post-Care", description: "Providing medications and guidelines for a smooth recovery." }
  ],
  technologyUsed: ["Digital X-Ray (RVG)", "Laser Equipment", "Advanced Sterilization (Class-B)"],
  faqs: generateDefaultFAQs(title),
  image,
});

export const SERVICES_DATA: ServiceData[] = [
  // 🦷 Dental Care
  createService("digital-xray", "Dental Care", "Digital X-Ray", "Advanced digital imaging for accurate diagnosis and safety.", "10 - 15 Min", "Instant", "/services/Digital X-Ray.webp"),
  createService("intra-oral-camera", "Dental Care", "Intra Oral Camera", "High-resolution intra-oral imaging for precise dental analysis.", "10 - 15 Min", "Instant", "/services/Intra Oral Camera.webp"),
  createService("root-canal-treatment", "Dental Care", "Root Canal Treatment (RCT)", "Painless rotary endodontic treatment to save infected teeth.", "60 - 90 Min", "1 - 3 Days", "/services/Root Canal Treatment (RCT).webp"),
  createService("dental-implants", "Dental Care", "Dental Implants", "Permanent, natural-looking replacements for missing teeth using premium implants.", "60 - 120 Min", "2 - 5 Days", "/services/Dental Implants.webp"),
  createService("tooth-filling", "Dental Care", "Tooth Filling", "Tooth-colored composite fillings for cavities and tooth decay.", "30 - 45 Min", "Immediate", "/services/Tooth Filling.webp"),
  createService("teeth-cleaning", "Dental Care", "Teeth Cleaning (Scaling)", "Professional cleaning to remove plaque, tartar & stains.", "30 - 45 Min", "Same Day", "/services/Teeth Cleaning (Scaling).webp"),
  createService("tooth-extraction", "Dental Care", "Tooth Extraction", "Safe and comfortable removal of damaged or problematic teeth.", "20 - 40 Min", "1 - 2 Days", "/services/Tooth Extraction.webp"),
  createService("zirconia-crown", "Dental Care", "Zirconia Crown", "Highly durable and natural-looking metal-free crowns.", "2 Visits", "3 - 7 Days", "/services/Zirconia Crown.webp"),
  createService("dental-crown", "Dental Care", "Dental Crown (Cap)", "Restore damaged teeth with durable caps.", "2 Visits", "3 - 7 Days", "/services/Dental Crown (Cap).webp"),
  createService("uv-teeth-treatment", "Dental Care", "UV Teeth Treatment", "Advanced UV technology for effective teeth sterilization and treatment.", "30 Min", "Immediate", "/services/UV Teeth Treatment.webp"),
  createService("fixed-denture", "Dental Care", "Fixed Denture", "Permanent fixed dentures for complete smile restoration.", "Multiple Visits", "1 Week", "/services/Fixed Denture.webp"),
  createService("kids-dentistry", "Dental Care", "Kids Dentistry", "Specialized, gentle dental care for children in a friendly environment.", "30 - 45 Min", "Same Day", "/services/Kids Dentistry.webp"),
  createService("opg", "Dental Care", "OPG", "Panoramic dental X-ray for comprehensive jaw and teeth imaging.", "10 - 15 Min", "Instant", "/services/OPG.webp"),
  createService("ortho-braces", "Dental Care", "Ortho (Braces)", "Orthodontic braces for teeth alignment and bite correction.", "60 - 90 Min", "12 - 24 Months", "/services/Ortho (Braces).webp"),

  // 💇 Hair Restoration
  createService("hair-transplant", "Hair Restoration", "Hair Transplant", "Advanced hair transplant for natural and permanent results.", "4 - 8 Hours", "7 - 10 Days", "/services/Hair Transplant.webp"),
  createService("prp-therapy", "Hair Restoration", "PRP Therapy", "Natural treatment to boost hair growth and improve scalp health.", "60 - 90 Min", "1 - 2 Days", "/services/PRP Therapy.webp"),
  createService("hair-fall-treatment", "Hair Restoration", "Hair Fall Treatment", "Effective solutions to reduce hair fall and strengthen hair.", "30 - 45 Min", "Ongoing", "/services/Hair Fall Treatment.webp"),
  createService("alopecia-areata", "Hair Restoration", "Alopecia Areata", "Specialized targeted treatment for spot baldness and autoimmune hair loss.", "45 Min", "Ongoing", "/services/Alopecia Areata.webp"),

  // ✨ Skin & Laser
  createService("hydrafacial", "Skin & Laser", "HydraFacial", "Deep cleansing and hydration for glowing, healthy skin.", "45 - 60 Min", "No Downtime", "/services/HydraFacial.webp"),
  createService("chemical-peel", "Skin & Laser", "Chemical Peel", "Remove dead skin cells and reduce spots, scars & pigmentation.", "30 - 45 Min", "2 - 3 Days", "/services/Chemical Peel.webp"),
  createService("laser-hair-removal", "Skin & Laser", "Laser Hair Removal", "Permanent hair reduction with advanced laser technology.", "30 - 60 Min", "No Downtime", "/services/Laser Hair Removal.webp"),
  createService("skin-whitening", "Skin & Laser", "Skin Whitening", "Safe and effective treatments to lighten complexion and enhance glow.", "45 - 60 Min", "Minimal", "/services/Skin Whitening.webp"),
  createService("skin-glow", "Skin & Laser", "Skin Glow", "Rejuvenating treatments for a radiant and youthful skin appearance.", "45 Min", "No Downtime", "/services/Skin Glow.webp"),
  createService("acne-treatment", "Skin & Laser", "Acne Treatment", "Advanced therapies to control breakouts and reduce inflammation.", "30 - 45 Min", "Minimal", "/services/Acne Treatment.webp"),
  createService("under-eye-dark-circle", "Skin & Laser", "Under Eye Dark Circle", "Specialized treatments to reduce pigmentation and puffiness under eyes.", "30 Min", "No Downtime", "/services/Under Eye Dark Circle.webp"),
  createService("birth-mark-removal", "Skin & Laser", "Birth Mark Removal", "Laser treatments for the safe fading and removal of birthmarks.", "45 Min", "2 - 3 Days", "/services/Birth Mark Removal.webp"),
  createService("tattoo-removal", "Skin & Laser", "Tattoo Removal", "Safe and effective Q-Switched laser removal of unwanted tattoos.", "30 - 45 Min", "3 - 5 Days", "/services/Tattoo Removal.webp"),
  createService("laser-peeling", "Skin & Laser", "Laser Peeling", "Advanced laser resurfacing for scars, wrinkles, and skin texture.", "45 - 60 Min", "3 - 7 Days", "/services/Laser Peeling.webp"),
  createService("anti-ageing", "Skin & Laser", "Anti-Ageing", "Botox, fillers, and RF treatments to reduce fine lines and restore youth.", "30 - 60 Min", "Minimal", "/services/Anti-Ageing.webp"),
  createService("aesthetic-treatments", "Skin & Laser", "Aesthetic Treatments", "Comprehensive aesthetic care to enhance your natural beauty.", "Varies", "Varies", "/services/Aesthetic Treatments.webp"),

  // 🚨 Emergency Care
  createService("tooth-pain", "Emergency Care", "Tooth Pain", "Immediate relief and diagnosis for severe toothaches.", "Priority", "Immediate Relief", "/services/Tooth Pain.webp"),
  createService("broken-tooth", "Emergency Care", "Broken Tooth", "Urgent restorative care for chipped or fractured teeth.", "Priority", "Varies", "/services/Broken Tooth.webp"),
  createService("swelling", "Emergency Care", "Swelling", "Emergency diagnosis and treatment for oral swelling and infections.", "Priority", "Ongoing", "/services/Swelling.webp"),
  createService("emergency-extraction", "Emergency Care", "Emergency Extraction", "Urgent, painless removal of severely compromised teeth.", "Priority", "1 - 2 Days", "/services/Emergency Extraction.webp"),
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return SERVICES_DATA.find((service) => service.slug === slug);
};

export const getServicesByCategory = (category: ServiceCategory): ServiceData[] => {
  return SERVICES_DATA.filter((service) => service.category === category);
};
